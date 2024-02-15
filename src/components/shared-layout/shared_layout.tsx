import { Outlet } from "react-router-dom"
import { Header } from "../header/header"
import { DesktopNavbar } from "../navbar/desktop_navbar/desktop_navbar"
import { MobileNavbar } from "../navbar/mobile_navbar/mobile_navbar"


export const SharedLayout = () => {
  return (
    <>
        <Header />
        <MobileNavbar />
        <DesktopNavbar />
        <Outlet />
    </>
  )
}
