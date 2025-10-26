import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import OneImg from "../../assets/menu/one.png";
import TwoImg from "../../assets/menu/two.png";
import ThreeImg from "../../assets/menu/three.png";
import FourImg from "../../assets/menu/four.png";
import FiveImg from "../../assets/menu/five.png";

const HomeNotification = () => {
    const notifications = [
        {
            image: OneImg,
            title: "Verse of the Day",
            desc: `"Your Verse of the Day is ready: “The Lord is my shepherd; I shall not want.” (Psalm 23:1)"`,
        },
        {
            image: TwoImg,
            title: "New Prayer Request",
            desc: "Mary A. has posted a new prayer request in 'Prayer Warriors.'",
        },
        {
            image: ThreeImg,
            title: "Live Event Started",
            desc: "Live now: Sunday Service with Pastor James. Join here.",
        },
        {
            image: FourImg,
            title: "Reading Plan Reminder",
            desc: "3 days left to complete your 'Book of John’ reading plan",
        },
        {
            image: FiveImg,
            title: "New Devotional Available",
            desc: "Check out today’s devotional: ‘Walking in God’s Peace.’",
        },
        {
            image: FiveImg,
            title: "New Devotional Available",
            desc: "Check out today’s devotional: ‘Walking in God’s Peace.’",
        },
    ];

    return (
        <div className="w-full bg-gray-50 min-h-screen p-4">
            {/* Header */}
            <div className="flex items-center mb-4">
                <div className="flex border cursor-pointer gap-1 px-2 py-2 rounded-md">
                    <IoChevronBackOutline size={14} className="mt-[1px]" />
                    <h3 className="text-xs font-poppins">Back</h3>
                </div>
            </div>

            {/* Notifications List */}
            <div className="bg-white rounded-lg md:py-5 md:px-6 py-5">
                <h2 className="text-lg font-poppins sm:text-xl px-8 font-semibold text-gray-800 mb-4">
                    This month
                </h2>
                {notifications.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-10 h-10 object-contain flex-shrink-0"
                        />
                        <div>
                            <h3 className="text-sm sm:text-base font-poppins font-medium text-gray-800">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-poppins text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeNotification;
