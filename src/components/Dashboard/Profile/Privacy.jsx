import React, { useState } from "react";

const Privacy = () => {
    const [screenCaptureProtection, setScreenCaptureProtection] = useState(true);

    return (
        <div className="w-full">
            <div className="py-4 border-b px-4">
                <h2 className="text-lg md:text-xl font-semibold font-poppins">
                    Privacy and security
                </h2>
            </div>

        
            <div className="border-b py-4 mx-4">
                <h3 className="text-base font-poppins font-medium text-gray-800">
                    Blocked users list
                </h3>
                <p className="md:text-sm text-xs font-poppins text-gray-500">
                    Get notified when your saved events are about to start.
                </p>
            </div>

    
            <div className="border-b py-4 mx-4">
                <h3 className="text-base font-poppins font-medium text-gray-800">
                    Who can message or invite you
                </h3>
                <p className="md:text-sm text-xs font-poppins text-gray-500">
                    Be the first to join streams when your favorite creators go live.
                </p>
            </div>

            
            <div className="border-b py-4 mx-4">
                <h3 className="text-base font-poppins font-medium text-gray-800">
                    Two-factor authentication (2FA)
                </h3>
                <p className="md:text-sm text-xs text-gray-500 font-poppins">
                    Get notified when creators you follow schedule events or go live.
                </p>
            </div>

    
            <div className="border-b py-4 mx-4">
                <h3 className="text-base font-poppins font-medium text-gray-800">
                    Login activity history
                </h3>
                <p className="md:text-sm text-xs text-gray-500 font-poppins">
                    Get notified of unusual logins or changes to your account.
                </p>
            </div>

        
            <div className="flex items-center justify-between py-4 px-4">
                <div>
                    <h3 className="text-base font-medium font-poppins text-gray-800">
                        Screen capture protection
                    </h3>
                    <p className="md:text-sm text-xs text-gray-500 font-poppins">
                        Block screenshots and screen recordings during your live streams and
                        events
                    </p>
                </div>
                <button
                    onClick={() =>
                        setScreenCaptureProtection(!screenCaptureProtection)
                    }
                    className={`md:w-11 w-[60px] h-6 flex items-center rounded-full p-1 transition-colors ${screenCaptureProtection ? "bg-[#3CCDF8]" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${screenCaptureProtection ? "translate-x-5" : "translate-x-0"
                            }`}
                    />
                </button>
            </div>
        </div>
    );
};

export default Privacy;
