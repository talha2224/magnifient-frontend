import React, { useState } from "react";
import Images from '../../assets/media2.png'

const Resources = () => {
    const [activeTab, setActiveTab] = useState("resources");
    const [subTab, setSubTab] = useState("all");
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            id: 1,
            question: "How can I access the offline Bible feature?",
            answer:
                "Once you’re logged in, go to the Bible section, choose your preferred translation, and tap 'Download for Offline Use.' You’ll then be able to read anytime without an internet connection.",
        },
        {
            id: 2,
            question: "Do I need an account to use the free features?",
            answer: "No, you can use free features without an account.",
        },
        {
            id: 3,
            question: "What payment methods are accepted for the Pro plan?",
            answer: "We accept credit cards, debit cards, and PayPal for Pro plans.",
        },
        {
            id: 4,
            question: "Can I submit a prayer request anonymously?",
            answer:
                "Yes, you can submit a prayer request anonymously without sharing your details.",
        },
        {
            id: 5,
            question: "How often is the Verse of the Day updated?",
            answer: "The Verse of the Day is updated daily.",
        },
        {
            id: 6,
            question: "Is the audio Bible available in multiple languages?",
            answer: "Yes, the audio Bible is available in multiple languages.",
        },
        {
            id: 7,
            question: "Can I join more than one community group?",
            answer: "Yes, you can join multiple community groups.",
        },
        {
            id: 8,
            question: "How do I participate in the trivia and challenges?",
            answer: "You can participate through the app events and activities tab.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Dummy Data
    const resources = [
        {
            id: 1,
            title: "Faith Builders",
            category: "study",
            image: Images,
        },
        {
            id: 2,
            title: "Armor of God",
            category: "study",
            image: Images,
        },
        {
            id: 3,
            title: "Prayer Warriors",
            category: "study",
            image: Images,
        },
        {
            id: 4,
            title: "Faith Builders",
            category: "study",
            image: Images,
        },
        {
            id: 5,
            title: "Armor of God",
            category: "study",
            image: Images,
        },
        {
            id: 6,
            title: "Prayer Warriors",
            category: "study",
            image: Images,
        },
    ];

    const tabs = [
        { key: "resources", label: "Resources library" },
        { key: "feedback", label: "Feedback" },
        { key: "faq", label: "FAQ" },
        { key: "contact", label: "Contact Us" },
    ];

    const subTabs = [
        { key: "all", label: "All" },
        { key: "sermon", label: "Sermon Notes" },
        { key: "videos", label: "Videos" },
        { key: "articles", label: "Articles" },
    ];

    return (
        <div className="">
            {/* Top Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-4 py-2 font-poppins rounded-md text-sm font-medium ${activeTab === tab.key
                            ? "bg-[#3CCDF8] text-white"
                            : "bg-white shadow-md text-gray-700"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Conditional Content */}
            <div className="border px-5 py-6 rounded-md bg-white">
                {activeTab === "resources" && (
                    <>
                        {/* Sub Tabs */}
                        <div className="flex gap-6 border-b mb-6">
                            {subTabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setSubTab(tab.key)}
                                    className={`pb-2 font-poppins text-sm font-medium ${subTab === tab.key
                                        ? "border-b-2 border-[#3CCDF8] text-[#3CCDF8]"
                                        : "text-gray-500"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Resource Cards */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {resources.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-2 rounded-lg border shadow-sm overflow-hidden"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full rounded-md h-40 object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="font-semibold font-poppins text-gray-800">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-poppins">Study Guides</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {activeTab === "feedback" && (
                    <div className="text-center py-8 text-gray-600 max-w-xl mx-auto">
                        {/* Title */}
                        <h2 className="md:text-3xl text-lg font-bold font-poppins text-black">Your Voice Matters to Us</h2>

                        {/* Description */}
                        <p className="mt-2 font-poppins md:text-sm text-xs md:px-20 text-gray-500">
                            Share your thoughts, ideas, or suggestions to help us create a better experience for you and our community.
                        </p>

                        {/* Textarea */}
                        <div className="mt-6">
                            <textarea
                                rows="5"
                                placeholder="Write something...."
                                className="w-full px-4 py-3 border font-poppins text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CCDF8]"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button className="mt-4 font-poppins md:px-32 px-20 md:text-sm text-xs py-3 bg-[#3CCDF8] text-white rounded-lg transition">
                            Submit Feedback
                        </button>
                    </div>

                )}

                {activeTab === "faq" && (
                    <div className="">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <div className="text-center md:text-left">
                                <h2 className="md:text-2xl text-lg font-poppins font-bold text-gray-900">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-gray-600 font-poppins md:text-sm text-xs mt-2">
                                    Got questions? We’ve got answers! Check out our FAQ section to find
                                    answers to the most common questions about IMMERSIVE.
                                </p>
                            </div>
                            <button className="mt-4 md:mt-0 px-4 py-2 bg-[#3CCDF8] text-white text-sm font-poppins rounded-md shadow">
                                Send feedback
                            </button>
                        </div>

                        {/* FAQ Grid */}
                        <div className="grid md:grid-cols-2 md:px-10 gap-5">
                            {faqs.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className="border-b border-gray-100 pb-4 cursor-pointer"
                                >
                                    <div
                                        className="flex items-start justify-between"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="bg-gray-200 text-gray-700 px-3 py-2 font-poppins rounded-md text-sm font-semibold">
                                                {String(faq.id).padStart(2, "0")}
                                            </span>
                                            <h3 className="font-medium text-black font-poppins text-sm md:text-base">
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <span className="text-md font-bold text-black">
                                            {openIndex === index ? "—" : "+"}
                                        </span>
                                    </div>

                                    {openIndex === index && (
                                        <p className="mt-2 ml-12 text-gray-600 font-poppins text-sm">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "contact" && (
                    <div className="text-center py-10 text-gray-600">
                        <h2 className="text-xl font-semibold">Contact Us Section</h2>
                        <p className="mt-2">Your contact information will be displayed here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Resources;
