import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";


export default function Mainlayouts() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar></Navbar> 
      <Outlet></Outlet>  
      <Footer></Footer>           
    </div> 
  )
}
