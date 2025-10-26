import React, { useState } from "react";
import verseBg1 from "../../../assets/leftone.png";
import bibleBg1 from "../../../assets/rightone.png";
import bibleBg2 from "../../../assets/righttwo.png";
import HomeLeftImg from "../../../assets/homeleft.png";
import HomeRightImg from "../../../assets/homeright.png";
import BottomFirstImg from '../../../assets/first.png';
import BottomSecondImg from '../../../assets/second.png';
import BottomThirdImg from '../../../assets/third.png'
import { IoTimeSharp } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import DailyDevotionHomeModal from "./DailyDevotionHomeModal";
import ShareDevotion from "./ShareDevotion";
import { Link } from "react-router-dom";


const HomeDashboard = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShareOpen, setShareOpen] = useState(false);

    return (
        <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Memory Verse */}
                <div
                    className="p-4 rounded-lg flex items-center gap-3"
                    style={{
                        backgroundImage: `linear-gradient(to right, #D8F0C6, #C8EDAD), url(${verseBg1})`,
                        backgroundRepeat: "no-repeat, no-repeat",
                        backgroundPosition: "center, bottom right",
                        backgroundSize: "cover, 120px",
                    }}
                >
                    <img
                        src={HomeLeftImg}
                        alt="Memory Verse"
                        className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                        <h3 className="font-semibold font-poppins md:text-lg text-md text-black">
                            Memory Verse of the Day
                        </h3>
                        <p className="md:text-sm text-xs mt-2 md:pr-10 font-poppins text-[#255005]">
                            "Trust in the Lord with all your heart and lean not on your
                            own understanding; in all your ways submit to Him, and He will
                            make your paths straight."
                        </p>
                        <p className="text-xs font-semibold font-poppins mt-2 text-[#255005]">— Proverbs 3:5–6 (NIV)</p>
                    </div>
                </div>

                {/* Bible Reading */}
                <div
                    className="p-4 rounded-lg flex items-center gap-3"
                    style={{
                        backgroundImage: `linear-gradient(to right, #9DDDFE, #9DDDFE, #9DDDFE), url(${bibleBg1}), url(${bibleBg2})`,
                        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                        backgroundPosition: "center, bottom left, top right",
                        backgroundSize: "cover, 120px, 120px",
                    }}
                >
                    <img
                        src={HomeRightImg}
                        alt="Bible Reading"
                        className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                        <h3 className="font-semibold font-poppins md:text-lg text-md text-black">Bible Reading</h3>
                        <p className="md:text-sm text-xs md:pr-10 font-poppins text-[#05577E] mt-2">
                            "Trust in the Lord with all your heart and lean not on your
                            own understanding; in all your ways submit to Him, and He will
                            make your paths straight."
                        </p>
                        <p className="text-xs font-semibold font-poppins text-[#05577E] mt-2">— Proverbs 3:5–6 (NIV)</p>
                    </div>
                </div>
            </div>

            {/* Daily Devotion & Challenge */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Daily Devotion */}
                <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow relative">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-md font-poppins">Daily Devotion</h3>
                        <button onClick={() => setIsModalOpen(true)} className="text-black font-poppins underline text-sm">See More</button>
                    </div>

                    {/* Modal */}
                    <DailyDevotionHomeModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onShare={() => setShareOpen(true)}
                    />

                    <ShareDevotion
                        isOpen={isShareOpen}
                        onClose={() => setShareOpen(false)}
                    />

                    {/* Horizontal Line */}
                    <hr className="border-t border-[#EBEBEB] my-4" />

                    <p className="md:text-lg text-sm font-medium font-poppins text-[#535252]">
                        Trusting Through the Unknown
                    </p>
                    <p className="md:text-md text-sm font-poppins text-[#575757] md:pr-20 mt-1">
                        Scripture: "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future."
                    </p>
                    <p className="md:text-md text-sm text-[#6C6C6C] font-poppins font-semibold mt-1">— Jeremiah 29:11</p>

                    <div className="bg-[#F6F6F6] p-3 mt-3 rounded">
                        <h4 className="font-semibold font-poppins text-black">Reflection</h4>
                        <p className="md:text-lg text-sm text-[#727272] md:pr-10 mt-1">
                            Life often feels uncertain, and in moments of waiting or confusion, we tend to lean on our own limited understanding. But God calls us to trust His higher plan. Even when we can’t see what’s ahead.  He sees the full picture. His timing, though different from ours, is always perfect.
                        </p>
                    </div>
                </div>

                {/* Today's Challenge */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-md text-black font-poppins">
                        Today's Challenge
                    </h3>

                    {/* Horizontal Line */}
                    <hr className="border-t border-[#EBEBEB] my-4" />

                    <p className="text-md font-poppins text-black font-semibold">
                        What is the main purpose of prayer in most religious beliefs?
                    </p>

                    <div className="space-y-2 mt-2">
                        {[
                            { label: "A", text: "To test people's memory" },
                            { label: "B", text: "To communicate with a higher power" },
                            { label: "C", text: "To impress others" },
                            { label: "D", text: "To earn money" },
                        ].map((option, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedOption(option.label)}
                                className={`flex items-center gap-2 px-2 py-2 text-[#666666] border border-[#E4E4E4] rounded cursor-pointer text-sm transition-colors ${selectedOption === option.label
                                    ? "bg-gray-200 border-gray-200"
                                    : "bg-[#F8F8F8] hover:bg-gray-100"
                                    }`}
                            >
                                <span className="font-bold">{option.label}.</span>
                                <span>{option.text}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full font-poppins text-sm bg-[#3CCDF8] text-white py-3 mt-3 rounded-lg">
                        View more challenge
                    </button>
                </div>

            </div>


            {/* Recently Played Sermons */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold font-poppins text-black text-md">
                        Recently played Sermon
                    </h3>
                    <Link to='/recentplayed'>
                        <button className="text-black font-poppins underline text-sm">
                            See More
                        </button>
                    </Link>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { title: "Judgement Day", img: BottomFirstImg, time: "1h 23min", views: "2k" },
                        { title: "Merciful God", img: BottomSecondImg, time: "45min", views: "1k" },
                        { title: "Watch and Pray", img: BottomThirdImg, time: "2h 10min", views: "3k" },
                    ].map((sermon, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow"
                        >
                            <div className="p-3">
                                <img
                                    src={sermon.img}
                                    alt={sermon.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                            <div className="px-4 pb-4">
                                <h4 className="font-medium font-poppins">{sermon.title}</h4>
                                <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                                    {/* Left side: Time */}
                                    <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-[2px]">
                                        <IoTimeSharp size={12} className="text-black" />
                                        <span className="text-[10px] mt-0.4 font-medium text-black font-poppins">{sermon.time}</span>
                                    </div>

                                    {/* Right side: Views */}
                                    <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-[2px]">
                                        <IoEye size={12} className="text-black" />
                                        <span className="text-[10px] mt-0.3 font-medium text-black">{sermon.views}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeDashboard;
