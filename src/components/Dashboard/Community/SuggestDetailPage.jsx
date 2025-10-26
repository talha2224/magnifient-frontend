import React from "react";
import { useNavigate } from "react-router-dom";
import SuggestImg from "../../../assets/media2.png";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const groups = [
    {
        id: 1,
        title: "Faith Builders",
        members: "12k Member",
        image: SuggestImg,
    },
    {
        id: 2,
        title: "Prayer Warriors",
        members: "12k Member",
        image: SuggestImg,
    },
    {
        id: 3,
        title: "Prayer Warriors",
        members: "12k Member",
        image: SuggestImg,
    },
    {
        id: 4,
        title: "Prayer Warriors",
        members: "12k Member",
        image: SuggestImg,
    },
    {
        id: 5,
        title: "Faith Builders",
        members: "12k Member",
        image: SuggestImg,
    },
    {
        id: 6,
        title: "Prayer Warriors",
        members: "12k Member",
        image: SuggestImg,
    },
    {
        id: 7,
        title: "Prayer Warriors",
        members: "12k Member",
        image: SuggestImg,
    },
    {
        id: 8,
        title: "Prayer Warriors",
        members: "12k Member",
        image: SuggestImg,
    },
];

const SuggestGroupDetailPage = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <button
                    onClick={() => navigate(-1)} 
                    className="px-2 font-poppins flex py-2 border gap-1 rounded-md text-xs hover:bg-gray-100"
                >
                    <IoChevronBackOutline size={12} className="mt-0.5" /> Back
                </button>
                <h2 className="text-lg font-poppins md:text-xl font-semibold">
                    Suggested groups
                </h2>
            </div>

            {/* Groups Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {groups.map((group) => (
                    <div
                        key={group.id}
                        className="rounded-lg border p-2 overflow-hidden flex flex-col"
                    >
                        {/* Image */}
                        <Link to='/groupdetail'>
                            <img
                                src={group.image}
                                alt={group.title}
                                className="w-full h-32 md:h-40 rounded-md object-cover"
                            />
                        </Link>

                        {/* Content */}
                        <div className="flex items-center justify-between py-3 px-1">
                            <div>
                                <p className="font-medium font-poppins text-sm">
                                    {group.title}
                                </p>
                                <p className="text-xs text-gray-400 font-poppins">
                                    {group.members}
                                </p>
                            </div>
                            <button className="bg-[#3CCDF8] text-white text-xs px-5 font-poppins py-2 rounded">
                                Join
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuggestGroupDetailPage;
