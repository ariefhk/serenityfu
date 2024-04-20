import { cn } from "@/lib/tailwind-utils"

type SectionWrapperProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

const SectionWrapper = ({
  id,
  children,
  className,
}: Readonly<SectionWrapperProps>) => {
  return (
    <section
      id={id}
      className={cn(
        "container h-full max-w-screen-xl px-5 lg:px-8",
        className,
      )}>
      {children}
    </section>
  )
}

export default SectionWrapper
