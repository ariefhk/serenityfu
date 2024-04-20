// import Footer from "@/components/common/footer"
// import Navbar from "@/components/common/navbar"
// import ScrollTopButton from "@/components/common/scroll-top-button"

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <main>
      {/* <Navbar /> */}
      <div className="mt-[70px] container h-full  max-w-screen-xl px-5 lg:px-8">
        {props.children}
      </div>
      {/* <ScrollTopButton /> */}
      {/* <Footer /> */}
    </main>
  )
}

export default Layout
