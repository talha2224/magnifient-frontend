import React, { useState } from "react";
import { X } from "lucide-react";
import MessageImg from '../../../assets/message.png';
import MailImg from '../../../assets/mail.png';
import WhatsApppImg from '../../../assets/whatsapp.png';
import InstaImg from '../../../assets/insta.png';
import DiscordImg from '../../../assets/discord.png';
import TwitterImg from '../../../assets/twiter.png';
import FacebookImg from '../../../assets/facebook.png'
import FbOne from '../../../assets/fb1.png';
import FbTwo from '../../../assets/fb2.png';
import FbThird from '../../../assets/fb3.png'

const ShareDevotion = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);
    const link = "122435ffgHDJH3E54DFHFGHFHGFLLLLLLLJOYRD";

    if (!isOpen) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl mx-4 md:mx-0 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-sm md:text-md font-semibold font-poppins text-center flex-1">
                        Share devotion
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 bg-gray-300 rounded-full p-1 hover:text-black"
                    >
                        <X size={14} />
                    </button>
                </div>

                <div className="grid grid-cols-5 gap-6 text-center mb-6">
                    {/* iMessage */}
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src={MessageImg}
                            alt="iMessage"
                            className="md:w-14 md:h-14 h-10 w-10 object-contain"
                        />
                        <span className="md:text-xs text-[10px] font-semibold font-poppins">iMessage</span>
                    </div>

                    {/* Gmail */}
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src={MailImg}
                            alt="Gmail"
                            className="md:w-14 md:h-14 h-10 w-10 object-contain"
                        />
                        <span className="md:text-xs text-[10px] font-semibold font-poppins">Gmail</span>
                    </div>

                    
                    {[
                        { name: "Clara", img: FbOne },
                        { name: "Jane", img: FbTwo },
                        { name: "Maxwell", img: FbThird },
                    ].map((profile, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 relative">
                            <div className="relative">
                                <img
                                    src={profile.img}
                                    alt={profile.name}
                                    className="md:w-14 md:h-14 h-10 w-10 rounded-full object-contain"
                                />
                                {/* Facebook badge */}
                                <img
                                    src={FacebookImg}
                                    alt="fb"
                                    className="absolute bottom-0 right-0 w-4 h-4 rounded-full"
                                />
                            </div>
                            <span className="md:text-xs text-[10px] font-semibold font-poppins">{profile.name}</span>
                        </div>
                    ))}
                </div>


                <div className="grid grid-cols-5 gap-6 text-center">
                    {[
                        { name: "Whatsapp", icon: WhatsApppImg },
                        { name: "Instagram", icon: InstaImg },
                        { name: "Discord", icon: DiscordImg },
                        { name: "X", icon: TwitterImg },
                        { name: "Facebook", icon: FacebookImg },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="md:w-14 md:h-14 h-10 w-10 object-contain"
                            />
                            <span className="md:text-xs text-[10px] font-semibold font-poppins">{item.name}</span>
                        </div>
                    ))}
                </div>

                {/* Copy Link Section */}
                <div className="flex items-center gap-2 mt-8">
                    <input
                        type="text"
                        value={link}
                        readOnly
                        className="flex-1 rounded-lg px-3 py-3 focus:outline-none text-sm bg-gray-200 text-gray-600"
                    />
                    <button
                        onClick={handleCopy}
                        className="bg-red-600 text-white px-5 py-3 rounded-lg text-sm"
                    >
                        {copied ? "Copied!" : "Copy Link"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareDevotion;
