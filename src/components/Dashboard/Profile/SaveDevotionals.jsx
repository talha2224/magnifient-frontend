import React from "react";
import { IoIosShareAlt } from "react-icons/io";
import Img from '../../../assets/media2.png'

const devotionals = [
    {
        id: 1,
        title: "Faith Builders",
        category: "Study Guides",
        image: Img,
        progress: 70,
    },
    {
        id: 2,
        title: "Faith Builders",
        category: "Study Guides",
        image: Img,
        progress: 50,
    },
    {
        id: 3,
        title: "Faith Builders",
        category: "Study Guides",
        image: Img,
        progress: 90,
    },
];

function SaveDevotionals() {
    return (
        <div className="">
            <div className="py-5 px-4 border-b">
                <h2 className="text-lg font-poppins font-semibold">Saved Devotionals</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 px-4 pt-5 lg:grid-cols-3">
                {devotionals.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 p-2 rounded-lg object-cover"
                            />
                        
                            <div className="absolute top-4 left-4 bg-gray-300 rounded-full p-1 shadow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 2C4.9 2 4 2.9 4 4V22L12 18L20 22V4C20 2.9 19.1 2 18 2H6Z" />
                                </svg>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-3 pb-4 pt-2">
                            {/* Title + Progress Line */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-md font-semibold font-poppins">{item.title}</h3>
                                <div className="w-16 bg-gray-200 rounded-full h-2 ml-2">
                                    <div
                                        className="bg-[#90BE6D] h-2 rounded-full"
                                        style={{ width: `${item.progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Category + Icon */}
                            <div className="flex items-center justify-between mt-1">
                                <p className="text-gray-500 font-poppins text-xs">{item.category}</p>
                                <button className="bg-gray-200 p-1 rounded-full">
                                    <IoIosShareAlt className="text-black text-xs" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SaveDevotionals;
