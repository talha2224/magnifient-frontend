import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Dashboard/HomeDashboard/Sidebar";
import Topbar from "../../../components/Dashboard/HomeDashboard/Topbar";
import LiveSermons from "../Media/LiveSermons";

function LiveSermonConstants() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();

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

    // Handle sidebar clicks
    const handleSidebarClick = (item) => {
        if (item === "Home") {
            navigate("/mainhome"); // Redirect to MainHome
        }
        // You can add more sidebar item navigation here if needed
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden relative">
            {/* Sidebar */}
            <Sidebar
                onClose={() => setIsSidebarOpen(false)}
                isOpen={isSidebarOpen}
                isMobile={isMobile}
                setActiveItem={handleSidebarClick} // pass click handler
            />

            {/* Main Content */}
            <div
                className={`flex flex-col flex-1 transition-all duration-300 ease-in-out`}
                style={{
                    marginLeft: !isMobile && isSidebarOpen ? "16rem" : "0",
                    position: "relative",
                }}
            >
                {/* Topbar */}
                <Topbar
                    onOpenSidebar={() => setIsSidebarOpen(true)}
                    isSidebarOpen={isSidebarOpen}
                    isMobile={isMobile}
                />

                {/* Main Recently Played content */}
                <main className="overflow-y-auto flex-1">
                    <LiveSermons />
                </main>
            </div>
        </div>
    );
}

export default LiveSermonConstants;
