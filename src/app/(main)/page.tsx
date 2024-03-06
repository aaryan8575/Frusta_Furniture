import HomeBanner from "@/containers/HomeBanner"
import HomeProducts from "@/containers/HomeProducts"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bea You",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home() {
  return (
    <>
      <HomeBanner />
      <HomeProducts />
      <WhyChooseUs />
      <TestimonialCarousel />
    </>
  )
}
