import AboutUs from "@/components/home/about-us"
import BestSeller from "@/components/home/best-seller"
import Hero from "@/components/home/hero"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <div className="mb-[1000px]">
      <Hero />
      <div className="md:mt-[160px] mt-[360px] md:space-y-[120px] space-y-[64px]">
        <AboutUs />
        <BestSeller />
      </div>
    </div>
  )
}
