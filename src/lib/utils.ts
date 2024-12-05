import { clsx } from "clsx"
import { type PgTable } from "drizzle-orm/pg-core"
import { twMerge } from "tailwind-merge"
import { db } from "~/server/db"
import nodemailer from "nodemailer"
import { env } from "~/env"

export function cn(...className:(string | undefined)[]){
    return twMerge(clsx(className))
}

export function prepareDummyData(data:Record<string, string>[], model:PgTable){
    return db.insert(model).values(data)
}

export const responsiveWidth = "px-6 sm:px-8 md:px-16" 

export function sendEmail(to:string, subject:string, body:string){
    const transporter = nodemailer.createTransport({
        service: env.SMTP_HOST,
        auth: {
            user:env.SMTP_USER,
            pass:env.SMTP_PASS,
        }
    })
    return transporter.sendMail({
        to,
        from:env.SMTP_USER,
        subject,
        text:body
    })
}

export function sendVerificationEmail(to:string, otp:number | null){
    const subject = "Verification OTP for your miniword account"
    const body = "Here is a verification otp to verify your account: " + otp
    return sendEmail(to, subject, body)
}
