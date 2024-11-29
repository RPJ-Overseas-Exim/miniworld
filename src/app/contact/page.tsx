import React from "react"
import ContactBottomBannerSection from "~/components/contact_page/bottom_banner"
import ContactDescriptionSection from "~/components/contact_page/description_section"
import ContactFormSection from "~/components/contact_page/form_section"
import ImageSection from "~/components/contact_page/image_section"

export default function ContactPage(){
    return (
        <div>
            <ImageSection />
            <ContactDescriptionSection />
            <ContactFormSection />
            <ContactBottomBannerSection />
        </div>
    )
}
