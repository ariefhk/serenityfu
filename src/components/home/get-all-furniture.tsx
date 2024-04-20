import { formatRupiah } from "@/lib/format-rupiah"
import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "../common/section-wrapper"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Separator } from "../ui/separator"

const furnitures = [
  {
    name: "test",
    imageUrl: "/images/ceiling-light.svg",
    price: "125000",
  },
  {
    name: "test",
    imageUrl: "/images/ceiling-light.svg",
    price: "125000",
  },
  {
    name: "test",
    imageUrl: "/images/ceiling-light.svg",
    price: "125000",
  },
  {
    name: "test",
    imageUrl: "/images/ceiling-light.svg",
    price: "125000",
  },
  {
    name: "test",
    imageUrl: "/images/ceiling-light.svg",
    price: "125000",
  },
  {
    name: "test",
    imageUrl: "/images/ceiling-light.svg",
    price: "125000",
  },
  {
    name: "test",
    imageUrl: "/images/ceiling-light.svg",
    price: "125000",
  },
  {
    name: "test",
    imageUrl: "/images/ceiling-light.svg",
    price: "125000",
  },
]

const GetAllFurniture = () => {
  return (
    <SectionWrapper
      id="furniture"
      className="flex flex-col items-center gap-y-14">
      <div className="space-y-5 h-max ">
        <h1 className="font-semibold text-text48_60 ">Semua Produk Funitur</h1>
        <p className="text-text18_26">
          Berikut beberapa contoh dari semua produk dari SerinityFu
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1  w-full gap-3">
        {furnitures.map((furnitur, index) => (
          <Card key={index + 1} className="h-[400px]">
            <CardContent className=" p-2 h-full  flex flex-col  ">
              <div className="relative w-full h-[60%] ">
                <Image
                  alt=""
                  src={furnitur.imageUrl}
                  fill
                  className="object-cover"
                />
              </div>
              <Separator />
              <div className="space-y-[30px] flex-grow relative">
                <div className="p-2">
                  <h1 className="font-normal text-text16_24">
                    {furnitur.name}
                  </h1>
                  <p className="font-semibold text-text24_30">
                    {formatRupiah(furnitur.price)}
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
        ))}

        <Link
          href={"/"}
          className="underline underline-offset-4 mt-5 text-text20_24 hover:font-bold font-medium">
          Lihat yang lain!
        </Link>
      </div>
    </SectionWrapper>
  )
}

export default GetAllFurniture
