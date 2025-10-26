import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";
import heroImg from "../assets/course.png";
import Overview from "../components/DailyCourse/Overview";
import Footer from "../components/HomeComponent/Footer";

const BibleCourse = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="relative w-full md:min-h-screen overflow-hidden">
                
                <div className="absolute inset-0 bg-[#E0EFF4]"></div>

                {/* Navbar */}
                <nav className="absolute top-0 left-0 w-full z-50 text-white py-6 px-4 md:px-48">
                    <div className="md:max-w-5xl bg-[#09181D] mx-auto rounded-md px-4 py-2.5 sm:px-6 lg:px-4">
                        <div className="flex justify-between items-center">
                            {/* Logo */}
                            <div className="flex cursor-pointer items-center space-x-2">
                                <Link to="/">
                                    <img src={logoImg} alt="logo" className="h-8 w-auto" />
                                </Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
                                <Link
                                    to="/bible"
                                    className="hover:text-[#45BDE0] transition font-poppins"
                                >
                                    Bible
                                </Link>
                                <Link
                                    to="/about"
                                    className="hover:text-[#45BDE0] transition font-poppins"
                                >
                                    About us
                                </Link>
                                <Link
                                    to="/donation"
                                    className="hover:text-[#45BDE0] transition font-poppins"
                                >
                                    Donate
                                </Link>
                                <Link
                                    to="/contact"
                                    className="hover:text-[#45BDE0] transition font-poppins"
                                >
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
                            <div className="hidden md:flex">
                                <button className="ml-4 font-poppins px-4 py-2 bg-gray-200 text-black font-semibold text-sm rounded hover:bg-gray-300">
                                    Sign in
                                </button>
                            </div>

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
                        <div className="md:hidden bg-[#6E6E6E] mt-2 rounded-md px-4 pt-3 pb-4 space-y-3 text-sm">
                            <Link to='/bible' className="block hover:text-gray-300">Bible</Link>
                            <Link to='/about' className="block hover:text-gray-300">About us</Link>
                            <Link to='/donation' className="block hover:text-gray-300">Donate</Link>
                            <Link to='/contact' className="block hover:text-gray-300">Contact us</Link>
                            <Link to='/dailydevotion' className="block hover:text-gray-300">Daily devotion</Link>
                            <Link to='/biblecourse' className="block hover:text-gray-300">Bible courses</Link>
                            <button className="w-full text-left px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
                                Sign in
                            </button>
                        </div>
                    )}
                </nav>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-4 mt-28 md:mt-[145px]">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-bold text-black font-poppins leading-snug"
                    >
                        Deepen Your Knowledge <br className="hidden md:block" /> of God’s Word
                    </motion.h1>
                </div>

            
                <div className="h-10 md:h-20"></div>

            
                <motion.div
                    className="relative w-full h-[20vh] md:h-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                >
                    <img
                        src={heroImg}
                        alt="Bible Course"
                        className="md:w-full md:h-full object-cover"
                    />
                </motion.div>
            </section>
            <Overview />
            <Footer />
        </>
    );
};

export default BibleCourse;
