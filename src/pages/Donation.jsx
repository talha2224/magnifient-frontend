import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";
import img1 from "../assets/donationtop.png";
import img2 from "../assets/donationleft.png";
import img3 from "../assets/donationright.png";
import Question from "../components/HomeComponent/Questions";
import Footer from "../components/HomeComponent/Footer";

const Donation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState("");
    const [monthly, setMonthly] = useState(true);

    const donationOptions = [25, 50, 75, 100, 250, 500];

    return (
        <>
            <div className="bg-[#E7E9EE] relative min-h-screen flex flex-col">
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
                                <Link to="/bible" className="hover:text-[#45BDE0] transition font-poppins">
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

                <div className="flex-grow flex md:mt-8 items-center pt-32 pb-10 px-4 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-5 md:gap-4 md:max-w-7xl w-full items-start mx-auto">

                        
                        <motion.div
                            className="col-span-2 grid mb-5 md:mb-0 grid-rows-[0.7fr_1.3fr] gap-2"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            
                            <img
                                src={img1}
                                alt="donation1"
                                className="rounded-lg object-cover w-full h-64 md:h-[300px]"
                            />
                        
                            <div className="grid grid-cols-2 gap-2">
                                <img
                                    src={img2}
                                    alt="donation2"
                                    className="rounded-lg object-cover w-full h-full md:h-[400px]"
                                />
                                <img
                                    src={img3}
                                    alt="donation3"
                                    className="rounded-lg object-cover w-full h-full md:h-[400px]"
                                />
                            </div>
                        </motion.div>

                
                        <motion.div
                            className="col-span-3 bg-white rounded-lg shadow-md flex flex-col p-6 sm:p-8 md:px-16 md:py-10"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        >
                            <h2 className="text-lg sm:text-2xl md:mt-7 md:text-3xl text-center font-semibold font-poppins text-gray-800 mb-6">
                                Fuel the Mission and Make a Lasting Impact with Your Gift
                            </h2>

                        
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full border border-gray-300 rounded-xl py-3 md:py-5 px-3 md:text-2xl mb-6 text-gray-700
                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]
                focus:outline-none focus:border-[#3CCDF8]"
                                placeholder="$0"
                            />

                
                            <div className="flex flex-wrap gap-3 mb-6">
                                {donationOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => setAmount(option)}
                                        className={`px-3 py-3 md:px-[26.5px] md:py-5 rounded-md border text-[9.6px] md:text-xl font-bold transition text-center 
                        ${Number(amount) === option
                                                ? "bg-white text-black border-[#3CCDF8]"
                                                : "bg-[#F0F8FE] text-gray-700 border-gray-300 hover:border-[#45BDE0]"
                                            }`}
                                    >
                                        ${option}
                                    </button>
                                ))}
                            </div>

                            
                            <div>
                                <div className="bg-[#E7F5FA] p-4 rounded-xl">
                                    <label className="flex items-start space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={monthly}
                                            onChange={() => setMonthly(!monthly)}
                                            className="mt-[5px] accent-[#3CCDF8] rounded-lg"
                                        />
                                        <span className="text-[#212121CC] font-poppins md:text-sm text-xs leading-relaxed">
                                            <strong className="font-poppins">Make it a monthly donation</strong>
                                            <br />
                                            Discover how we’re helping people grow spiritually, build meaningful
                                            connections, and live a life rooted in faith every single day.
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="border-b border-[#E3E3E3] md:mt-6 mt-4 mb-3 md:mb-4"></div>

                        
                            <div className="mb-6">
                                <label className="text-gray-800 ml-1 md:text-lg text-[10px] font-medium mb-2 block">
                                    We would like to thank you for your generosity and send you a receipt
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full border border-gray-300 rounded-xl py-3 md:py-4 px-3 text-gray-700 
                    focus:outline-none focus:border-[#3CCDF8]"
                                />
                            </div>

                            
                            <div className="flex justify-center">
                                <button className="md:w-72 w-48 py-4 sm:py-4 bg-[#45BDE0] text-white md:text-lg text-sm font-semibold rounded-md hover:bg-[#009ACD] transition">
                                    Donate {amount ? `$${amount}` : ""}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Question />
            <Footer />
        </>
    );
};

export default Donation;
