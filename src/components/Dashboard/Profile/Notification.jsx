import React, { useState } from "react";

const Notification = () => {
    const [settings, setSettings] = useState({
        pushNotifications: true,
        eventReminders: true,
        liveEventAlerts: true,
        newUploads: true,
        creatorUpdates: true,
        securityAlerts: true,
    });

    const toggleSetting = (key) => {
        setSettings({ ...settings, [key]: !settings[key] });
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="py-4 border-b px-4">
                <h2 className="text-lg md:text-xl font-semibold font-poppins">
                    Notification settings
                </h2>
            </div>

            {/* Push Notifications */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-100 rounded-lg px-4 py-3 gap-2 sm:gap-0">
                <div>
                    <h3 className="text-base font-poppins font-medium text-gray-800">
                        Push notifications
                    </h3>
                    <p className="text-xs font-poppins text-gray-500">
                        Distraction-free mode
                    </p>
                </div>
                <button
                    onClick={() => toggleSetting("pushNotifications")}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${settings.pushNotifications ? "bg-[#3CCDF8]" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${settings.pushNotifications
                                ? "translate-x-5"
                                : "translate-x-0"
                            }`}
                    />
                </button>
            </div>

            {/* Other Notification Options */}
            {[
                {
                    key: "eventReminders",
                    title: "Event Reminders",
                    desc: "Get notified when your saved events are about to start.",
                },
                {
                    key: "liveEventAlerts",
                    title: "Live Event Alerts",
                    desc: "Be the first to join streams when your favorite creators go live.",
                },
                {
                    key: "newUploads",
                    title: "New Uploads",
                    desc: "Get alerts when new videos or trailers are released.",
                },
                {
                    key: "creatorUpdates",
                    title: "Creator Updates",
                    desc: "Get notified when creators you follow schedule events or go live.",
                },
                {
                    key: "securityAlerts",
                    title: "Security Alerts",
                    desc: "Get notified of unusual logins or changes to your account.",
                },
            ].map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between px-4 border-b last:border-b-0 py-3 gap-2 sm:gap-0"
                >
                    <div>
                        <h3 className="text-base font-poppins font-medium text-gray-800">
                            {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-poppins">{item.desc}</p>
                    </div>
                    <button
                        onClick={() => toggleSetting(item.key)}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${settings[item.key] ? "bg-[#3CCDF8]" : "bg-gray-300"
                            }`}
                    >
                        <div
                            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${settings[item.key]
                                    ? "translate-x-5"
                                    : "translate-x-0"
                                }`}
                        />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Notification;
