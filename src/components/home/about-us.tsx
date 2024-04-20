import { cn } from "@/lib/tailwind-utils"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"
import SectionWrapper from "../common/section-wrapper"

type AboutUsProps = {
  className?: string
}

const AboutUs = (props: AboutUsProps) => {
  return (
    <SectionWrapper
      id="about"
      className={cn(
        "grid md:grid-cols-2  gap-y-12 md:gap-y-0",
        props.className,
      )}>
      <div className="relative max-w-[500px] md:h-[400px] h-[300px] rounded-[20px] overflow-hidden">
        <Image
          alt=""
          src={"/images/about-us.jpg"}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-[34px] order-first md:order-last">
        <div className="space-y-[16px]">
          <h1 className="text-text48_60 font-semibold">
            Kami Membuat rumah Anda lebih estetis
          </h1>
          <p className="text-text18_26">
            SerenityFu menyajikan koleksi furnitur yang elegan dan fungsional
            untuk menyulap setiap ruang menjadi oasis ketenangan dan gaya yang
            tak tergoyahkan
          </p>
        </div>
        <div className="space-y-[24px]">
          <div className="flex items-start gap-x-4">
            <FaCheckCircle className="w-[32px] h-[32px]" />
            <div>
              <h2 className="text-text18_26 font-semibold">
                Layanan Penilaian
              </h2>
              <p>
                Terkadang furnitur memerlukan panduan yang tepat. Ini bisa
                menjadi jawaban kegawalan Anda.
              </p>
            </div>
          </div>
          <div className="flex  items-start gap-x-4">
            <FaCheckCircle className="w-[32px] h-[32px]" />
            <div>
              <h2 className="text-text18_26 font-semibold">
                Pengembangan Model Furnitur
              </h2>
              <p>
                Dengan furnitur yang sesuai selera Anda. Hal ini menjamin hidup
                Anda menjadi lebih bahagia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutUs
