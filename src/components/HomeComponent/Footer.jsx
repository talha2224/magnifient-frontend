import React from "react";
import {
    FaInstagram,
    FaTelegramPlane,
    FaTwitter,
    FaLinkedin,
    FaTiktok,
    FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import IphoneImg from "../../assets/iphone.png";
import explorImg from "../../assets/explor.png";
import FooterLogo from "../../assets/footerlogo.png";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.25 },
    },
};

const Footer = () => {
    return (
        <footer className="bg-[#E5F3F8] text-gray-700 md:pt-20 pt-16 relative">
            {/* Top Banner Section */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="relative bg-[#3BA2C6] text-white rounded-md max-w-[88%] mx-auto md:pt-16 pt-10 flex flex-col md:flex-row justify-between overflow-hidden"
            >
                {/* Left Text */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-2xl z-10 pl-6 md:pl-20 md:mt-12"
                >
                    <motion.h2 variants={fadeUp} className="text-2xl md:text-[43px] font-semibold font-poppins">
                        Download the App and
                    </motion.h2>
                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl md:text-[43px] md:mt-6 font-semibold font-poppins"
                    >
                        Take Your Faith Anywhere
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mt-5 text-md md:text-lg md:pr-52">
                        Access devotionals, Bible reading plans, sermons, and more
                    </motion.p>
                    <motion.button
                        variants={fadeUp}
                        className="mt-6 mb-10 bg-[#45BDE0] inline-flex items-center gap-2 text-white font-medium px-5 py-3 rounded-md border border-2 shadow-md"
                    >
                        Download{" "}
                        <img
                            src={explorImg}
                            className="h-4 w-4 object-contain"
                            alt="explore"
                        />
                    </motion.button>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative w-full flex justify-center mt-6 hidden md:block md:mt-0 md:static md:w-1/2"
                >
                    <img
                        src={IphoneImg}
                        alt="App Preview"
                        className="w-60 md:w-[600px] md:h-[400px] md:relative md:right-[-68px]"
                    />
                </motion.div>
            </motion.div>

            {/* Middle Section */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="max-w-[90%] mx-auto md:px-6 px-4 md:pt-12 pt-10 md:pb-10 pb-8 grid md:grid-cols-2 gap-10"
            >

                <motion.div variants={fadeUp}>
                    <div className="flex items-center space-x-2 mb-3">
                        <img src={FooterLogo} className="w-28 object-contain" alt="" />
                    </div>
                    <p className="text-[14px] text-[#212121B2] font-poppins md:pr-52">
                        Discover features that transforms life spiritual journey through
                        insightful scriptures, heartfelt prayers and practical reflections.
                        Total guide to experiencing God.
                    </p>
                </motion.div>

            
                <motion.div
                    variants={fadeUp}
                    className="flex justify-start md:justify-end"
                >
                    <ul className="space-y-2 font-poppins text-sm text-left md:text-right">
                        {["Bible", "About us", "Donate", "Contact", "Daily Devotion", "Bible Courses"].map(
                            (item, idx) => (
                                <motion.li variants={fadeUp} key={idx}>
                                    <a
                                        href="#"
                                        className="hover:text-gray-900 text-black font-semibold"
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            )
                        )}
                    </ul>
                </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="border-t mx-[24px] md:mx-[96px] border-gray-300"
            ></motion.div>

        
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="max-w-[88%] mx-auto py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            >
            
                <motion.p variants={fadeUp} className="text-[14px] font-poppins text-black">
                    ©MagLife 2025 All Right Reserved
                </motion.p>

            
                <motion.div
                    variants={fadeUp}
                    className="flex space-x-3 text-white"
                >
                    {[MdEmail, FaInstagram, FaTelegramPlane, FaTwitter, FaLinkedin, FaTiktok, FaFacebook].map(
                        (Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="bg-[#3BA2C6] p-2 rounded"
                            >
                                <Icon />
                            </a>
                        )
                    )}
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
