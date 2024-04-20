import { useCallback, useEffect, useState } from "react"

const useScroll = (maxHeightToWatchScrolling: number = 100) => {
  const [isScrolled, setIsScrolled] = useState(false)

  // with useCallback
  const handleColorNav = useCallback(() => {
    if (typeof window !== "undefined") {
      if (
        window.scrollY >= maxHeightToWatchScrolling ||
        document.body.scrollTop >= maxHeightToWatchScrolling ||
        document.documentElement.scrollTop >= maxHeightToWatchScrolling
      ) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
  }, [maxHeightToWatchScrolling])

  useEffect(() => {
    window.addEventListener("scroll", handleColorNav, false)
    return () => {
      window.removeEventListener("scroll", handleColorNav, false)
    }
  })

  return { isScrolled }
}

export default useScroll
