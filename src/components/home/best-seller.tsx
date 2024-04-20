"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { formatRupiah } from "@/lib/format-rupiah"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import SectionWrapper from "../common/section-wrapper"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const BestSeller = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  return (
    <SectionWrapper
      id="best-seller"
      className="grid grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-10 gap-x-0">
      <div className="md:col-span-1  col-span-3 space-y-14 h-max ">
        <div className="space-y-8">
          <h1 className="font-semibold text-text48_60 ">
            Best Seller Furnitur
          </h1>
          <p className="text-text18_26">
            Daftar furnitur yang banyak orang beli.{" "}
            <br className="md:block hidden" />
            <span className=" font-medium underline underline-offset-4">
              Jangan sampai kelewatan!
            </span>
          </p>
        </div>
        <Button asChild>
          <Link href={"/"}>Lihat Semua</Link>
        </Button>
      </div>
      <div className=" md:col-span-2 col-span-3 md:h-[400px] ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-[400px] w-full">
                  <CardContent className=" p-2 h-full  flex flex-col  ">
                    <div className="relative w-full h-[60%] ">
                      <Image
                        alt=""
                        src={"/images/chair.jpg"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Separator />
                    <div className="space-y-[30px] flex-grow relative">
                      <div className="p-2">
                        <h1 className="font-normal text-text16_24">
                          Kursi Ajaib
                        </h1>
                        <p className="font-semibold text-text24_30">
                          {formatRupiah(1200000)}
                        </p>
                      </div>
                      <div className="p-2 absolute bottom-1 w-full ">
                        <Button asChild className="w-full ">
                          <Link href={"/"}>Beli Sekarang!</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:invisible visible -left-3 h-10 w-10 " />
          <CarouselNext className="md:invisible  visible -right-3 h-10 w-10 " />
        </Carousel>
      </div>
    </SectionWrapper>
  )
}

export default BestSeller
