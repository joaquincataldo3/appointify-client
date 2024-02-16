import { Outlet } from "react-router-dom";
import { Header } from "../header/header";



export const SharedLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}
