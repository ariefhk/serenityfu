// import Footer from "@/components/common/footer"
import Navbar from "@/components/common/navbar"
import ScrollToTop from "@/components/common/scroll-to-top"

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <main>
      <Navbar />
      <div className="overflow-x-hidden">{props.children}</div>
      <ScrollToTop />
      {/* <Footer /> */}
    </main>
  )
}

export default Layout
