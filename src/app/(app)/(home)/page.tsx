import AboutUs from "@/components/home/about-us"
import BestSeller from "@/components/home/best-seller"
import EmailUs from "@/components/home/email-us"
import GetAllFurniture from "@/components/home/get-all-furniture"
import Hero from "@/components/home/hero"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="md:mt-[160px] mt-[360px] md:space-y-[120px] space-y-[64px]">
        <AboutUs />
        <BestSeller />
        <GetAllFurniture />
        <EmailUs />
      </div>
    </div>
  )
}
