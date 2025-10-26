import React, { useState } from "react";
import {
    X,
} from "lucide-react";
import SidebarTopImg from '../../../assets/sidebartop.png';
import SidebarRightImg from '../../../assets/sidebarright.png';
import SidebarBottomImg from '../../../assets/sidebarbottom.png';

import HomeActive from '../../../assets/menu/homeactive.png';
import HomeInactive from '../../../assets/menu/homeinactive.png';
import BibleActive from '../../../assets/menu/bibleactive.png';
import BibleInactive from '../../../assets/menu/bibleinactive.png';
import PlansActive from '../../../assets/menu/plansactive.png';
import PlansInactive from '../../../assets/menu/plansinactive.png';
import MediaActive from '../../../assets/menu/mediaactive.png';
import MediaInactive from '../../../assets/menu/mediainactive.png';
import CommunityActive from '../../../assets/menu/communityactive.png';
import CommunityInactive from '../../../assets/menu/communityinactive.png';
import QuizActive from '../../../assets/menu/quizeactive.png';
import QuizInactive from '../../../assets/menu/quizeinactive.png';
import ResourcesActive from '../../../assets/menu/resourcesactive.png';
import ResourcesInactive from '../../../assets/menu/resourcesinactive.png';
import UpgradeToProModal from "../../../pages/Dashboard/UpgradeToProModal";

const menu = [
    { name: "Home", activeImg: HomeActive, inactiveImg: HomeInactive },
    { name: "Bible", activeImg: BibleActive, inactiveImg: BibleInactive },
    { name: "Plans", activeImg: PlansActive, inactiveImg: PlansInactive },
    { name: "Media", activeImg: MediaActive, inactiveImg: MediaInactive },
    { name: "Community", activeImg: CommunityActive, inactiveImg: CommunityInactive },
    { name: "Quiz & Games", activeImg: QuizActive, inactiveImg: QuizInactive },
    { name: "Resources", activeImg: ResourcesActive, inactiveImg: ResourcesInactive },
];

const Sidebar = ({ isOpen, onClose, isMobile, activeItem, setActiveItem }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            {/* Mobile overlay */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`h-full bg-white border-r flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isMobile
                        ? `fixed top-0 left-0 w-64 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`
                        : `absolute top-0 left-0 w-64 z-20 ${isOpen ? "translate-x-0" : "-translate-x-full"}`
                    }
        `}
            >
                {/* Top Section with logo & Close */}
                <div className="py-3 px-4 flex items-center justify-between">
                    <img src={SidebarTopImg} alt="Logo" className="h-[50px] object-contain" />
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        <img src={SidebarRightImg} className="h-4 w-4 mt-2 object-contain" alt="" />
                    </button>
                </div>

                {/* Horizontal line below top images */}
                <div className="border-b border-[#EEEEEE] mt-1 mx-4" />

                {/* Menu */}
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {menu.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveItem(item.name)}
                            className={`flex items-center gap-2 w-full py-3 font-medium px-2 text-[13px] font-poppins rounded-lg text-gray-700 transition
                            ${item.name === activeItem ? "bg-[#3CCDF8] mt-1 mb-1 px-4 text-white" : "text-[#5C5858]"}`}
                        >
                            <img
                                src={item.name === activeItem ? item.activeImg : item.inactiveImg}
                                alt={item.name}
                                className="h-5 w-5 object-contain"
                            />
                            {item.name}
                        </button>
                    ))}
                </nav>

            
                <div className="py-5 border border-[#E3E3E3] mx-5 bg-[#F9F9F9] rounded-lg mb-4 flex flex-col items-center">
                    <img src={SidebarBottomImg} alt="Bottom" className="w-[150px] object-contain" />
                    <button className="bg-gray-700 font-poppins text-[10px] px-5 text-white py-2 rounded-lg transition">
                        UPGRADE TO PRO
                    </button>
                </div>

                {/* Modal */}
                <UpgradeToProModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />

            </div>
        </>
    );
};

export default Sidebar;
