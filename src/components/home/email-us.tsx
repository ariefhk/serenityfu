import Image from "next/image"
import React from "react"
import SectionWrapper from "../common/section-wrapper"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const EmailUs = () => {
  return (
    <div
      id="contact"
      className="relative sm:w-screen md:w-screen md:h-[500px] h-[360px]">
      <Image
        alt=""
        src={"/images/lamp.jpg"}
        fill
        className="object-cover left-0  md:object-center  "
      />
      <SectionWrapper className="text-white flex flex-col justify-center items-end relative ">
        <div className="max-w-[500px] flex  flex-col gap-y-5 items-end">
          <div className="md:space-y-5  space-y-2">
            <h1 className="font-semibold md:text-text32_48 text-text32_48">
              Dapatkan diskon lebih besar <br className="md:block hidden" />{" "}
              dari pesanan Anda
            </h1>
            <p className="text-text18_26">
              Jika ada pertanyaan, silahkan email kami!
            </p>
          </div>
          <form className="w-full  ">
            <div className="flex w-full items-center gap-5">
              <Input placeholder="Masukan email Anda..." />
              <Button>Daftar</Button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default EmailUs
