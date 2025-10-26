import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";
import leftImg from "../assets/left.png";
import rightImg from "../assets/right.jpg";
import Animatedimage from '../assets/animate.png'
import Power from "../components/AboutComponent/Power";
import Question from "../components/HomeComponent/Questions";
import Footer from "../components/HomeComponent/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="relative bg-[#ECEFF1] min-h-screen">
                {/* Navbar */}
                <nav className="absolute top-0 left-0 w-full z-50 text-white py-8 px-4 md:px-48">
                    <div className="md:max-w-5xl bg-[#09181D] mx-auto rounded-md px-4 py-2.5 sm:px-6 lg:px-4">
                        <div className="flex justify-between items-center">
                            {/* Logo */}
                            <div className="flex cursor-pointer items-center space-x-2">
                                <Link to='/'>
                                    <img src={logoImg} alt="logo" className="h-8 w-auto" />
                                </Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
                                <a href="#" className="hover:text-[#45BDE0] transition font-poppins">
                                    <Link to='/bible'>Bible</Link>
                                </a>
                                <a href="#" className="hover:text-[#45BDE0] transition font-poppins">
                                    <Link to='/about'>About us</Link>
                                </a>
                                <a href="#" className="hover:text-[#45BDE0] transition font-poppins">
                                    <Link to='/donation'>Donate</Link>
                                </a>
                                <a href="#" className="hover:text-[#45BDE0] transition font-poppins">
                                    <Link to='/contact'>Contact us</Link>
                                </a>
                                <Link to='/dailydevotion' className="hover:text-[#45BDE0] transition font-poppins">Daily devotion</Link>
                                <Link to='/biblecourse' className="hover:text-[#45BDE0] transition font-poppins">Bible courses</Link>
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

                {/* Main Content */}
                <div className="md:pt-[145px] pt-[110px] px-6 md:px-[100px] ">
                    {/* Heading */}
                    <motion.h2
                        className="text-xl md:text-6xl text-center font-poppins font-bold text-gray-900 md:mb-14 mb-8 leading-snug md:leading-[1.1]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Our mission is to guide souls daily <br />
                        and foster a connection with God
                    </motion.h2>

                    {/* Images Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                    
                        <motion.div
                            className="relative md:col-span-2 overflow-hidden"
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img
                                src={leftImg}
                                alt="Mission Left"
                                className="w-full h-[300px] md:h-[550px] object-cover"
                            />
                            <div className="absolute bottom-0 font-poppins left-0 bg-white text-[#212121CC] text-xs md:pr-5 md:text-lg md:w-[40%] w-[60%]">
                                Magnificent Life Daily Devotional nurtures faith and spiritual
                                growth through daily biblical teachings, helping individuals build
                                a deeper relationship with God.
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="overflow-hidden"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <img
                                src={rightImg}
                                alt="Mission Right"
                                className="w-full h-[300px] md:h-[550px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Animated Line */}
                <motion.div
                    className="mt-10 bg-[#90BE6D] py-3 overflow-hidden relative"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Wrapper for continuous scroll */}
                    <div className="flex animate-scrollX whitespace-nowrap text-white font-semibold text-sm md:text-base">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-10 px-5">
                                <div className="flex items-center space-x-3">
                                    <img src={Animatedimage} alt="love" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">LOVE</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <img src={Animatedimage} alt="faith" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">FAITH</span>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <img src={Animatedimage} alt="hope" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">HOPE</span>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <img src={Animatedimage} alt="growth" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">GROWTH</span>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <img src={Animatedimage} alt="peace" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">PEACE</span>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <img src={Animatedimage} alt="community" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">COMMUNITY</span>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <img src={Animatedimage} alt="prayer" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">PRAYER</span>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <img src={Animatedimage} alt="guidance" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">GUIDANCE</span>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <img src={Animatedimage} alt="inspiration" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">INSPIRATION</span>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <img src={Animatedimage} alt="connection" className="w-4 h-4 object-contain" />
                                    <span className="text-sm">CONNECTION</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <Power />
            <Question />
            <Footer />
        </>
    );
};

export default AboutUs;
