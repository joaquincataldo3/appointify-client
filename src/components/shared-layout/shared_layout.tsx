import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { BlackScreen } from "../black-screen/black_screen";



export const SharedLayout = () => {
  return (
    <>
        <Header />
        <BlackScreen />
        <Outlet />
    </>
  )
}
