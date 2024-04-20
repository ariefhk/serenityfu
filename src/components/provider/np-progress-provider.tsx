"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import { Suspense } from "react"

type Props = {
  children: React.ReactNode
}

const NPProgresBarProvider = (props: Readonly<Props>) => {
  return (
    <>
      {props.children}
      <Suspense>
        <ProgressBar
          height="4px"
          color={"#322C2B"}
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  )
}

export default NPProgresBarProvider
