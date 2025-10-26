import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";
import heroBg from "../assets/herobg.png";
import HeroCenter from "../assets/herocenter.png";
import HeroSection from "../components/HomeComponent/Hero";

import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import Tools from "../components/HomeComponent/Tools";
import Reviews from "../components/HomeComponent/Reviews";
import Question from "../components/HomeComponent/Questions";
import Footer from "../components/HomeComponent/Footer";
import { motion } from "framer-motion";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const steps = [
        {
            icon: step1,
            title: "Create an Account",
            desc: "Join the community and personalize your faith experience.",
        },
        {
            icon: step2,
            title: "Choose Your Spiritual Goals",
            desc: "Tell us what you want to focus on—prayer, Bible study, devotionals,",
        },
        {
            icon: step3,
            title: "Explore Your Dashboard",
            desc: "Access devotionals, reading plans, sermons, and community features tailored to you.",
        },
        {
            icon: step4,
            title: "Grow Daily in Faith",
            desc: "Stay consistent with daily reminders, audio devotionals.",
        },
    ];


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
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <>
            
            <HeroSection />

        
            <section className="py-10 px-6 md:px-0 lg:px-0 font-poppins bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-2xl font-poppins md:mt-12 font-semibold sm:text-3xl md:text-5xl md:leading-[1.2] md:mb-12 mb-7 ml-2 text-gray-900 text-left"
                    >
                        Begin Your Path to <br /> Spiritual Growth
                    </motion.h2>

                    {/* Steps with Staggered Animation */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-col md:grid md:grid-cols-4 md:gap-x-16 relative"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="relative flex-1 flex flex-col md:flex-col items-start text-left mb-8"
                            >
                                <div className="flex md:block items-start">
                                    {/* Icon */}
                                    <div className="relative z-10 mb-0 md:mb-4">
                                        <img
                                            src={step.icon}
                                            alt={step.title}
                                            className="h-14 w-14 object-contain"
                                        />
                                    </div>

                                    {/* Title + Desc */}
                                    <div className="ml-5 md:ml-2.5">
                                        <h3 className="text-[18px] font-poppins font-semibold text-gray-900 mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-[13px] font-poppins pr-[50px] text-gray-600 max-w-xs">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Connector Line */}
                                {index !== steps.length - 1 && (
                                    <>
                                        {/* Desktop horizontal line */}
                                        <div className="hidden md:block absolute top-[24px] left-[30%] w-[46vh] h-[0.5px] bg-[#57D0F4] -translate-x-[calc(50%-6.1rem)]"></div>

                                        {/* Mobile vertical line */}
                                        <div className="block md:hidden absolute left-[25px] top-[40px] w-[0.5px] h-24 bg-[#57D0F4]"></div>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Tools />
            <Reviews />
            <Question />
            <Footer />
        </>
    );
};

export default Home;
