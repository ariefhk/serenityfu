import type { Metadata } from "next"
import { Inter, Poppins, Saira } from "next/font/google"
import "./globals.css"
import NPProgresBarProvider from "@/components/provider/np-progress-provider"

const inter = Inter({ subsets: ["latin"] })
const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "400", "500", "600", "700", "800"],
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | SerenityFU by Serenity",
    default: "SerenityFU by Serenity",
  },
  description: "Official Web Serenity Furniture",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${poppins.className}`}
        suppressHydrationWarning>
        <NPProgresBarProvider>{children}</NPProgresBarProvider>
      </body>
    </html>
  )
}
