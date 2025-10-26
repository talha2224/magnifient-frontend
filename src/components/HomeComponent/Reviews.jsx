import React from "react";
import profile from "../../assets/profile.png";
import explorImg from "../../assets/explor.png";
import { TiStarFullOutline } from "react-icons/ti";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "JOHN MARTINS",
        role: "LUSDESIGN & CO.",
        text: "Since joining, I’ve felt more connected and spiritually uplifted every single day. The messages, the community, everything feels like it was made just for me",
        rating: 5,
        image: profile,
    },
    {
        name: "JOHN MARTINS",
        role: "LUSDESIGN & CO.",
        text: "This platform has transformed the way I grow in faith. It’s inspiring, easy to use, and truly a blessing in my life",
        rating: 5,
        image: profile,
    },
    {
        name: "JOHN MARTINS",
        role: "LUSDESIGN & CO.",
        text: "I never thought I could feel this supported online. Every visit leaves me encouraged and filled with hope",
        rating: 5,
        image: profile,
    },
    {
        name: "JOHN MARTINS",
        role: "LUSDESIGN & CO.",
        text: "This platform has transformed the way I grow in faith. It’s inspiring, easy to use, and truly a blessing in my life",
        rating: 5,
        image: profile,
    },
    {
        name: "JOHN MARTINS",
        role: "LUSDESIGN & CO.",
        text: "I never thought I could feel this supported online. Every visit leaves me encouraged and filled with hope",
        rating: 5,
        image: profile,
    },
];

// Animation Variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.25 },
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

const Reviews = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F6F6F6] font-poppins">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col md:flex-row md:justify-between md:items-start mb-10"
                >
                    {/* Left text */}
                    <h2 className="text-2xl font-poppins sm:text-3xl md:text-4xl font-semibold pr-10 text-gray-900 max-w-lg leading-snug">
                        What others are <br /> saying about their journey
                    </h2>

                    {/* Right text + button */}
                    <div className="mt-6 md:mt-0 text-left text-md md:text-right max-w-sm">
                        <p className="text-[#212121CC] font-poppins mb-4">
                            See how lives have been impacted through shared faith, support, and daily encouragement.
                        </p>
                        <button className="bg-[#45BDE0] text-white text-xs font-semibold px-4 py-3 rounded-lg inline-flex items-center gap-2 shadow-md">
                            See More{" "}
                            <img src={explorImg} className="h-4 w-4 object-contain" alt="" />
                        </button>
                    </div>
                </motion.div>

                
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative overflow-hidden"
                >
                    
                    <div className="flex gap-6 animate-scrollX w-[200%]">
                        {[...reviews, ...reviews].map((review, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="flex-shrink-0 
                                    w-[35%]     
                                    sm:w-[40%]
                                    lg:w-72
                                    bg-white rounded-xl p-6 shadow-sm"
                            >
                                {/* Profile */}
                                <div className="flex items-center mb-4">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full mr-3"
                                    />
                                    <div>
                                        <h3 className="text-[13px] font-poppins text-gray-900">
                                            {review.name}
                                        </h3>
                                        <p className="text-[11px] font-poppins text-gray-500">{review.role}</p>
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-gray-700 text-xs font-poppins mb-4">
                                    {review.text}
                                </p>

                                {/* Rating */}
                                <div className="flex text-yellow-400">
                                    {Array(review.rating)
                                        .fill()
                                        .map((_, i) => (
                                            <TiStarFullOutline key={i} />
                                        ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
