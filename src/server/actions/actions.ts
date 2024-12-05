"use server"
import { eq } from "drizzle-orm"
import { db } from "../db/index"
import { user } from "../db/schema"
import { type registerFormType } from "~/lib/types/User"
import {  sendVerificationEmail } from "~/lib/utils"

export async function postUserData(User: registerFormType) {
    try {
        const prevUser = (await db.select().from(user).where(eq(user.email, User.email)))[0]
        if (prevUser && !prevUser.verified) {
            sendVerificationEmail(prevUser.email, prevUser.OTP)
            return { success: true, message: "Please verify your email", userId:prevUser.id }
        } else if (prevUser) {
            return { success: false, message: "User already exists", userId: "" }
        }

        const newUser = (await db.insert(user)
            .values({ ...User, number: BigInt(User.number) })
            .returning())[0]

        if (newUser) {
            sendVerificationEmail(User.email, newUser.OTP)
            return { success: true, message: "Please verify your email", userId:newUser.id }
        }

        return { success: false, message: "Registration failed", userId: "" }
    } catch (e) {
        console.log(e)
        return { success: false, message: "Registration failed", userId: "" }
    }
}

export async function verifyEmail(email: string){
    try{
        const User = (await db.select().from(user).where(eq(user.email, email)))[0]
        if(User){
            const newOTP = Math.floor(Math.random() * 9999)
            await db.update(user).set({OTP:newOTP}).where(eq(user.id, User.id))
            sendVerificationEmail(User.email, newOTP)
            return {success: true, userId:User.id}
        }
        return {success:false}
    }catch(e){
        console.log(e)
        return {success:false}
    }
}

export async function verifyOTP(userId: string, otp: number) {
    try {
        const User = (await db.select().from(user).where(eq(user.id, userId)))[0]

        if (User && User.OTP === otp) {
            return { success: true, message: "OTP verified successfully", userId, email:User.email }
        }
        return { success: false, message: "OTP could not be verified", userId  }
    } catch (e) {
        console.log(e)
        return { success: false, message: "OTP could not be verified", userId }
    }
}
