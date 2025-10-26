import React, { useState } from "react";
import { motion } from "framer-motion";
import OvrviewImg from "../../assets/overview.png";
import Learningimg from "../../assets/learning.png";
import BgImg from "../../assets/bg.png";
import commigImg from "../../assets/coming.png";
import "../../../src/App.css";

const Overview = () => {
    const tabs = [
        { name: "All", key: "all" },
        { name: "Life of Jesus", key: "jesus" },
        { name: "Christian Living", key: "living" },
        { name: "Prayer & Worship", key: "prayer" },
        { name: "Bible History", key: "history" },
        { name: "Leadership", key: "leadership" },
        { name: "Faith", key: "faith" },
        { name: "Discipleship", key: "discipleship" },
        { name: "Bible History", key: "history2" },
        { name: "Leadership", key: "leadership2" },
        { name: "Faith", key: "faith2" },
        { name: "Discipleship", key: "discipleship2" },
    ];

    const [activeTab, setActiveTab] = useState("all");

    // Content for each tab
    const tabContent = {
        all: {
            title: "Walking in Obedience to God",
            overview:
                "A quick glimpse into what you’ll discover in this course and how it can grow your walk with God.",
            objectives:
                "By the end of this course, you will develop a deeper understanding of God’s Word, strengthen your personal relationship with Him, and grow in your ability to interpret Scripture with clarity. You will learn how to apply biblical principles to everyday decisions, overcome spiritual challenges with faith, and share God’s truth with confidence. This course will equip you with practical tools for prayer, study, and ministry, helping you live a life that reflects Christ in every area.",
            video: "https://www.youtube.com/embed/ysz5S6PUM-U",
        },
        jesus: {
            title: "Life of Jesus",
            overview: "Explore the life, teachings, and miracles of Jesus Christ.",
            objectives:
                "By the end of this course, you will develop a deeper understanding of God’s Word, strengthen your personal relationship with Him, and grow in your ability to interpret Scripture with clarity. You will learn how to apply biblical principles to everyday decisions, overcome spiritual challenges with faith, and share God’s truth with confidence. This course will equip you with practical tools for prayer, study, and ministry, helping you live a life that reflects Christ in every area.",
            video: "https://www.youtube.com/embed/mPZkdNFkNps",
        },
        living: {
            title: "Christian Living",
            overview: "Learn how to live a Christ-centered life every day.",
            objectives:
                "By the end of this course, you will develop a deeper understanding of God’s Word, strengthen your personal relationship with Him, and grow in your ability to interpret Scripture with clarity. You will learn how to apply biblical principles to everyday decisions, overcome spiritual challenges with faith, and share God’s truth with confidence. This course will equip you with practical tools for prayer, study, and ministry, helping you live a life that reflects Christ in every area.",
            video: "https://www.youtube.com/embed/ScMzIvxBSi4",
        },
        prayer: {
            title: "Prayer & Worship",
            overview: "Discover the power of prayer and true worship.",
            objectives:
                "By the end of this course, you will develop a deeper understanding of God’s Word, strengthen your personal relationship with Him, and grow in your ability to interpret Scripture with clarity. You will learn how to apply biblical principles to everyday decisions, overcome spiritual challenges with faith, and share God’s truth with confidence. This course will equip you with practical tools for prayer, study, and ministry, helping you live a life that reflects Christ in every area.",
            video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
        },
        history: {
            title: "Bible History",
            overview: "Dive into the rich history of the Bible and its impact.",
            objectives:
                "By the end of this course, you will develop a deeper understanding of God’s Word, strengthen your personal relationship with Him, and grow in your ability to interpret Scripture with clarity. You will learn how to apply biblical principles to everyday decisions, overcome spiritual challenges with faith, and share God’s truth with confidence. This course will equip you with practical tools for prayer, study, and ministry, helping you live a life that reflects Christ in every area.",
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        leadership: {
            title: "Leadership",
            overview: "Discover how to lead with biblical wisdom and humility.",
            objectives:
                "By the end of this course, you will develop a deeper understanding of God’s Word, strengthen your personal relationship with Him, and grow in your ability to interpret Scripture with clarity. You will learn how to apply biblical principles to everyday decisions, overcome spiritual challenges with faith, and share God’s truth with confidence. This course will equip you with practical tools for prayer, study, and ministry, helping you live a life that reflects Christ in every area.",
            video: "https://www.youtube.com/embed/tgbNymZ7vqY",
        },
        faith: {
            title: "Faith",
            overview: "Strengthen your faith with biblical teachings.",
            objectives:
                "By the end of this course, you will develop a deeper understanding of God’s Word, strengthen your personal relationship with Him, and grow in your ability to interpret Scripture with clarity. You will learn how to apply biblical principles to everyday decisions, overcome spiritual challenges with faith, and share God’s truth with confidence. This course will equip you with practical tools for prayer, study, and ministry, helping you live a life that reflects Christ in every area.",
            video: "https://www.youtube.com/embed/kXYiU_JCYtU",
        },
        discipleship: {
            title: "Discipleship",
            overview: "Understand what it means to follow Christ as a disciple.",
            objectives:
                "By the end of this course, you will develop a deeper understanding of God’s Word, strengthen your personal relationship with Him, and grow in your ability to interpret Scripture with clarity. You will learn how to apply biblical principles to everyday decisions, overcome spiritual challenges with faith, and share God’s truth with confidence. This course will equip you with practical tools for prayer, study, and ministry, helping you live a life that reflects Christ in every area.",
            video: "https://www.youtube.com/embed/2Vv-BfVoq4g",
        },
    };

    const current = tabContent[activeTab];

    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        viewport: { once: true },
    };

    return (
        <>
           
            <motion.div
                {...fadeInUp}
                className="flex md:px-28 px-4 mt-5 md:mt-16 md:mb-3 space-x-3 w-full overflow-x-auto scrollbar-hide"
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`md:px-10 md:py-3 px-10 py-3 rounded-lg text-center flex-shrink-0 transition ${
                            activeTab === tab.key
                                ? "bg-sky-400 text-white"
                                : "bg-[#EDEDED] text-black hover:bg-sky-200"
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </motion.div>

            <div className="w-full px-4 md:px-28 md:py-6 py-4 max-w-8xl mx-auto">
                
                <motion.div
                    {...fadeInUp}
                    className="relative w-full rounded-lg h-14 flex items-center justify-center cursor-pointer"
                    style={{
                        backgroundImage: `url(${BgImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-white font-bold text-lg md:text-xl text-center px-2">
                        {current.title}
                    </h2>
                </motion.div>

                {/* Overview Section */}
                <motion.div {...fadeInUp} className="mt-6">
                    <div className="flex items-start space-x-3">
                        <div>
                            <img
                                src={OvrviewImg}
                                className="w-14 h-10 md:w-12 md:h-12 object-contain"
                                alt="Overview"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold md:text-lg font-poppins text-sm">Overview</h3>
                            <p className="text-gray-600 text-xs font-poppins md:text-base">
                                {current.overview}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Divider Line */}
                <hr className="md:my-6 my-4 border-gray-300" />

                {/* Learning Objectives Section */}
                <motion.div {...fadeInUp} className="md:mt-6">
                    <div className="flex items-start space-x-2">
                        <div>
                            <img
                                src={Learningimg}
                                className="w-72 h-10 md:w-32 md:h-12 object-contain"
                                alt="Learning"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold md:text-lg text-sm">Learning Objectives</h3>
                            <p className="text-gray-600 text-xs md:text-base">
                                {current.objectives}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Video Section */}
                <motion.div {...fadeInUp} className="mt-6">
                    <div className="relative w-full rounded-lg overflow-hidden shadow">
                        <iframe
                            className="w-full h-[220px] md:h-[360px] lg:h-[420px]"
                            src={current.video}
                            title="Course Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>

                {/* Bottom Button */}
                <motion.div {...fadeInUp} className="mt-6 flex justify-start">
                    <button className="bg-[#3CCDF8] w-1/2 text-white px-6 py-3 rounded-lg font-semibold shadow">
                        More
                    </button>
                </motion.div>
            </div>

            <div className="w-full px-4 md:px-28 md:py-6 py-4 max-w-8xl mx-auto">
                <motion.div
                    {...fadeInUp}
                    className="relative w-full rounded-lg h-14 flex items-center justify-center cursor-pointer"
                    style={{
                        backgroundImage: `url(${commigImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-white font-bold text-lg md:text-xl text-center px-2">
                        Overcoming Life’s Challenges
                    </h2>
                </motion.div>

                <motion.div {...fadeInUp} className="mt-6">
                    <div className="flex items-start space-x-3">
                        <div>
                            <img
                                src={OvrviewImg}
                                className="w-14 h-10 md:w-12 md:h-12 object-contain"
                                alt="Overview"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold md:text-lg font-poppins text-sm">Overview</h3>
                            <p className="text-gray-600 text-xs font-poppins md:text-base">
                                {current.overview}
                            </p>
                        </div>
                    </div>
                </motion.div>

                <hr className="md:my-6 my-4 border-gray-300" />

                <motion.div {...fadeInUp} className="md:mt-6">
                    <div className="flex items-start space-x-2">
                        <div>
                            <img
                                src={Learningimg}
                                className="w-72 h-10 md:w-32 md:h-12 object-contain"
                                alt="Learning"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold md:text-lg text-sm">Learning Objectives</h3>
                            <p className="text-gray-600 text-xs md:text-base">
                                {current.objectives}
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div {...fadeInUp} className="mt-6">
                    <div className="relative w-full rounded-lg overflow-hidden shadow">
                        <iframe
                            className="w-full h-[220px] md:h-[360px] lg:h-[420px]"
                            src={current.video}
                            title="Course Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>

                <motion.div {...fadeInUp} className="mt-6 flex justify-start">
                    <button className="bg-[#3CCDF8] w-1/2 text-white px-6 py-3 rounded-lg font-semibold shadow">
                        More
                    </button>
                </motion.div>
            </div>
        </>
    );
};

export default Overview;
