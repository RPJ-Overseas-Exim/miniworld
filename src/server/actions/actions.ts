"use server"
import {db} from "../db/index"
import { user} from  "../db/schema"
import { type registerFormType } from "~/lib/types/User"


export async function postUserData(User:registerFormType ) {
    try {
        return (
            await db.insert(user)
                .values({ ...User, number: BigInt(User.number) })
                .returning()
        )
    } catch (e) {
        console.log(e)
        return null
    }
}
