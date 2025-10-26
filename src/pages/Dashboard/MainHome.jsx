import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Dashboard/HomeDashboard/Sidebar";
import Topbar from "../../components/Dashboard/HomeDashboard/Topbar";
import HomeDashboard from "../../components/Dashboard/HomeDashboard/Home";
import Bible from "./Bible";
import Plans from "./Plans";
import Media from "./Media";
import Community from "./Community";
import QuizeAndGame from "./QuizeAndGame";
import Resources from "./Resources";

const componentMap = {
    Home: <HomeDashboard />,
    Bible: <Bible />,
    Plans: <Plans />,
    Media: <Media />,
    Community: <Community />,
    "Quiz & Games": <QuizeAndGame />,
    Resources: <Resources />,
};

function MainHome() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

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
        <div className="flex h-screen bg-gray-50 overflow-hidden relative">
            {/* Sidebar */}
            <Sidebar
                onClose={() => setIsSidebarOpen(false)}
                isOpen={isSidebarOpen}
                isMobile={isMobile}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                onHomeClick={() => setSelectedSermon(null)}
            />

            {/* Main Content */}
            <div
                className={`flex flex-col flex-1 transition-all duration-300 ease-in-out`}
                style={{
                    marginLeft: !isMobile && isSidebarOpen ? "16rem" : "0",
                    position: "relative",
                }}
            >
                <Topbar
                    onOpenSidebar={() => setIsSidebarOpen(true)}
                    isSidebarOpen={isSidebarOpen}
                    isMobile={isMobile}
                />
                <main className="p-4 overflow-y-auto flex-1">
                    {componentMap[activeItem]}
                </main>
            </div>
        </div>
    );
}

export default MainHome;
