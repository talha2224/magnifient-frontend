import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";
import phoneImg from "../assets/dailyhand.png";
import bg from "../assets/dailybg.png";
import Trust from "../components/DailyDevotion/Trust";
import Footer from "../components/HomeComponent/Footer";

const DailyDevotion = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="relative w-full overflow-hidden">
                {/* Background Images */}
                <div className="absolute inset-0 flex justify-between">
                    <div className="flex flex-col w-1/2">
                        <img src={bg} alt="bg" className="w-full h-1/3 object-cover" />
                        <img src={bg} alt="bg" className="w-full h-1/3 object-cover" />
                        <img src={bg} alt="bg" className="w-full h-1/3 object-cover" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <img src={bg} alt="bg" className="w-full h-1/3 object-cover" />
                        <img src={bg} alt="bg" className="w-full h-1/3 object-cover" />
                        <img src={bg} alt="bg" className="w-full h-1/3 object-cover" />
                    </div>
                </div>

                {/* Gray Overlay */}
                <div className="absolute inset-0 bg-[#EDEDED]" />

                {/* Navbar */}
                <motion.nav
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-0 left-0 w-full z-50 text-white py-6 px-4 md:px-8"
                >
                    <div className="max-w-6xl mx-auto bg-[#09181D] rounded-md px-4 py-2.5 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center">
                            {/* Logo */}
                            <div className="flex cursor-pointer items-center space-x-2">
                                <Link to="/">
                                    <img src={logoImg} alt="logo" className="h-8 w-auto" />
                                </Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
                                <Link to="/" className="hover:text-[#45BDE0] transition">
                                    Bible
                                </Link>
                                <Link to="/about" className="hover:text-[#45BDE0] transition">
                                    About us
                                </Link>
                                <Link to="/donation" className="hover:text-[#45BDE0] transition">
                                    Donate
                                </Link>
                                <Link to='/contact' className="hover:text-[#45BDE0] transition">
                                    Contact us
                                </Link>
                                <Link to='/dailydevotion' className="hover:text-[#45BDE0] transition">
                                    Daily devotion
                                </Link>
                                <Link to='/biblecourse' className="hover:text-[#45BDE0] transition">
                                    Bible courses
                                </Link>
                            </div>

                            {/* Sign in Button */}
                            <div className="hidden md:flex">
                                <button className="ml-4 px-4 py-2 bg-gray-200 text-black font-semibold text-sm rounded hover:bg-gray-300 transition">
                                    Sign in
                                </button>
                            </div>

                            {/* Mobile Hamburger */}
                            <div className="md:hidden flex items-center">
                                <button onClick={() => setIsOpen(!isOpen)}>
                                    {isOpen ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="md:hidden bg-[#09181D] mt-2 rounded-md px-4 pt-3 pb-4 space-y-3 text-sm max-w-6xl mx-auto"
                        >
                            <Link to='/bible' className="block hover:text-gray-300">Bible</Link>
                            <Link to='/about' className="block hover:text-gray-300">About us</Link>
                            <Link to='/donation' className="block hover:text-gray-300">Donate</Link>
                            <Link to='/contact' className="block hover:text-gray-300">Contact us</Link>
                            <Link to='/dailydevotion' className="block hover:text-gray-300">Daily devotion</Link>
                            <Link to='/biblecourse' className="block hover:text-gray-300">Bible courses</Link>
                            <button className="w-full text-left px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
                                Sign in
                            </button>
                        </motion.div>
                    )}
                </motion.nav>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-[580px] md:h-[900px] px-4 pt-16 pb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-5xl absolute top-[110px] md:top-[160px] font-bold text-black mb-6 font-poppins"
                    >
                        Start Your Day with <br className="hidden sm:block" />
                        <span className="text-black">God's Word</span>
                    </motion.h1>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-8 py-3 absolute top-[220px] md:top-[300px] bg-[#45BDE0] hover:bg-sky-400 text-white font-semibold rounded-lg text-md transition"
                    >
                        Read today's devotion
                    </motion.button>

                    {/* Phone Image */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-0 flex justify-center w-full"
                    >
                        <img
                            src={phoneImg}
                            alt="phone showing daily devotion"
                            className="w-64 md:w-full max-w-md"
                        />
                    </motion.div>
                </div>
            </section>
            <Trust />
            <Footer />
        </>
    );
};

export default DailyDevotion;
