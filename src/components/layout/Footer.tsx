"use client"
import clsx from "clsx";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { poppinsBold, poppinsLight } from "public/fonts/fonts"
import React from "react"

type FooterList = {
    heading: string;
    links: Record<string, string>;
}

const footerLists: FooterList[] = [
    {
        heading: "Links",
        links: {
            Home: "/",
            Shop: "/shop",
            About: "/about",
            Contact: "/contact"
        }
    },
    {
        heading: "Help",
        links: {
            "Payment Options": "/payment/options",
            "Returns": "/returns",
            "Privacy Policy": "/privacy",
            "Terms and Conditions": "/terms"
        }
    }
]

export function Footer() {
    const pathName= usePathname()

    return (
        <footer className={clsx("bg-custom-pink text-white", pathName!=="/" && "rounded-footer")}>
            <div className="w-4/5 mx-auto py-12">
                <div className="flex items-start flex-col gap-16 md:flex-row md:justify-start">

                    <div className="max-w-64">
                        <h2 className={`text-2xl ${poppinsBold.className} font-semibold mb-8`}>
                            Miniworld.
                        </h2>
                        <p className="whitespace-wrap leading-8">
                            loremipsumdolarsit loremipsumdolarsit loremipsumdolarsit
                        </p>
                    </div>

                    {
                        footerLists.map((fl, index) => {
                            return (
                                <div key={index}>
                                    <FooterHeading>{fl.heading}</FooterHeading>
                                    <ul className="space-y-4">
                                        {
                                            Object.entries(fl.links).map(([linkTitle, linkPath], index) => {

                                                return (
                                                    <FooterLink href={linkPath} key={index}>{linkTitle}</FooterLink>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }

                </div>
                <hr className="border-t border-white my-8 block" />
                <p>
                    {(new Date()).getFullYear()} Miniworld. All rights reserved
                </p>

            </div>

        </footer>
    )
}

function FooterHeading({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <h2 className={"font-semibold mb-8 " + className}>
            {children}
        </h2>
    )
}

function FooterLink({ href, className, children }: { href: string, className?: string, children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className={`${poppinsLight.className} font-light text-foreground-pink` + className}>
                {children}
            </Link>
        </li>
    )
}
