"use client"

import useScroll from "@/hooks/useScroll"
import { cn } from "@/lib/tailwind-utils"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "../ui/button"
import SectionWrapper from "./section-wrapper"

const navLink = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "#about-me",
  },
  {
    name: "Furniture",
    href: "#furniture",
  },
  {
    name: "Best Seller",
    href: "#best-seller",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "Login",
    href: "/login",
  },
]

const DesktopNavLink = () => {
  return (
    <div className=" hidden md:flex gap-x-8 md:items-center ">
      {navLink.map((link, index) => (
        <Link
          href={link.href}
          key={index + 1}
          className="hover:underline hover:underline-offset-4 font-medium">
          <h1>{link.name}</h1>
        </Link>
      ))}
    </div>
  )
}

const MobileNavLink = () => {
  const [isShowMobileNavLink, setIsShowMobileNavLink] = useState(false)

  return (
    <div className="md:hidden block ">
      <Button onClick={() => setIsShowMobileNavLink(!isShowMobileNavLink)}>
        <Menu className="h-5 w-5" />
      </Button>
      {isShowMobileNavLink && (
        <div className="fixed px-[20px] z-20 bg-background gap-y-3 py-3  border-b top-[70px] right-0 flex flex-col items-center  left-0 w-screen">
          {navLink.map((link, index) => (
            <Link
              onClick={() => setIsShowMobileNavLink(false)}
              href={link.href}
              key={index + 1}
              className="hover:underline hover:underline-offset-4 font-medium">
              <h1>{link.name}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  const { isScrolled } = useScroll(10)
  return (
    <nav
      className={cn("fixed top-0 w-full z-20 bg-white bg-opacity-0", {
        "border-b border-b-slate-300 backdrop-filter backdrop-blur-lg bg-color-1 bg-opacity-70":
          isScrolled,
      })}>
      <SectionWrapper className="flex justify-between text-white  items-center h-[70px]">
        <Link href={"/"} className="text-text24_30 font-semibold">
          SerenityFu
        </Link>
        <DesktopNavLink />
        <MobileNavLink />
      </SectionWrapper>
    </nav>
  )
}

export default Navbar
