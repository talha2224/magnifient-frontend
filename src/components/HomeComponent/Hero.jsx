// HeroSection.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logoImg from "../../assets/logo.png";
import heroBg from "../../assets/herobg.png";
import HeroCenter from "../../assets/herocenter.png";
import explorImg from "../../assets/explor.png";
import SignupModal from "../../pages/SignUp";
import SigninModal from "../../pages/Signin";
import ForgotPasswordModal from "../../pages/ForgotPassword";
import OtpModal from "../../pages/Otp";
import CreatePasswordModal from "../../pages/NewPassword";
import SuccessModal from "../../pages/SuccessModal";
import Onboarding from "../../pages/Onboarding";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showSignin, setShowSignin] = useState(false);
    const [isForgotOpen, setIsForgotOpen] = useState(false);
    const [isOtpOpen, setIsOtpOpen] = useState(false);
    const [isCreatePassOpen, setIsCreatePassOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [showOnboarding, setShowOnboarding] = useState(false);

    // Variants for staggered animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const zoomIn = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
    };

    return (
        <section
            className="relative md:h-[120vh] h-[70vh] bg-cover bg-center bg-no-repeat text-white"
            style={{ backgroundImage: `url(${heroBg})` }}
        >

            <nav className="absolute top-0 left-0 w-full z-50 text-white py-8 px-4 md:px-48">
                <div className="md:max-w-5xl bg-[#6E6E6E66] mx-auto rounded-md px-4 py-2.5 sm:px-6 lg:px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex cursor-pointer items-center space-x-2">
                            <Link to="/">
                                <img src={logoImg} alt="logo" className="h-8 w-auto" />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
                            <Link to="/bible" className="hover:text-[#45BDE0] transition font-poppins">Bible</Link>
                            <Link to="/about" className="hover:text-[#45BDE0] transition font-poppins">About us</Link>
                            <Link to="/donation" className="hover:text-[#45BDE0] transition font-poppins">Donate</Link>
                            <Link to="/contact" className="hover:text-[#45BDE0] transition font-poppins">Contact us</Link>
                            <Link to='/dailydevotion' className="hover:text-[#45BDE0] transition font-poppins">Daily devotion</Link>
                            <Link to='/biblecourse' className="hover:text-[#45BDE0] transition font-poppins">Bible courses</Link>
                        </div>


                        <div className="hidden md:flex">
                            <button onClick={() => setShowSignup(true)} className="ml-4 font-poppins px-4 py-2 bg-gray-200 text-black font-semibold text-sm rounded hover:bg-gray-300">
                                Sign in
                            </button>
                        </div>

                        {/* Signup */}
                        <SignupModal
                            isOpen={showSignup}
                            onClose={() => setShowSignup(false)}
                            switchToSignin={() => {
                                setShowSignup(false);
                                setShowSignin(true);
                            }}
                            onContinue={() => {
                                setShowSignup(false);
                                setShowOnboarding(true);
                            }}
                        />

                        {/* Signin */}
                        <SigninModal
                            isOpen={showSignin}
                            onClose={() => setShowSignin(false)}
                            switchToSignup={() => setShowSignup(true)}
                            onForgotPassword={() => {
                                setShowSignin(false);
                                setIsForgotOpen(true);
                            }}
                            onContinue={() => {
                                setShowSignin(false);
                                setShowOnboarding(true);
                            }}
                        />

                        {/* Forgot */}
                        <ForgotPasswordModal
                            isOpen={isForgotOpen}
                            onClose={() => setIsForgotOpen(false)}
                            onContinue={() => {
                                setIsForgotOpen(false);
                                setIsOtpOpen(true);
                            }}
                        />

                        {/* OTP */}
                        <OtpModal
                            isOpen={isOtpOpen}
                            onClose={() => setIsOtpOpen(false)}
                            onContinue={() => {
                                setIsOtpOpen(false);
                                setIsCreatePassOpen(true);
                            }}
                        />

                        {/* Create New Password */}
                        <CreatePasswordModal
                            isOpen={isCreatePassOpen}
                            onClose={() => setIsCreatePassOpen(false)}
                            onContinue={() => {
                                setIsCreatePassOpen(false);
                                setIsSuccessOpen(true);
                            }}
                        />

                        {/* Success */}
                        <SuccessModal
                            isOpen={isSuccessOpen}
                            onClose={() => setIsSuccessOpen(false)}
                            onContinue={() => {
                                setShowSignin(true);
                            }}
                        />

                        {/* Onboarding Modal */}
                        <Onboarding
                            isOpen={showOnboarding}
                            onClose={() => setShowOnboarding(false)}
                        />

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
                        <Link to="/bible" className="block hover:text-gray-300">Bible</Link>
                        <Link to="/about" className="block hover:text-gray-300">About us</Link>
                        <Link to="/donation" className="block hover:text-gray-300">Donate</Link>
                        <Link to="/contact" className="block hover:text-gray-300">Contact us</Link>
                        <Link to='/dailydevotion' className="block hover:text-gray-300">Daily devotion</Link>
                        <Link to='/biblecourse' className="block hover:text-gray-300">Bible courses</Link>
                        <button onClick={() => setShowSignup(true)} className="w-full text-left px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
                            Sign in
                        </button>
                    </div>
                )}
            </nav>


            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative z-10 max-w-4xl mx-auto text-center px-6 h-full flex flex-col justify-center items-center"
            >
                {/* Badge */}
                <motion.div variants={fadeUp} className="mb-3 md:mt-8 bg-[#00334A4D]">
                    <span className="inline-flex font-poppins items-center rounded md:px-7 px-4 py-[5px] md:py-[7px] md:text-md text-sm font-medium border border-white/80">
                        Community tailored just for you.
                        <span className="ml-2">
                            <img src={HeroCenter} className="h-4 w-4 object-contain" alt="" />
                        </span>
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={zoomIn}
                    className="text-[32px] font-poppins sm:text-4xl md:text-6xl font-bold"
                >
                    Deepen Your Faith, <br /> Embrace Daily Grace
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                    variants={fadeUp}
                    className="mt-4 font-poppins text-xs md:text-lg text-gray-200 max-w-2xl md:mx-20"
                >
                    Start your journey with guided devotionals, interactive Bible tools,
                    uplifting sermons, and a supportive faith community tailored just
                    for you.
                </motion.p>

                {/* Button */}
                <motion.div
                    variants={fadeUp}
                    className="mt-5"
                >
                    <a
                        href="#"
                        className="inline-flex font-poppins items-center px-8 py-3 text-white border border-white/80 font-semibold text-md bg-[#45BDE0] rounded-lg hover:bg-[#32a6db] transition"
                    >
                        Explore Devotionals
                        <img src={explorImg} className="h-4 w-4 object-contain ml-2 mt-0.5" alt="" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
