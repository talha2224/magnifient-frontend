import React from "react";

import AccountActive from "../../../assets/menu/accountactive.png";
import AccountInactive from "../../../assets/menu/accountinactive.png";
import SavedActive from "../../../assets/menu/saveactive.png";
import SavedInactive from "../../../assets/menu/saveinactive.png";
import AnalyticsActive from "../../../assets/menu/analysisactive.png";
import AnalyticsInactive from "../../../assets/menu/analysisinactive.png";
import DonationActive from "../../../assets/menu/devotionactive.png";
import DonationInactive from "../../../assets/menu/devotioninactive.png";
import LanguageActive from "../../../assets/menu/languageactive.png";
import LanguageInactive from "../../../assets/menu/languageinactive.png";
import PrivacyActive from "../../../assets/menu/privacyactive.png";
import PrivacyInactive from "../../../assets/menu/privacyinactive.png";
import NotificationActive from "../../../assets/menu/notiactive.png";
import NotificationInactive from "../../../assets/menu/notiinactive.png";

const menu = [
    { name: "Account Settings", activeImg: AccountActive, inactiveImg: AccountInactive },
    { name: "Saved devotionals", activeImg: SavedActive, inactiveImg: SavedInactive },
    { name: "Analytics", activeImg: AnalyticsActive, inactiveImg: AnalyticsInactive },
    { name: "Donations history", activeImg: DonationActive, inactiveImg: DonationInactive },
    { name: "Language preference", activeImg: LanguageActive, inactiveImg: LanguageInactive },
    { name: "Privacy & Security", activeImg: PrivacyActive, inactiveImg: PrivacyInactive },
    { name: "Notification settings", activeImg: NotificationActive, inactiveImg: NotificationInactive },
];

const ProfileSidebar = ({ isOpen, onClose, isMobile, activeItem, setActiveItem }) => {
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
                className={`h-full bg-white border rounded-md flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isMobile
                        ? `fixed top-0 left-0 w-64 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`
                        : `absolute top-0 left-0 w-64 z-20 ${isOpen ? "translate-x-0" : "-translate-x-full"}`
                    }
        `}
            >
                {/* Menu */}
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {menu.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveItem(item.name)}
                            className={`flex items-center gap-2 w-full py-3 font-medium px-2 text-[13px] font-poppins rounded-lg transition
                ${item.name === activeItem
                                    ? "bg-[#3CCDF8] text-white px-4"
                                    : "text-[#5C5858]"
                                }`}
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
            </div>
        </>
    );
};

export default ProfileSidebar;
