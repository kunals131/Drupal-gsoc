import React from "react";
import {BsBookmarkDashFill, BsFillPenFill, BsFillSunFill} from 'react-icons/bs'
import {
  MdHome,
  MdStackedBarChart,
  MdQuestionAnswer,
  MdAccessAlarms,
  MdStorefront,
  MdLogout,
  MdDarkMode,
  MdCategory,
  MdLibraryAdd
} from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { FaBookOpen, FaRobot } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
import { WhiteLogoPNG } from "@/utils/assets";
import { BiLogOut } from "react-icons/bi";



interface ISidebarIconProps {
  icon : React.ReactNode;
  text : string;
  link: string;
  onClick?: any;
}


const SideBarIcon = ({ icon, text = "tooltip 💡", link, onClick }:ISidebarIconProps) => {
  const router = useRouter();
  const handleClick = ()=>router.push(link)
  const isActive = router.pathname===link;
  return (
    <div onClick={link?handleClick:onClick} className={`sidebar-icon group ${isActive?'activeIcon':''}`}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

const Sidebar = () => {
  const router = useRouter();
  


  return (
    <div className="fixed z-[10000] top-0   scale-0 sm:scale-100 left-0 h-screen w-24 m-0 flex flex-col items-center pt-8  bg-primary dark:bg-darkElevation-100 text-white shadow-lg">
      <div className="w-[70px]">
        <Image alt="logo" src={WhiteLogoPNG} />
      </div>
      <div className="mt-36"></div>
      <SideBarIcon
        link="/app"
        icon={<MdHome size="28" />}
        text="Explore 🌍"
      />
      <SideBarIcon
        link="/app/blog"
        icon={<MdCategory size="27" />}
        text="Content 📑"
      />
      <SideBarIcon icon={<FaBookOpen size="23" />} link="/app/my-courses" text="My Courses 📚" />
      <SideBarIcon icon={<MdLibraryAdd size="22" />} link="/app/course/create" text="Create Course ⚡" />
      {/* <SideBarIcon icon={<MdStorefront size="26" />} link="/" text="Store💊" /> */}
      <div className="mt-52">
        <div className="w-[30px] hover:shadow-xl hover:bg-white transition-all hover:text-primary h-[30px] rounded-full flex items-center justify-between">
        <BiLogOut size={24} className="cursor-pointer"/>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;