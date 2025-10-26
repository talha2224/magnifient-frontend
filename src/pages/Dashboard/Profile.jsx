import React, { useState, useEffect } from "react";
import ProfileSidebar from "../../components/Dashboard/Profile/ProfileSidebar";
import AccountAndSetting from "../../components/Dashboard/Profile/AccountAndSetting";
import { IoChevronBackOutline } from "react-icons/io5";
import SaveDevotionals from "../../components/Dashboard/Profile/SaveDevotionals";
import DevoutionalHistory from "../../components/Dashboard/Profile/DevotionalHistory";
import Language from "../../components/Dashboard/Profile/Language";
import Privacy from "../../components/Dashboard/Profile/Privacy";
import Notification from "../../components/Dashboard/Profile/Notification";
import Analysis from "../../components/Dashboard/Profile/Analysis";


const componentMap = {
    "Account Settings": <AccountAndSetting />,
    "Saved devotionals": <SaveDevotionals />,
    Analytics: <Analysis />,
    "Donations history": <DevoutionalHistory />,
    "Language preference": <Language />,
    "Privacy & Security": <Privacy />,
    "Notification settings": <Notification />
};

function Profile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [activeItem, setActiveItem] = useState("Account Settings");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
                setIsSidebarOpen(false);
            } else {
                setIsMobile(false);
                setIsSidebarOpen(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Top Heading */}
            <div className="w-full text-black pb-4">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="md:hidden text-black"
                    >
                        ☰
                    </button>
                    <div className="flex border cursor-pointer gap-1 px-2 py-2 rounded-md">
                        <IoChevronBackOutline size={14} className="mt-[1px]" />
                        <h3 className="text-xs font-poppins"> Back </h3>
                    </div>
                    <h2 className="text-xl font-semibold font-poppins">Profile</h2>
                </div>
            </div>

            {/* Layout */}
            <div className="flex h-screen bg-gray-50 relative">

                {/* Sidebar */}
                <ProfileSidebar
                    onClose={() => setIsSidebarOpen(false)}
                    isOpen={isSidebarOpen}
                    isMobile={isMobile}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />

                {/* Main Content */}
                <div
                    className={`flex flex-col flex-1 transition-all duration-300 ease-in-out`}
                    style={{
                        marginLeft: !isMobile && isSidebarOpen ? "16rem" : "0",
                        position: "relative",
                    }}
                >
                    <main className="border overflow-y-auto flex-1 bg-white rounded-md shadow-sm md:mx-4">
                        {componentMap[activeItem]}
                    </main>
                </div>
            </div>
        </>
    );
}

export default Profile;
