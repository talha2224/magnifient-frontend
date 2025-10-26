import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import GoodTick from '../assets/tick.png'
import { Link } from "react-router-dom";
import { updateProfile } from "../api/auth";

const steps = [
    "Your purpose",
    "Daily Rhythm",
    "Bible Version",
    "Interests",
    "Reminder",
    "Final",
];

const stepContent = {
    0: {
        title: "What's Your Spiritual Goal?",
        description: "Let us know what you're hoping to grow in — we’ll tailor your experience accordingly.",
    },
    1: {
        title: "How Much Time Can You Commit Daily?",
        description: "We'll recommend content based on the time you can realistically commit each day.",
    },
    2: {
        title: "What’s Your Preferred Bible Translation?",
        description: "We’ll use this as your default translation across devotionals and readings.",
    },
    3: {
        title: "What Topics Interest You Most?",
        description: "Select themes that matter most to you so we can personalize your recommendations.",
    },
    4: {
        title: "Would You Like to Receive Daily Reminders?",
        description: "Select themes that matter most to you so we can personalize your recommendations.",
    },
    5: {
        title: "How Do You Learn Best?",
        description: "Choose the format that helps you connect deeply and consistently.",
    },
};

const Onboarding = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selections, setSelections] = useState({});

    const stepOptions = {
        0: [
            "Daily Devotion",
            "Bible Study",
            "Prayer Life",
            "Fasting Discipline",
            "Encouragement & Hope",
        ],
        1: ["5 Minutes", "10–15 Minutes", "20–30 Minutes", "Flexible Time"],
        2: [
            "NIV (New International Version)",
            "KJV (King James Version)",
            "ESV (English Standard Version)",
            "NLT (New Living Translation)"
        ],
        3: [
            "Faith",
            "Healing",
            "Love",
            "Forgiveness",
            "Purpose",
            "Anxiety/Peace",
            "Leadership"
        ],
        4: ["Yes, send me notification", "Not now"],
        5: [
            "Reading",
            "Listening (Audio)",
            "Watching (Video)",
            "Interactive (Quizzes/Challenges)"
        ],
    };

    const handleOptionSelect = (step, option) => {
        setSelections((prev) => ({ ...prev, [step]: option }));
    };

    const handleContinue = async () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            try {
                const payload = {
                    spiritual_goal: selections[0],
                    daily_commit_time: selections[1],
                    preferred_bible_translation: selections[2],
                    topics_interest: selections[3],
                    daily_reminders: selections[4] === "Yes, send me notification",
                    learn_way: selections[5],
                };

                let result = await updateProfile(payload);
                if (result) {
                    setSelections({})
                    setShowSuccess(true);
                    onClose();
                }
            } catch (error) {
                console.error("Error updating profile:", error);
            }
        }
    };


    if (!isOpen && !showSuccess) return null;

    // progress line width calculation
    const progressWidth = (currentStep / (steps.length - 1)) * 84 + 84 / (steps.length - 1) / 2;

    return (
        <>
            {/* Onboarding Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="relative w-full mx-3 max-w-4xl bg-white rounded-lg shadow-lg">
                        {/* Steps Progress */}
                        <div className="relative bg-[#F3F3F3] rounded-tl-lg rounded-tr-lg md:py-6 py-3 px-5 mb-5 w-full">
                            {/* Full gray line */}
                            <div className="hidden md:block absolute top-1/2 left-[8%] right-[8%] h-0.5 bg-gray-300 -translate-y-1/2 z-0"></div>

                            {/* Black line (progress) */}
                            <div
                                className="hidden md:block absolute top-1/2 left-[8%] h-1 bg-black -translate-y-1/2 z-0 transition-all duration-500"
                                style={{
                                    width: `${Math.min(progressWidth, 84)}%`,
                                }}
                            ></div>

                            {/* Steps */}
                            <div className="grid grid-cols-3 gap-3 md:flex md:justify-between md:items-center relative z-10">
                                {steps.map((step, index) => {
                                    const isActive = currentStep === index;
                                    const isCompleted =
                                        index < currentStep || currentStep === steps.length - 1;

                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center"
                                        >
                                            <div
                                                className={`px-3 md:py-2 py-1 rounded-full flex gap-1 items-center border-2 text-[9px] md:text-xs font-medium
                                                    ${isCompleted
                                                        ? "border-black bg-white text-black"
                                                        : isActive
                                                            ? "border-black bg-white text-black"
                                                            : "border-gray-300 bg-white text-gray-400"
                                                    }`}
                                            >
                                                <FaCircleCheck
                                                    size={12}
                                                    className={`${isCompleted || isActive
                                                        ? "text-black mt-0.5"
                                                        : "text-gray-300 mt-0.5"
                                                        }`}
                                                />
                                                {step}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Back Button */}
                        <button
                            onClick={() =>
                                currentStep === 0
                                    ? onClose()
                                    : setCurrentStep(currentStep - 1)
                            }
                            className="text-sm text-black mb-4 font-poppins flex items-center gap-2 px-6"
                        >
                            <FaArrowLeft size={12} className="mt-0.3" /> Back
                        </button>

                        {/* Title, Description, Divider */}
                        <div className="px-6 mb-6">
                            <h2 className="md:text-xl text-sm font-poppins text-black font-semibold mb-2">
                                {stepContent[currentStep].title}
                            </h2>
                            <p className="text-gray-500 font-poppins md:text-sm text-xs mb-4">
                                {stepContent[currentStep].description}
                            </p>
                            <hr className="border-t border-gray-300 mb-6" />
                        </div>

                        {/* Step Content */}
                        <div className="mb-5 pl-6 md:pr-72">
                            <div className="flex flex-wrap gap-3">
                                {stepOptions[currentStep].map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() =>
                                            handleOptionSelect(currentStep, opt)
                                        }
                                        className={`flex items-center gap-2 px-4 py-3 font-poppins rounded-md border md:text-sm text-xs font-medium
                                            ${selections[currentStep] === opt
                                                ? "border-gray-300 bg-white text-black"
                                                : "border-gray-300 text-black"
                                            }`}
                                    >
                                        {/* Radio style circle */}
                                        <span
                                            className={`w-4 h-4 flex items-center justify-center rounded-full border 
                                                    ${selections[currentStep] === opt
                                                    ? "border-[#3CCDF8] bg-[#3CCDF8]"
                                                    : "border-gray-300 bg-white"
                                                }`}
                                        ></span>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Continue / Finish */}
                        <div className="px-6 mb-8 flex justify-start">
                            <button
                                onClick={handleContinue}
                                className="bg-[#3CCDF8] text-white font-semibold text-sm py-3 px-20 font-poppins rounded-md shadow-md"
                            >
                                {currentStep === steps.length - 1 ? "Complete" : "Continue"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="relative bg-white w-full max-w-[90%] sm:max-w-lg md:max-w-xl rounded-lg shadow-lg px-6 py-8 sm:px-16 sm:py-12 md:px-28 md:py-16">

                        {/* Centered Image */}
                        <img
                            src={GoodTick}
                            className="md:h-20 md:w-20 h-10 w-10 object-contain mx-auto mb-4"
                            alt="Success"
                        />

                        {/* Heading */}
                        <h2 className="text-center text-sm md:text-lg text-black font-poppins font-semibold mb-2">
                            You're All Set to Grow Spiritually!
                        </h2>

                        <p className="text-gray-400 px-8 text-center text-xs mb-6">
                            We've personalized your journey—dive into your first devotional.
                        </p>

                        {/* Continue Button */}
                        <button
                            className="w-full bg-[#3CCDF8] font-poppins text-xs sm:text-sm text-white font-semibold py-3 rounded-md mb-3"
                        >
                            <Link to='/mainhome'>
                                Go to Dashboard
                            </Link>
                        </button>

                        {/* Close */}
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Onboarding;
