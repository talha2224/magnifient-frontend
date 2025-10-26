import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { RiShareForwardLine } from "react-icons/ri";
import { BsSendFill } from "react-icons/bs";
import GroupsImg from "../../../assets/media3.png";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

// Dummy Members Data
const members = [
    { id: 1, name: "Annie Lopez", avatar: null, active: true },
    { id: 2, name: "James Marc", avatar: "https://randomuser.me/api/portraits/men/45.jpg", active: true },
    { id: 3, name: "Nick", avatar: "https://randomuser.me/api/portraits/men/30.jpg", active: true },
    { id: 4, name: "Periya", avatar: null, active: false },
    { id: 5, name: "Mark", avatar: "https://randomuser.me/api/portraits/men/33.jpg", active: true },
    { id: 6, name: "MARX", avatar: null, active: false },
    { id: 7, name: "Perla", avatar: null, active: true },
    { id: 8, name: "Pamela", avatar: "https://randomuser.me/api/portraits/women/25.jpg", active: true },
    { id: 9, name: "Annie Lopez", avatar: null, active: true },
];

const GroupDetail = () => {
    const [activeTab, setActiveTab] = useState("all");

    const posts = [
        {
            id: 1,
            type: "prayer",
            user: "Daniel Orleans",
            time: "40 Mins ago",
            avatar: null,
            text: "Please pray for my daughter’s health. She’s undergoing surgery tomorrow and I believe God will heal her. 🙏",
            views: "12k",
            likes: "5k",
            comments: "100",
            shares: "100",
        },
        {
            id: 2,
            type: "group",
            user: "Daniel Orleans",
            time: "40 Mins ago",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "Join our Friday night Bible study live at 7 PM — Let’s dive into the Book of Romans together.",
            views: "12k",
            likes: "5k",
            comments: "100",
            shares: "100",
        },
    ];

    const groups = [
        { id: 1, title: "Faith Builders", members: "12k Members", image: GroupsImg },
        { id: 2, title: "Prayer Warriors", members: "12k Members", image: GroupsImg },
    ];

    const suggested = [
        { id: 1, title: "Faith Builders", members: "12k Members", image: GroupsImg },
    ];

    const filteredPosts = posts.filter((post) => {
        if (activeTab === "all") return true;
        return post.type === activeTab;
    });

    return (
        <div className="w-full px-3 py-5">
            {/* Top Banner Section */}
            <div className="relative w-full h-48 md:h-60 lg:h-72 mb-6">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    alt="Group Banner"
                    className="w-full h-full object-cover rounded-md"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>

                {/* Back Button */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Link to='/suggestgroup'>
                        <button className="bg-white-100 border text-white font-poppins text-xs flex p-2 gap-1 rounded">
                            <IoChevronBackOutline className="text-white mt-0.5" /> Back
                        </button>
                    </Link>
                </div>

                {/* Title Center */}
                <h2 className="absolute font-poppins top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          text-white font-bold text-xl md:text-2xl lg:text-3xl">
                    Faith Builders
                </h2>

                {/* 3 Dots Menu Right */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded hover:bg-gray-100">
                    <HiDotsVertical className="text-gray-800 text-sm" />
                </button>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Left Side - Posts */}
                <div className="lg:col-span-6 border bg-white p-5 rounded-md space-y-4">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow border p-4 space-y-3">
                            {/* Post Header */}
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    {post.avatar ? (
                                        <img
                                            src={post.avatar}
                                            alt={post.user}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="md:w-14 md:h-14 h-10 w-10 rounded-full bg-gray-300"></div>
                                    )}
                                    <div>
                                        <p className="font-semibold font-poppins">{post.user}</p>
                                        <p className="text-xs text-gray-500 font-poppins">{post.time}</p>
                                    </div>
                                </div>
                                <HiDotsVertical className="text-black" />
                            </div>

                            {/* Post Text */}
                            <div className="bg-gray-100 px-5 py-4 md:pr-32 rounded-md">
                                <p className="text-sm text-gray-800 font-poppins">{post.text}</p>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                                <div className="flex items-center font-poppins cursor-pointer border rounded-md px-3 py-2 gap-1">
                                    <MdOutlineRemoveRedEye /> {post.views}
                                </div>
                                <div className="flex items-center border font-poppins rounded-md cursor-pointer px-3 py-2 gap-1">
                                    <FaRegThumbsUp /> {post.likes}
                                </div>
                                <div className="flex items-center border rounded-md font-poppins cursor-pointer px-3 py-2 gap-1">
                                    <TbMessage /> {post.comments}
                                </div>
                                <div className="flex items-center border rounded-md font-poppins cursor-pointer px-3 py-2 gap-1">
                                    <RiShareForwardLine /> {post.shares}
                                </div>
                            </div>

                            {/* Comment Box */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Add comments"
                                    className="flex-1 border bg-gray-100 rounded px-3 py-3 text-sm focus:outline-none"
                                />
                                <button className="bg-sky-400 text-white py-[15px] px-4 rounded">
                                    <BsSendFill />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

        
                <div className="lg:col-span-4 space-y-4">
                    {/* Your Groups */}
                    <div className="bg-white rounded-lg shadow border p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold font-poppins">Your groups</h3>
                            <button className="text-xs text-black font-poppins underline">See More</button>
                        </div>
                        <div className="space-y-4">
                            {groups.map((group) => (
                                <div key={group.id} className="bg-gray-50 rounded-md overflow-hidden shadow-sm">
                                    <img src={group.image} alt={group.title} className="w-full h-32 object-cover" />
                                    <div className="flex justify-between items-center p-3">
                                        <div>
                                            <p className="font-medium text-sm font-poppins">{group.title}</p>
                                            <p className="text-xs text-gray-500 font-poppins">{group.members}</p>
                                        </div>
                                        <button className="bg-sky-400 text-white text-sm px-6 py-2 rounded">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Suggested Groups */}
                    <div className="bg-white rounded-lg shadow border p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold font-poppins">Suggested groups</h3>
                            <Link to="/suggestgroup">
                                <button className="text-xs font-poppins text-black underline">See More</button>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {suggested.map((group) => (
                                <div key={group.id} className="bg-gray-50 rounded-md overflow-hidden shadow-sm">
                                    <img src={group.image} alt={group.title} className="w-full h-32 object-cover" />
                                    <div className="flex justify-between items-center p-3">
                                        <div>
                                            <p className="font-medium text-sm font-poppins">{group.title}</p>
                                            <p className="text-xs text-gray-500 font-poppins">{group.members}</p>
                                        </div>
                                        <button className="bg-sky-400 text-white text-sm px-6 py-2 rounded">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right - Active Members */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow border p-4">
                    <h3 className="font-semibold font-poppins text-sm mb-3">Active members</h3>
                    <div className="space-y-3 max-h-full overflow-y-auto">
                        {members.map((member) => (
                            <div key={member.id} className="flex items-center gap-3">
                                {member.avatar ? (
                                    <div className="relative">
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        {member.active && (
                                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                        )}
                                    </div>
                                ) : (
                                    <div className="relative w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                                        <span className="text-gray-600 text-sm font-bold">
                                            {member.name.charAt(0)}
                                        </span>
                                        {member.active && (
                                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                        )}
                                    </div>
                                )}
                                <p className="text-xs font-poppins">{member.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupDetail;
