"use server"
import { eq } from "drizzle-orm"
import { db } from "../db/index"
import { user } from "../db/schema"
import { type registerFormType } from "~/lib/types/User"
import { sendEmail } from "~/lib/utils"


export async function postUserData(User: registerFormType) {
    try {
        const prevUser = (await db.select().from(user).where(eq(user.email, User.email)))[0]
        const subject = "Verification OTP for your miniword account"
        const body = "Here is a verification otp to verify your account: "

        if (prevUser && !prevUser.verified) {
            sendEmail(prevUser.email,subject, body)
            return { success: true, message: "Please verify your number", userId:prevUser.id }
        } else if (prevUser) {
            return { success: false, message: "User already exists", userId: "" }
        }

        const newUser = (await db.insert(user)
            .values({ ...User, number: BigInt(User.number) })
            .returning())[0]

        if (newUser) {
            sendEmail(newUser.email,subject, body)
            return { success: true, message: "Please verify your number", userId:newUser.id }
        }

        return { success: false, message: "Registration failed", userId: "" }
    } catch (e) {
        console.log(e)
        return { success: false, message: "Registration failed", userId: "" }
    }
}

export async function verifyOTP(userId: string, otp: number) {
    try {
        const User = (await db.select().from(user).where(eq(user.id, userId)))[0]

        console.log(User)
        if (User && User.OTP === otp) {
            return { success: true, message: "OTP verified successfully", userId }
        }
        return { success: false, message: "OTP could not be verified", userId }
    } catch (e) {
        console.log(e)
        return { success: false, message: "OTP could not be verified", userId }
    }
}
