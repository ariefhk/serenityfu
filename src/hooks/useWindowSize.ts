import { useEffect, useState } from "react"

const hasWindow = typeof window !== "undefined"

const useWindowSize = () => {
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return {
      width,
      height,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return {
    windowWidth: windowDimensions.width,
    windowHeight: windowDimensions.height,
  }
}

export default useWindowSize
