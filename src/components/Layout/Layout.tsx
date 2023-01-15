import { type } from "os"
import { Navbar } from "./Navbar"

export const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
