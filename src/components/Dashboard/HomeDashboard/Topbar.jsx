import React from "react";
import { Search, Sun, Moon, Menu } from "lucide-react";
import TopBarLogo from '../../../assets/topbarlogo.png'
import ProfileImg from '../../../assets/profileimg.png'
import { BiSolidBell } from "react-icons/bi";
import { Link } from "react-router-dom";

const Topbar = ({ onOpenSidebar, isSidebarOpen, isMobile }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-30">
            {/* Hamburger + Logo */}
            {(!isSidebarOpen || isMobile) && (
                <div className="flex items-center md:gap-1 gap-0">
                    <button
                        onClick={onOpenSidebar}
                        className="p-2 rounded-md hover:bg-gray-100"
                    >
                        <Menu size={22} />
                    </button>
                    <img src={TopBarLogo} alt="Logo" className="md:h-8 h-6 object-contain" />
                </div>
            )}

            {/* Search Bar */}
            <div className="flex items-center hidden md:flex border border-[#DBDBDB] bg-gray-100 px-3 py-3 rounded-lg w-full md:w-1/3">
                <Search className="text-black mr-2" size={16} />
                <input
                    type="text"
                    placeholder="Search bible, media, live sermons"
                    className="bg-transparent font-poppins text-xs outline-none w-full"
                />
            </div>

            {/* Right Side Boxes */}
            <div className="flex items-center md:gap-2 gap-1 ml-4">
                {/* User Info Box */}
                <Link to='/profile'>
                    <div className="flex items-center rounded-md md:border md:border-[#DBDBDB] gap-1 bg-white py-1">
                        <img
                            src={ProfileImg}
                            alt="user"
                            className="w-12 h-8 object-contain"
                        />
                        <span className="font-medium font-poppins text-xs hidden md:block pr-3 text-black">Peter Alex</span>
                    </div>
                </Link>

                {/* Dark/Light Mode Box */}
                <div className="flex items-center md:border md:border-[#DBDBDB] gap-2 py-1 bg-white px-2 rounded-md">
                    <Moon size={18} className="text-gray-700" />

                    {/* Sun Icon inside a wrapper */}
                    <div className="bg-black p-[7px] rounded-sm flex items-center justify-center">
                        <Sun size={18} className="text-white" />
                    </div>
                </div>

                {/* Notification Box */}
                <Link to='/homenotification'>
                    <div className="relative bg-white md:border md:border-[#DBDBDB] p-3 rounded-full flex items-center justify-center">
                        {/* Bell Icon */}
                        <BiSolidBell size={20} className="text-black" />

                        
                        <span className="absolute top-[12px] right-[15px] w-[5px] object-contain h-[5px] bg-red-500 rounded-full"></span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Topbar;
