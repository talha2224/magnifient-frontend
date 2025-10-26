import React from "react";
import { motion } from "framer-motion";

import Tools1 from "../../assets/tool1.jpg";
import Tools2 from "../../assets/tool2.png";
import ToolLeft from "../../assets/toolleft.png";
import ToolCenter from "../../assets/toolcenter.png";
import ToolRight from "../../assets/toolright.png";
import ToolTop from "../../assets/tooltop.png";
import ToolMed from "../../assets/toolmed.png";
import BottomLeft from "../../assets/bottomleft.png";
import BottomRight from "../../assets/bottomright.png";


const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const Tools = () => {
    return (
        <div className="bg-[#E0F3F9] py-12 px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <motion.h2
                    className="text-2xl font-poppins md:text-5xl font-semibold text-gray-800 text-center mb-8 md:mb-10 md:mt-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    Tools to deepen your faith <br className="hidden sm:block" />
                    and connect with God daily.
                </motion.h2>

                {/* First Row */}
                <motion.div
                    className="grid md:grid-cols-5 gap-6 md:mb-5 md:gap-6 sectionHeight h-96"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                >
                
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 flex flex-col items-center justify-center border-[3px] bg-[#E8F5F8] border border-white rounded-2xl h-full"
                    >
                        <div className="md:mb-6 py-5 flex justify-center">
                            <img
                                src={Tools2}
                                alt="Daily Devotionals"
                                className="md:w-96 w-64 object-contain"
                            />
                        </div>
                        <h3 className="text-xl md:text-3xl font-semibold text-gray-800 md:mb-4 mb-2 text-center">
                            Daily Devotionals
                        </h3>
                        <p className="text-gray-600 text-center mb-3 text-sm md:text-lg md:px-10">
                            Start each day with fresh, faith-building devotionals curated just
                            for you.
                        </p>
                    </motion.div>

                    
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-3 border border-[3px] border-white rounded-2xl overflow-hidden h-full"
                    >
                        <img
                            src={Tools1}
                            alt="Child and elder praying"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Second Row */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
            >
                
                <motion.div
                    variants={itemVariants}
                    className="relative bg-[#E8F5F8] rounded-2xl md:mt-0 mt-5 p-6 overflow-hidden md:h-96 h-72 border border-[3px] border-white"
                >
                    <img src={ToolLeft} className="absolute bottom-0 left-0 w-[115px] md:h-[230px]" />
                    <img src={ToolCenter} className="absolute bottom-0 md:right-12 right-5 w-[320px] md:h-[180px]" />
                    <img src={ToolRight} className="absolute bottom-0 right-0 w-[100px] md:h-[230px]" />

                    <div className="relative z-10 flex justify-center">
                        <img src={ToolTop} alt="Main" className="md:w-[270px] w-48 object-contain" />
                    </div>

                    <div className="mt-4 text-center relative z-10">
                        <h3 className="md:text-2xl text-[20px] mt-6 mb-1 font-poppins font-semibold">
                            Faith Community
                        </h3>
                        <p className="text-[#212121B2] leading-tight md:text-lg md:px-0 px-10 text-md mt-1">
                            Join fellow believers in prayer, discussion, and spiritual support.
                        </p>
                    </div>
                </motion.div>

            
                <motion.div
                    variants={itemVariants}
                    className="relative bg-[#E8F5F8] rounded-2xl p-6 overflow-hidden md:h-96 h-72 border border-[3px] border-white"
                >
                    <img src={ToolLeft} className="absolute bottom-0 left-0 w-[115px] md:h-[230px]" />
                    <img src={ToolCenter} className="absolute bottom-0 md:right-12 right-5 w-[320px] md:h-[180px]" />
                    <img src={ToolRight} className="absolute bottom-0 right-0 w-[100px] md:h-[230px]" />

                    <div className="relative z-10 flex justify-center">
                        <img src={ToolMed} alt="Main" className="md:w-[180px] w-[130px] object-contain" />
                    </div>

                    <div className="mt-4 text-center relative z-10">
                        <h3 className="md:text-2xl text-[20px] mt-[-4px] mb-1 font-poppins font-semibold">
                            Audio Bible & Sermons
                        </h3>
                        <p className="text-[#212121B2] leading-tight md:text-lg text-md md:px-10 px-0 mt-1">
                            Listen to the Word anytime with adjustable playback and on-demand sermons.
                        </p>
                    </div>
                </motion.div>

                
                <motion.div
                    variants={itemVariants}
                    className="relative bg-[#E8F5F8] rounded-2xl p-6 overflow-hidden md:h-96 h-72 border border-[3px] border-white"
                >
                    <img src={ToolLeft} className="absolute bottom-0 left-0 w-[115px] md:h-[230px]" />
                    <img src={ToolCenter} className="absolute bottom-0 md:right-12 right-5 w-[320px] md:h-[180px]" />
                    <img src={ToolRight} className="absolute bottom-0 right-0 w-[100px] md:h-[230px]" />

                    <div className="relative z-10 flex justify-center">
                        <img src={ToolTop} alt="Main" className="md:w-[270px] w-48 object-contain" />
                    </div>

                    <div className="mt-4 text-center relative z-10">
                        <h3 className="md:text-2xl text-[20px] mt-6 mb-1 font-poppins font-semibold">
                            Custom Bible Reading
                        </h3>
                        <p className="text-[#212121B2] leading-tight md:text-lg md:px-10 px-6 text-md mt-1">
                            Stay consistent with personalized reading plans tailored to your goals
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
            >
                
                <motion.div
                    variants={itemVariants}
                    className="relative bg-[#E8F5F8] rounded-2xl p-6 overflow-hidden md:h-96 h-72 border border-[3px] border-white"
                >
                    <img src={ToolLeft} className="absolute bottom-0 left-0 w-32 h-[230px]" />
                    <img src={ToolLeft} className="absolute top-0 left-0 w-32 h-[230px]" />
                    <img src={ToolCenter} className="absolute bottom-0 right-2 w-96 h-[180px]" />
                    <img src={ToolRight} className="absolute bottom-0 right-0 w-32 h-[230px]" />
                    <img src={ToolRight} className="absolute top-0 right-0 w-32 h-[230px]" />

                    <div className="relative z-10 flex justify-center">
                        <img src={BottomLeft} alt="Main" className="w-[440px] object-contain" />
                    </div>

                    <div className="mt-4 text-center relative z-10">
                        <h3 className="md:text-2xl text-md mt-[-4px] mb-1 font-poppins font-semibold">
                            Share Your Heart in Prayer
                        </h3>
                        <p className="text-[#212121B2] leading-tight md:text-lg md:px-32 mt-1">
                            Post your prayer requests in a caring community that lifts one another
                        </p>
                    </div>
                </motion.div>

            
                <motion.div
                    variants={itemVariants}
                    className="relative bg-[#E8F5F8] rounded-2xl p-6 overflow-hidden md:h-96 h-72 border border-[3px] border-white"
                >
                    <img src={ToolLeft} className="absolute bottom-0 left-0 w-32 h-[230px]" />
                    <img src={ToolLeft} className="absolute top-0 left-0 w-32 h-[230px]" />
                    <img src={ToolCenter} className="absolute bottom-0 right-2 w-96 h-[180px]" />
                    <img src={ToolRight} className="absolute bottom-0 right-0 w-32 h-[230px]" />
                    <img src={ToolRight} className="absolute top-0 right-0 w-32 h-[230px]" />

                    <div className="relative z-10 flex justify-center">
                        <img src={BottomRight} alt="Main" className="w-[540px] object-contain" />
                    </div>

                    <div className="mt-4 text-center relative z-10">
                        <h3 className="md:text-2xl text-md mt-[-5px] mb-1 font-poppins font-semibold">
                            Stay on Track with Your Bible
                        </h3>
                        <p className="text-[#212121B2] leading-tight md:text-lg md:px-28 mt-1">
                            Follow a structured plan that guides you through Scripture daily,
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Tools;
