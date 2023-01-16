
import { Poppins } from "@next/font/google"
import { ReactNode } from "react"
import { Navbar } from "./Navbar"

type LayoutProps = {
  children: ReactNode;
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <div className="py-6 w-[80%] m-auto">
      <Navbar />
      <main className={poppins.className}
      >{children}</main>
    </div>
  )
}
