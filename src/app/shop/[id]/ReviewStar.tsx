import React from "react"
import { Star } from "~/components/shop_page/product/Star";

export default function ReviewStar({ star }: { star: number }) {
    if (star==0){
        return (
            <Star width={0}/>
        )
    }
    if (star > 0.5 && star < 1) {
        return (
            <Star width={12} pos="right" />
        )
    }

    if (star < 0.5 && star > 0) {
        return (
            <Star width={6} pos="left" />
        )
    }
    if (star === 0.5) {
        return <Star width={8} pos="left" />
    }

    return (
        <Star />
    )
}
