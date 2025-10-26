import React, { useState } from "react";
import bibleoneImg from "../../assets/bible1.png";
import bibletowImg from "../../assets/bible2.png";
import BibleThreeImg from "../../assets/bible3.png";
import { SlidersHorizontal, Bell } from "lucide-react";
import '../../../src/App.css'
import ReminderModal from "../../components/Dashboard/Plans/Reminder";
import UpgradePlanModal from "../../components/Dashboard/Plans/UpgradePlans";

const Plans = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

    const totalDays = 7;
    const activeDay = 1;
    const completedChapters = [1, 2, 3, 4];

    return (
        <div className="w-full min-h-screen bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left Side - Bible Reading Plan */}
                <div className="bg-white rounded-2xl shadow p-4">
                    <h2 className="text-xl font-semibold font-poppins mb-4">
                        Bible Reading Plan
                    </h2>

                    {/* Filter Buttons */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-1 justify-between">
                            <button className="md:px-9 md:py-3 px-4 py-2 font-poppins bg-[#3CCDF8] text-white rounded-lg text-sm">
                                All
                            </button>
                            <button className="md:px-9 md:py-3 px-4 py-2 text-gray-400 bg-[#F5F5F5] font-poppins text-sm rounded-lg">
                                Hope
                            </button>
                            <button className="md:px-9 md:py-3 px-4 py-2 text-gray-400 bg-[#F5F5F5] text-sm font-poppins rounded-lg">
                                Joy
                            </button>
                            <button className="md:px-9 md:py-3 px-4 py-2 text-gray-400 bg-[#F5F5F5] text-sm font-poppins rounded-lg">
                                Love
                            </button>
                        </div>

                    
                        <button className="flex ml-2 items-center gap-2 md:px-10 md:py-3 px-4 py-2 text-black bg-[#F5F5F5] rounded-lg font-poppins text-sm">
                            <SlidersHorizontal size={12} className="text-black" />
                            Filter
                        </button>
                    </div>

            
                    <div className="space-y-4">
                    
                        <div className="rounded-xl shadow-sm border overflow-hidden">
                        
                            <img
                                src={bibleoneImg}
                                className="w-full h-22 object-cover"
                                alt="plan"
                            />

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="font-semibold font-poppins text-lg">THE ESSENCE OF GIVING</h3>
                                <p className="text-sm font-poppins mt-3 text-gray-600">Matthew 15</p>

                                <div className="mt-3 flex items-center gap-1">
                                    <p className="text-xs text-gray-500 bg-[#F5F5F5] font-poppins rounded py-2 px-3 whitespace-nowrap">25 Days</p>
                                    <div className="relative flex-1 h-8 bg-[#F5F5F5] py-4 rounded flex items-center justify-center">
                                        <div className="absolute left-0 top-0 h-8 bg-[#90BE6D] rounded w-1/2"></div>
                                        <p className="relative text-xs font-medium font-poppins text-gray-600">
                                            Read 4/8
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="rounded-xl shadow-sm border overflow-hidden">
                            
                            <img
                                src={bibletowImg}
                                className="w-full h-22 object-cover"
                                alt="plan"
                            />

                        
                            <div className="p-4">
                                <h3 className="font-semibold font-poppins text-lg">THE ART OF GRATITUDE</h3>
                                <p className="text-sm font-poppins mt-3 text-gray-600">Psalm 119</p>

                                <div className="mt-3 flex items-center gap-3">
                                    <p className="text-xs text-gray-500 bg-[#F5F5F5] font-poppins rounded py-2 px-3 whitespace-nowrap">50 Days</p>
                                    <div className="relative flex-1 h-8 bg-[#F5F5F5] py-4 rounded flex items-center justify-center">
                                        <div className="absolute left-0 top-0 h-8 bg-[#3CCDF8] rounded w-1/12"></div>
                                        <p className="relative text-xs font-medium font-poppins text-gray-600">
                                            Read 0/18
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="rounded-xl shadow-sm border overflow-hidden">
                            
                            <img
                                src={BibleThreeImg}
                                className="w-full h-22 object-cover"
                                alt="plan"
                            />

                            
                            <div className="p-4">
                                <h3 className="font-semibold font-poppins text-lg">
                                    THE BENEFITS OF EVANGELISM
                                </h3>
                                <p className="text-sm font-poppins mt-3 text-gray-600">Matthew 23</p>


                                <div className="mt-3 flex items-center gap-3">
                                    <p className="text-xs text-gray-500 bg-[#F5F5F5] font-poppins rounded py-2 px-3 whitespace-nowrap">40 Days</p>
                                    <div className="relative flex-1 h-8 bg-[#F5F5F5] py-4 rounded flex items-center justify-center">
                                        <div className="absolute left-0 top-0 h-8 bg-[#F9C74F] rounded w-1/6"></div>
                                        <p className="relative text-xs font-medium font-poppins text-gray-600">
                                            Read 2/18
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-6">
                
                    <div className="bg-white rounded-2xl shadow p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold font-poppins md:text-lg text-sm">THE ESSENCE OF GIVING</h3>
                            <button onClick={() => setIsModalOpen(true)} className="px-2 py-2 flex bg-[#696969] gap-1 font-poppins text-white rounded-lg text-xs">
                                <Bell size={14} className="text-white mt-[1px]" /> Remind
                            </button>
                        </div>

                        
                        <ReminderModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onUpgrade={() => {
                                setIsModalOpen(false);
                                setIsUpgradeOpen(true);
                            }}
                        />

                
                        <UpgradePlanModal
                            isOpen={isUpgradeOpen}
                            onClose={() => setIsUpgradeOpen(false)}
                        />


                        <div className="mt-3 rounded bg-[#F6F6F6] py-3 px-3">
                            <h4 className="font-semibold mb-2 text-md font-poppins">Reflection</h4>
                            <p className="text-sm text-gray-600 font-poppins">
                                Life often feels uncertain, and in moments of waiting or confusion,
                                we tend to lean on our own limited understanding
                            </p>
                        </div>

                        
                        <div className="mt-4">
                            <h4 className="font-semibold font-poppins mb-2">Matthew Chapter 15</h4>

                            {/* Days Row */}
                            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                                {Array.from({ length: totalDays }, (_, i) => (
                                    <button
                                        key={i}
                                        className={`md:px-9 md:py-3 px-5 py-3 font-poppins rounded-md whitespace-nowrap md:text-sm text-xs ${i + 1 === activeDay
                                            ? "bg-[#696969] text-white"
                                            : "bg-gray-200 text-gray-700"
                                            }`}
                                    >
                                        Day {i + 1}
                                    </button>
                                ))}
                            </div>

                            {/* Chapters Row */}
                            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mt-2">
                                {Array.from({ length: 20 }, (_, i) => (
                                    <button
                                        key={i}
                                        className={`md:px-6 md:py-3 px-4 py-2 rounded-md whitespace-nowrap text-sm ${completedChapters.includes(i + 1)
                                            ? "bg-[#90BE6D] text-white"
                                            : "bg-gray-200 text-gray-700"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <button className="mt-2 px-6 py-3 w-full bg-[#3CCDF8] font-poppins text-sm text-white rounded-lg">
                                Next
                            </button>
                        </div>
                    </div>

                    
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold font-poppins text-lg mb-4">Devotion Series</h3>

                        
                        <div className="mb-4 border py-4 px-5 rounded-md">
                            <p className="font-semibold border font-poppins text-sm py-2 px-2 bg-[#F5F5F5] rounded-md">Day 1 - Trusting in Unseen Paths</p>
                            <p className="text-sm pt-2 pb-1">
                                <span className="font-semibold font-poppins ">Scripture:</span> Proverbs 3:5–6
                            </p>
                            <p className="font-poppins font-semibold text-sm"> Devotion: </p>
                            <p className="text-sm py-1 font-poppins text-gray-600">
                                There are moments when life feels uncertain and fear creeps in. But
                                God calls us to trust Him, even when we don’t understand the way
                            </p>
                        </div>

                
                        <div className="mb-4 border py-4 px-5 rounded-md">
                            <p className="font-semibold border font-poppins text-sm py-2 px-2 bg-[#F5F5F5] rounded-md">Day 2 - Don’t Relent</p>
                            <p className="text-sm pt-2 pb-1">
                                <span className="font-semibold font-poppins ">Scripture:</span> Proverbs 3:5–6
                            </p>
                            <p className="font-poppins font-semibold text-sm"> Devotion: </p>
                            <p className="text-sm py-1 font-poppins text-gray-600">
                                There are moments when life feels uncertain and fear creeps in. But
                                God calls us to trust Him, even when we don’t understand the way
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
