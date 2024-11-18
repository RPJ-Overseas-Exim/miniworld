import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(className:string){
    return twMerge(clsx(className))
}
