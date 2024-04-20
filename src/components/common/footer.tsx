"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { Separator } from "../ui/separator"
import { navLink } from "./navbar"
import SectionWrapper from "./section-wrapper"

export const sosmed = [
  {
    id: 1,
    name: "Facebook",
    href: "/",
    icon: FaFacebook,
  },
  {
    id: 2,
    name: "Instagram",
    href: "/",
    icon: FaInstagram,
  },
  {
    id: 3,
    name: "Youtube",
    href: "/",
    icon: FaYoutube,
  },
  {
    id: 4,
    name: "Twitter",
    href: "/",
    icon: FaTwitter,
  },
]

const Footer = () => {
  return (
    <div className="bg-[#23262F] text-white ">
      <SectionWrapper className="py-10 grid grid-cols-1  md:grid-cols-3 gap-y-10 md:gap-y-0">
        <div className="space-y-1">
          <div className="flex items-center gap-x-3">
            <Link href={"/"} className="text-text24_30 font-semibold">
              <Image alt="" src={"/images/logo.png"} width={60} height={20} />
            </Link>
            <h1 className="font-bold text-text24_30">Serenity Furniture</h1>
          </div>
          <p>Platform terbaik untuk mencari furnitur Anda</p>
        </div>

        <div className="flex md:justify-center">
          <div className="flex flex-col gap-y-2 ">
            <h1 className="font-semibold text-text18_20">Pranala</h1>
            {navLink.map((link, index) => (
              <Link
                key={index + 1}
                href={link.href}
                className="hover:underline hover:underline-offset-4">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex md:justify-center">
          <div className="space-y-5">
            <h1 className="font-semibold text-text18_20">Sosial Media</h1>
            <div className="flex items-center gap-x-5">
              {sosmed.map((sosmedData, index) => {
                const Icon = sosmedData.icon
                return (
                  <Link
                    key={index + 1}
                    href={sosmedData.href}
                    className="group flex flex-col gap-y-1">
                    <Icon className="w-8 h-8 flex-shrink-0" />
                    <Separator className="bg-white invisible group-hover:visible" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>
      <Separator />
      <div className="text-center text-sm py-2">
        <span>Made by</span>
        <Link
          href={"/"}
          className="px-2 hover:underline hover:underline-offset-4">
          SerenityFu
        </Link>
      </div>
    </div>
  )
}

export default Footer
