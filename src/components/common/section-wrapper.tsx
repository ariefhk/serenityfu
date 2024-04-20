import { cn } from "@/lib/tailwind-utils"

type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
}

const SectionWrapper = ({
  children,
  className,
}: Readonly<SectionWrapperProps>) => {
  return (
    <section
      className={cn(
        "container h-full max-w-screen-xl px-5 lg:px-8",
        className,
      )}>
      {children}
    </section>
  )
}

export default SectionWrapper
