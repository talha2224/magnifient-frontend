import React from "react";
import sampleImg from "../../assets/dailybottomleft.png";
import { BiSolidShare } from "react-icons/bi";
import { motion } from "framer-motion";

const Trust = () => {
    return (
        <section className="w-full bg-[#E6F4F9] md:py-16 py-5 px-8 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:mt-16 mt-12 md:flex-row items-stretch gap-6">
            
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full md:w-5/12 flex"
                >
                    <img
                        src={sampleImg}
                        alt="Worship"
                        className="rounded-lg shadow-md w-full object-contain"
                    />
                </motion.div>

                {/* Right Side - Devotion Content */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col justify-between"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 80 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="md:mt-16 mt-5"
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 80 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="text-2xl md:text-3xl font-poppins font-bold text-center md:mb-4"
                        >
                            Today’s Daily Devotion
                        </motion.h2>

                        <motion.h3
                            variants={{
                                hidden: { opacity: 0, y: 80 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="text-lg md:mt-5 mt-5 md:text-2xl font-poppins text-[#4D4D4D] font-semibold text-center mb-3"
                        >
                            Trusting Through the Unknown
                        </motion.h3>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 80 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="font-poppins text-sm md:text-lg text-gray-600 md:mt-8 text-center mb-6"
                        >
                            Scripture:{" "}
                            <span className="font-poppins">
                                "For I know the plans I have for you,” declares the Lord, “plans
                                to prosper you and not to harm you, plans to give you hope and a
                                future."
                            </span>
                            <br />
                            <span className="font-semibold">— Jeremiah 29:11</span>
                        </motion.p>

                        {/* Reflection */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 80 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-gray-100 md:mt-10 rounded-lg py-8 px-4 mb-4"
                        >
                            <h4 className="font-bold md:text-lg mb-2">Reflection</h4>
                            <p className="text-[#727272] md:text-lg leading-relaxed">
                                Life often feels uncertain, and in moments of waiting or
                                confusion, we tend to lean on our own limited understanding. But
                                God calls us to trust His higher plan. Even when we can’t see
                                what’s ahead. He sees the full picture. His timing, though
                                different from ours, is always perfect.
                            </p>
                        </motion.div>

                        {/* Prayer */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 80 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-green-100 md:mt-8 rounded-lg py-8 px-4"
                        >
                            <h4 className="font-bold md:text-lg mb-2">Prayer</h4>
                            <p className="text-gray-700 md:text-lg leading-relaxed">
                                Lord, help me trust You even when I don’t understand. Give me
                                peace in the waiting and faith to walk forward knowing You hold
                                my future. Amen.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Share Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-5 md:mt-0"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="gap-2 flex w-full items-center justify-center py-4 bg-[#3BA2C6] font-poppins text-white font-semibold rounded-md shadow"
                        >
                            <BiSolidShare size={20} />
                            <span>Share</span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Trust;
