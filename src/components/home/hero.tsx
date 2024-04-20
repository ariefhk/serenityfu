import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "../common/section-wrapper"
import { Button } from "../ui/button"

const HeroImage = () => {
  return (
    <div className="relative h-[500px] sm:w-screen md:w-screen md:h-[calc(100vh_-_80px)] brightness-75">
      <Image
        className="object-cover object-right md:object-center"
        alt=""
        src={"/images/hero.jpg"}
        fill
      />
    </div>
  )
}

const HeroTitle = () => {
  return (
    <div className="absolute text-white top-[50%] translate-y-[-50%]  left-[50%] translate-x-[-50%] w-max">
      <div className="flex flex-col gap-y-[40px] justify-center items-center max-w-[400px] sm:max-w-[600px] md:max-w-[800px]">
        <div className="md:space-y-[20px] space-y-[14px]">
          <h1 className="font-bold  md:text-text48_60 text-center sm:text-text36_48 text-text24_30">
            Crafting Comfort <br /> Where Style Meets Serenity
          </h1>
          <p className="text-center md:text-sm text-text12_20">
            SerenityFu hadir untuk memperindah dan membuat kenyamanan rumahmu.{" "}
            <br className="hidden sm:block" />
            SerenityFu menyajikan koleksi furnitur yang elegan dan fungsional{" "}
            <br className="hidden sm:block" />
            untuk menyulap setiap ruang menjadi oasis ketenangan dan gaya yang
            tak tergoyahkan!
          </p>
        </div>
        <Button asChild className="sm:w-[250px] sm:h-[50px] w-[200px] h-[40px]">
          <Link href={"/"} className="sm:text-text18_20 text-text16_24">
            Beli Sekarang!
          </Link>
        </Button>
      </div>
    </div>
  )
}

const HeroInfo = () => {
  return (
    <SectionWrapper className="absolute md:-bottom-16 -bottom-[300px]  h-max left-[50%] translate-x-[-50%] ">
      <div className="md:h-[130px] w-full h-auto rounded-[20px] bg-color-1 text-white grid grid-cols-1  md:grid-cols-3 items-center justify-between gap-4 px-[100px] md:py-0 py-5">
        <div className="  flex flex-col gap-y-2 md:border-l items-center  min-w-min-content ">
          <h1 className="text-text48_48 font-semibold">80</h1>
          <p className="text-center text-sm">
            <span className="block">Tahun</span>Pengalaman
          </p>
        </div>
        <div className="   flex md:border-r md:border-t-0 py-3 md:py-0 md:border-b-0 border-t border-b md:border-l flex-col gap-y-2 items-center min-w-min-content">
          <h1 className="text-text48_48 font-semibold">80</h1>
          <p className="text-center text-sm">
            <span className="block">Jumlah</span>Terjual
          </p>
        </div>
        <div className="  flex flex-col gap-y-2 md:border-r items-center  min-w-min-content">
          <h1 className="text-text48_48 font-semibold">80</h1>
          <p className="text-center text-sm">
            <span className="block">Macam</span>Furniture
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

const Hero = () => {
  return (
    <div className="relative">
      <HeroImage />
      <HeroTitle />
      <HeroInfo />
    </div>
  )
}

export default Hero
