import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";
import worldMap from "../assets/map.png";
import ContactForm from "../components/ContactUsComponent/ContactUsForm";
import Footer from "../components/HomeComponent/Footer";

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="relative md:min-h-screen bg-[#DBEECD] font-poppins">
                {/* Navbar */}
                <motion.nav
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-0 left-0 w-full z-50 text-white py-6 px-4 md:px-48"
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
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="hidden md:flex"
                            >
                                <button className="ml-4 px-4 py-2 bg-gray-200 text-black font-semibold text-sm rounded hover:bg-gray-300">
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
                            className="md:hidden bg-[#09181D] mt-2 rounded-md px-4 pt-3 pb-4 space-y-3 text-sm"
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

                {/* Content Section */}
                <div className="flex flex-col justify-center items-center text-center px-4 pt-32 md:pt-[170px]">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl font-poppins font-bold text-black leading-snug"
                    >
                        We’re Here to Connect <br /> with You Anytime
                    </motion.h1>

                    {/* Map Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:mt-20 mt-10 w-full max-w-5xl"
                    >
                        <img
                            src={worldMap}
                            alt="World Map"
                            className="w-full mb-10 md:mb-20 h-auto object-contain"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
            >
                <ContactForm />
            </motion.div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Footer />
            </motion.div>
        </>
    );
};

export default ContactUs;
