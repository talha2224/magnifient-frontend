import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import FacebookImg from '../../../assets/facebook.png'
import InstaImg from '../../../assets/insta.png'
import GoogleImg from '../../../assets/google.png'
import AppleImg from '../../../assets/apple.png'

const accounts = [
    {
        name: "Facebook",
        img: FacebookImg,
    },
    {
        name: "Instagram",
        img: InstaImg,
    },
    {
        name: "Google",
        img: GoogleImg,
    },
    {
        name: "Apple",
        img: AppleImg,
    },
];

const AccountAndSetting = () => {
    const [activeTab, setActiveTab] = useState("Change password");

    return (
        <div className="flex-1 rounded-lg">
            {/* Tabs */}
            <div className="flex md:py-3 md:px-5 py-2 px-3 gap-3 border-b mb-4">
                {["Change password", "Connected accounts"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-poppins rounded-md md:text-sm text-xs font-medium 
              ${activeTab === tab
                                ? "bg-black text-white"
                                : "bg-gray-100 text-black border"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Change Password Form */}
            {activeTab === "Change password" && (
                <form className="space-y-4 md:pl-5 px-4 max-w-2xl">
                    <div>
                        <label className="block font-poppins text-sm font-medium mb-1">
                            Old password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter old password"
                            className="w-full border font-poppins text-sm rounded-md px-3 py-3 bg-gray-100 focus:ring-2 focus:ring-[#3CCDF8] outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-poppins font-medium mb-1">
                            New password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full border font-poppins text-sm rounded-md px-3 py-3 bg-gray-100 focus:ring-2 focus:ring-[#3CCDF8] outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#3CCDF8] text-white py-3 rounded-md font-medium transition"
                    >
                        Save
                    </button>
                </form>
            )}

            {/* Connected Accounts (dummy example) */}
            {activeTab === "Connected accounts" && (
                <div className="">
                    <div className="">
                        {accounts.map((account) => (
                            <div
                                key={account.name}
                                className="flex items-center justify-between border-b px-5 py-3 transition"
                            >
                                
                                <div className="flex items-center gap-3">
                                    <img
                                        src={account.img}
                                        alt={account.name}
                                        className="w-6 h-6 object-contain"
                                    />
                                    <span className="text-gray-700 font-medium">{account.name}</span>
                                </div>

                        
                                <FaCheckCircle className="text-[#3CCDF8] text-md" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountAndSetting;
