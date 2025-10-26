import React, { useState } from "react";
import { motion } from "framer-motion";
import powerImg1 from "../../assets/power.png";

const Power = () => {
    const [active, setActive] = useState(0);

    const items = [
        {
            title: "Nurture Spiritual Growth",
            desc: "We provide tools, teachings, and support systems to help individuals deepen their faith and walk confidently in purpose.",
            image: powerImg1,
        },
        {
            title: "Build Lasting Connections",
            desc: "By fostering genuine relationships, we create a space where believers can share, learn, and grow together in unity.",
            image: powerImg1,
        },
        {
            title: "Inspire Meaningful Impact",
            desc: "We aim to extend love and service beyond the digital space — reaching communities and transforming lives with lasting values.",
            image: powerImg1,
        },
    ];

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div className="bg-[#E5F3F8] md:py-32 py-10 px-4 md:px-20">
            {/* Heading */}
            <motion.h2
                className="text-xl md:text-4xl font-poppins font-semibold text-center text-gray-900 md:mb-12 mb-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                Empowering Souls through Connection, <br className="hidden md:block" />
                Growth, and Purpose
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-5 items-center px-4 gap-6">
                {/* Left Text */}
                <motion.div
                    className="md:col-span-2 flex flex-col md:mb-0 mb-10 md:space-y-8 space-y-5"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start cursor-pointer"
                            onClick={() => setActive(index)}
                        >
                            <div
                                className={`md:h-[96px] h-[86px] w-[5px] md:w-[6px] mr-4 transition-all rounded-md duration-300 ${
                                    active === index ? "bg-[#F9C74F]" : "bg-[#BFD4DB]"
                                }`}
                            ></div>

                            <div>
                                <h3
                                    className={`font-poppins font-semibold text-lg md:text-xl ${
                                        active === index ? "text-gray-900" : "text-gray-600"
                                    }`}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-[#21212199] text-sm md:text-base md:mr-[120px]">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="md:col-span-3 flex justify-center md:justify-end"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img
                        src={items[active].image}
                        alt={items[active].title}
                        className="rounded-lg shadow-lg w-full md:max-w-[800px] object-cover transition-all duration-500"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Power;
