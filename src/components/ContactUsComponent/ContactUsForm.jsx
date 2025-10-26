import React from "react";
import prayerImg from "../../assets/contactform.png";

const ContactForm = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch px-4 py-12 md:py-20 md:px-20 bg-white">
            {/* Left Side Image Section */}
            <div className="w-full md:w-1/3 flex">
                <div className="w-full h-full flex items-center justify-center md:h-[500px]">
                    <img
                        src={prayerImg}
                        alt="Contact illustration"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Right Side Form Section */}
            <div className="w-full md:w-1/2 flex">
                <div className="flex flex-col justify-center w-full bg-white rounded-lg shadow-md md:p-20 md:h-[500px]">
                    <h2 className="text-center text-xl mt-9 md:mt-0 md:text-2xl font-poppins font-semibold mb-6">
                        Contact Us
                    </h2>

                    <form className="space-y-4 flex-1 flex flex-col justify-between">
                        {/* Name */}
                        <div>
                            <label className="block font-poppins text-sm font-semibold text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 font-poppins text-sm bg-[#F9F9F9] py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-poppins font-semibold text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full text-sm font-poppins px-4 py-4 bg-[#F9F9F9] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                            />
                        </div>

                        {/* Comment */}
                        <div>
                            <label className="block text-md font-poppins font-semibold text-gray-700 mb-1">
                                Comment
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Let's know your thought"
                                className="w-full text-sm px-4 py-4 bg-[#F9F9F9] border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-full md:w-[40%] py-3 bg-[#45BDE0] text-white font-semibold rounded-md shadow-md hover:opacity-90 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
