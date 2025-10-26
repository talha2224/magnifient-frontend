import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";
import bg1 from "../assets/bibleleft.png";
import bg2 from "../assets/bibleleft.png";
import bg3 from "../assets/bibleright.png";
import bg4 from "../assets/bibleright.png";
import heroBottomImg from "../assets/biblecenter.png";
import Footer from "../components/HomeComponent/Footer";
import Psalm from "../components/Bible/Psalm";

const Bible = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="relative w-full h-[430px] md:h-[900px] overflow-hidden">
                {/* Background Images Layer */}
                <div className="absolute inset-0">
                    <div className="w-full h-full relative">
                        {/* Floating Backgrounds */}
                        <motion.img
                            src={bg1}
                            alt="bg1"
                            className="absolute w-40 md:w-96 top-20 left-0 object-contain z-10"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src={bg1}
                            alt="bg1"
                            className="absolute w-40 md:w-96 bottom-0 left-0 object-contain z-10"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src={bg2}
                            alt="bg2"
                            className="absolute w-32 md:w-96 top-0 right-0 object-contain z-10"
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src={bg2}
                            alt="bg2"
                            className="absolute w-32 md:w-96 bottom-0 right-0 object-contain z-10"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Overlay Blue Gradient with Transparency */}
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-700/20 via-sky-700/20 to-sky-600/20 z-20"></div>
                </div>

                {/* Navbar */}
                <motion.nav
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-0 left-0 w-full z-50 text-white py-8 px-4 md:px-48"
                >
                    <div className="md:max-w-5xl bg-[#09181D] mx-auto rounded-md px-4 py-2.5 sm:px-6 lg:px-4">
                        <div className="flex justify-between items-center">
                            {/* Logo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="flex cursor-pointer items-center space-x-2"
                            >
                                <Link to="/">
                                    <img src={logoImg} alt="logo" className="h-8 w-auto" />
                                </Link>
                            </motion.div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
                                <Link to="/" className="hover:text-[#45BDE0] transition font-poppins">
                                    Bible
                                </Link>
                                <Link to="/about" className="hover:text-[#45BDE0] transition font-poppins">
                                    About us
                                </Link>
                                <Link to="/donation" className="hover:text-[#45BDE0] transition font-poppins">
                                    Donate
                                </Link>
                                <Link to="/contact" className="hover:text-[#45BDE0] transition font-poppins">
                                    Contact us
                                </Link>
                                <Link to='/dailydevotion' className="hover:text-[#45BDE0] transition font-poppins">
                                    Daily devotion
                                </Link>
                                <Link to='/biblecourse' className="hover:text-[#45BDE0] transition font-poppins">
                                    Bible courses
                                </Link>
                            </div>

                            {/* Sign in Button */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="hidden md:flex"
                            >
                                <button className="ml-4 font-poppins px-4 py-2 bg-gray-200 text-black font-semibold text-sm rounded hover:bg-gray-300">
                                    Sign in
                                </button>
                            </motion.div>

                            {/* Mobile Hamburger */}
                            <div className="md:hidden flex items-center">
                                <button onClick={() => setIsOpen(!isOpen)}>
                                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="md:hidden bg-[#6E6E6E] mt-2 rounded-md px-4 pt-3 pb-4 space-y-3 text-sm"
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

                {/* Hero Section Content */}
                <div className="relative z-30 flex flex-col justify-center items-center h-full text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl absolute md:top-[150px] top-[120px] font-poppins md:text-6xl font-bold text-black mb-6"
                    >
                        Discover the Heroes <br /> of God’s Word
                    </motion.h1>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 absolute md:top-[320px] top-[220px] py-3 bg-[#45BDE0] text-white rounded-lg md:text-lg text-sm font-semibold shadow-md transition"
                    >
                        Explore Devotionals
                    </motion.button>

                    <motion.img
                        src={heroBottomImg}
                        alt="Hero Bottom"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        className="absolute bottom-0 w-[80%] object-contain"
                    />
                </div>
            </div>

            {/* Psalm Section */}
            <Psalm />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Bible;
