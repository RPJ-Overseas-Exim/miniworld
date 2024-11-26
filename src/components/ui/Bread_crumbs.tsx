import clsx from "clsx"
import { ChevronRight } from "lucide-react"
import React from "react"
import { cn } from "~/lib/utils"

export function BreadCrumbs({ links, className }: { links: string[], className?:string }) {
    return (
        <ul className={cn("flex items-center text-foreground-muted gap-2 " + className)}>
            {
                links.map((link, index) => {
                    return (
                        <li className="flex items-center gap-2 text-sm" key={index}>
                            {link}
                            <ChevronRight className={clsx(index === links.length-1 && "hidden", "text-black")} size={16}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}
