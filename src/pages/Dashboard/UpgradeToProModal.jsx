import React from "react";
import { IoClose } from "react-icons/io5";

const UpgradeToProModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        // FULL SCREEN FIXED MODAL
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-4xl mx-4 rounded-2xl shadow-lg relative overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 text-gray-600 hover:text-black"
                >
                    <IoClose size={24} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    {/* Left Side (Free Plan) */}
                    <div className="border rounded-xl p-6 flex flex-col">
                        <h2 className="text-2xl font-bold text-black leading-snug">
                            Start Your Journey <br /> In The Word For{" "}
                            <span className="text-green-600">Free</span>
                        </h2>
                        <p className="text-gray-500 text-sm mt-2">
                            Upgrade to a pro and do even more with MagLife
                        </p>

                        <div className="mt-4">
                            <button className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-1 rounded-lg">
                                Your plan
                            </button>
                        </div>

                        <h3 className="text-3xl font-bold mt-4">$0</h3>
                        <p className="text-sm text-gray-500">/month</p>

                        <ul className="mt-6 space-y-3 text-sm text-gray-700">
                            <li>✅ Access to daily devotionals</li>
                            <li>✅ Verse of the Day notifications</li>
                            <li>✅ 1 live sermon replay per week</li>
                            <li>⭕ Unlimited quizzes & challenges</li>
                            <li>⭕ Offline Bible & devotional downloads</li>
                            <li>⭕ Priority prayer request listing</li>
                            <li>⭕ Personalized Bible study recommendations</li>
                            <li>⭕ Multi-device sync</li>
                        </ul>
                    </div>

                    {/* Right Side (FaithPlus Plan) */}
                    <div className="border rounded-xl p-6 flex flex-col">
                        {/* Monthly / Yearly Toggle */}
                        <div className="flex items-center gap-2 self-end">
                            <button className="px-3 py-1 rounded-lg bg-gray-100 text-sm font-medium">
                                Monthly
                            </button>
                            <button className="px-3 py-1 rounded-lg border text-sm font-medium text-gray-600">
                                Yearly <span className="text-green-600">-20%</span>
                            </button>
                        </div>

                        <h2 className="text-xl font-bold mt-4">FaithPlus</h2>
                        <h3 className="text-3xl font-bold mt-2">$12</h3>
                        <p className="text-sm text-gray-500">/ member monthly</p>

                        <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-sky-600">
                            Upgrade to professional
                        </button>

                        <ul className="mt-6 space-y-3 text-sm text-gray-700">
                            <li>Priority prayer request listing & community support</li>
                            <li>Unlimited access to all premium devotionals & video teachings</li>
                            <li>Monthly faith growth insights & analytics dashboard</li>
                            <li>Personalized Bible study recommendations</li>
                            <li>Early access to live event replays</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradeToProModal;
