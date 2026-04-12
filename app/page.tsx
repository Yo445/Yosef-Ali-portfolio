import Navbar from "@/components/Navbar/Navbar";
import Center from "@/layouts/Center/Center";
import LeftSideBar from "@/layouts/LeftSidebar/LeftSidebar";
import RightSideBar from "@/layouts/RightSidebar/RightSidebar";
import "@/scss/home.scss";

export default function Home() {
  return (
  <div>
    <Navbar />
    <div className='page'>
      <div className='page__left'><LeftSideBar /></div>
      <div className='page__center'><Center /></div>
      <div className='page__right'><RightSideBar /></div>
    </div>
  </div>
  );
}
