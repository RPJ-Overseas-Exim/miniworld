import { clsx } from "clsx"
import { type PgTable } from "drizzle-orm/pg-core"
import { twMerge } from "tailwind-merge"
import { db } from "~/server/db"

export function cn(className:string){
    return twMerge(clsx(className))
}

export function prepareDummyData(data:Record<string, string>[], model:PgTable){
    return db.insert(model).values(data)
}
