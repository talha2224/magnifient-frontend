import React, { useState } from "react";
import { IoTimeSharp, IoEye } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import BottomFirstImg from '../../../assets/first.png';
import BottomSecondImg from '../../../assets/second.png';
import BottomThirdImg from '../../../assets/third.png';
import { Link } from "react-router-dom";

const RecentlyPlayedSermon = ({ onBack }) => {

    const sermons = [
        { title: "Judgement Day", img: BottomFirstImg, time: "1h 23min", views: "2k" },
        { title: "Merciful God", img: BottomSecondImg, time: "45min", views: "1k" },
        { title: "Watch and Pray", img: BottomThirdImg, time: "2h 10min", views: "3k" },
        { title: "Faith Over Fear", img: BottomFirstImg, time: "1h 15min", views: "1.2k" },
        { title: "The Power of Prayer", img: BottomSecondImg, time: "55min", views: "2.5k" },
        { title: "Living in Grace", img: BottomThirdImg, time: "1h 40min", views: "3.1k" },
        { title: "Hope in Hard Times", img: BottomFirstImg, time: "50min", views: "900" },
        { title: "Walking with God", img: BottomSecondImg, time: "2h 05min", views: "1.8k" },
    ];

    return (
        <div className="space-y-6">
            {/* Back Button */}
            <div className="mb-2">
                <Link to='/mainhome'>
                    <button
                        onClick={onBack}
                        className="flex bg-white rounded border border-[#E5E4E4] items-center gap-1 py-2 px-3 text-black font-poppins text-xs"
                    >
                        <IoIosArrowBack size={14} />
                        Back
                    </button>
                </Link>
            </div>

            {/* Heading */}
            <h3 className="font-semibold font-poppins text-black text-2xl">
                Recently played Sermon
            </h3>

            {/* Sermons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sermons.map((sermon, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow">
                        <Link to='/play'>
                            <div className="p-3">
                                <img
                                    src={sermon.img}
                                    alt={sermon.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                        </Link>
                        <div className="px-4 pb-4">
                            <h4 className="font-medium font-poppins">{sermon.title}</h4>
                            <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                                {/* Time */}
                                <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-[2px]">
                                    <IoTimeSharp size={12} className="text-black" />
                                    <span className="text-[10px] font-medium text-black font-poppins">
                                        {sermon.time}
                                    </span>
                                </div>

                                {/* Views */}
                                <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-[2px]">
                                    <IoEye size={12} className="text-black" />
                                    <span className="text-[10px] font-medium text-black">{sermon.views}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyPlayedSermon;
