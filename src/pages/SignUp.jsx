import React, { useState } from "react";
import toast from "react-hot-toast";
import { registerUser } from "../api/auth";

const SignupModal = ({ isOpen, onClose, switchToSignin, onContinue }) => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    if (!isOpen) return null;

    // Password validation checks
    const validations = {
        length: password.length >= 10,
        lowercase: /[a-z]/.test(password),
        uppercase: /[A-Z]/.test(password),
        number: /\d/.test(password),
    };

    const handleRegister = async () => {
        if (!email) return toast.error("Please enter an email!");
        if (!password) return toast.error("Please enter a password!");

        try {
            const res = await registerUser(email, password);
            if (res) {
                setEmail("")
                setPassword("")
                onContinue();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="relative bg-white w-full max-w-[90%] sm:max-w-lg md:max-w-xl rounded-lg shadow-lg px-6 py-8 sm:px-16 sm:py-12 md:px-28 md:py-16">

                {/* Tabs */}
                <div className="flex justify-center mb-3 gap-3 bg-[#F4F4F4] px-2 py-[7px] rounded-md overflow-hidden w-fit mx-auto">
                    <button className="px-4 sm:px-6 py-1 font-medium rounded bg-white font-poppins text-xs sm:text-sm text-black shadow-sm">
                        Sign up
                    </button>
                    <button
                        onClick={() => {
                            onClose();
                            switchToSignin();
                        }}
                        className="px-4 sm:px-6 py-1 font-medium text-black font-poppins text-xs sm:text-sm"
                    >
                        Sign in
                    </button>
                </div>

                {/* Heading */}
                <h2 className="text-center text-sm sm:text-md text-black font-poppins font-semibold mb-6">
                    Welcome to Magnificent Life
                </h2>

                {/* Step 1 */}
                {step === 1 && (
                    <>
                        <button className="w-full flex items-center justify-center gap-2 border border-[#E6E6E6] rounded-md py-3 mb-4 bg-[#FBFBFB]">
                            <img
                                src="https://www.svgrepo.com/show/355037/google.svg"
                                alt="Google"
                                className="w-4 h-4 object-contain"
                            />
                            <span className="text-xs sm:text-sm text-black font-poppins font-medium">
                                Continue with Google
                            </span>
                        </button>

                        <div className="flex items-center mb-2">
                            <div className="flex-1 border-t" />
                            <span className="px-3 text-xs sm:text-sm text-gray-400">Or</span>
                            <div className="flex-1 border-t" />
                        </div>

                        {/* ✅ Added value and onChange */}
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border-b rounded-md text-center text-[#212121] font-poppins px-3 py-3 text-xs sm:text-sm mb-5 focus:outline-none"
                        />

                        <button
                            onClick={() => {
                                if (!email) return toast.error("Please enter your email first!");
                                setStep(2);
                            }}
                            className="w-full bg-[#3CCDF8] font-poppins text-xs sm:text-sm text-white font-semibold py-3 rounded-md"
                        >
                            Continue
                        </button>
                    </>
                )}

                {/* Step 2 */}
                {step === 2 && (
                    <>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full border-b rounded-md text-center text-[#212121] font-poppins px-3 py-3 text-xs sm:text-sm mb-3 focus:outline-none"
                        />

                        <div className="flex justify-center gap-[5px] mb-4">
                            <input
                                type="checkbox"
                                className="md:w-[10px] w-[8px] text-black"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <label className="md:text-xs text-[10px] text-black font-poppins">
                                Show password
                            </label>
                        </div>

                        <div className="grid grid-cols-2 gap-y-2 text-xs sm:text-sm text-gray-600 mb-5">
                            <span className="flex font-poppins md:text-[10px] text-[9px] sm:text-xs items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${validations.length ? "bg-[#3CCDF8]" : "bg-gray-400"}`}></span>
                                Minimum of 10 Characters
                            </span>
                            <span className="flex font-poppins md:text-[10px] text-[9px] sm:text-xs items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${validations.number ? "bg-[#3CCDF8]" : "bg-gray-400"}`}></span>
                                At least One number
                            </span>
                            <span className="flex font-poppins md:text-[10px] text-[9px] sm:text-xs items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${validations.lowercase ? "bg-[#3CCDF8]" : "bg-gray-400"}`}></span>
                                At least one lower case letter
                            </span>
                            <span className="flex font-poppins md:text-[10px] text-[9px] sm:text-xs items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${validations.uppercase ? "bg-[#3CCDF8]" : "bg-gray-400"}`}></span>
                                At least one Upper case letter
                            </span>
                        </div>

                        <button
                            onClick={handleRegister}
                            className="w-full bg-[#3CCDF8] font-poppins text-xs sm:text-sm text-white font-semibold py-3 rounded-md"
                        >
                            Create an account
                        </button>
                    </>
                )}

                {/* Footer */}
                <p className="text-[10px] sm:text-xs text-center mt-4 text-gray-400 leading-relaxed">
                    Signing up for Magnificent Life means you agree to the{" "}
                    <a href="#" className="text-black hover:underline">
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-black hover:underline">
                        Terms of Service
                    </a>
                </p>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default SignupModal
