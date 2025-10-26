import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

// Images for stats
import AnalysisOne from '../../../assets/anafirst.png';
import AnalysisSecond from '../../../assets/anasec.png';
import AnalysisThird from '../../../assets/anath.png';
import AnalysisFour from '../../../assets/anafor.png';

const stats = [
    { id: 1, label: "Prayer request posted", value: 23, image: AnalysisOne },
    { id: 2, label: "Prayer request answered", value: 20, image: AnalysisSecond },
    { id: 3, label: "Events attended", value: 123, image: AnalysisThird },
    { id: 4, label: "Challenge completed", value: 18, image: AnalysisFour },
];

// Dummy data for charts
const challengeData = [
    { date: "Sept 10", score: 250 },
    { date: "Sept 11", score: 100 },
    { date: "Sept 12", score: 160 },
    { date: "Sept 13", score: 60 },
    { date: "Sept 14", score: 200 },
    { date: "Sept 15", score: 150 },
    { date: "Sept 16", score: 180 },
    { date: "Sept 17", score: 220 },
    { date: "Sept 18", score: 130 },
    { date: "Sept 19", score: 170 },
    { date: "Sept 20", score: 140 },
];

const timeSpentData = [
    { date: "Sept 10", time: 4.5 },
    { date: "Sept 11", time: 1 },
    { date: "Sept 12", time: 2.5 },
    { date: "Sept 13", time: 0.5 },
    { date: "Sept 14", time: 3.8 },
    { date: "Sept 15", time: 3.5 },
    { date: "Sept 16", time: 4 },
    { date: "Sept 17", time: 2.2 },
    { date: "Sept 18", time: 3.9 },
    { date: "Sept 19", time: 1.8 },
    { date: "Sept 20", time: 4.2 },
];

const Analysis = () => {
    return (
        <div className="p-3 md:p-6 space-y-6">
            {/* Top Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border rounded-md p-3 md:p-4 flex flex-col items-start text-start shadow-sm"
                    >
                        <div className="flex items-center gap-1 mb-2">
                            <img
                                src={item.image}
                                alt={item.label}
                                className="w-4 h-4 object-contain"
                            />
                            <p className="text-gray-600 font-poppins text-xs font-medium truncate">
                                {item.label}
                            </p>
                        </div>
                        <h3 className="text-xl md:text-2xl font-poppins font-bold">{item.value}</h3>
                    </div>
                ))}
            </div>

            {/* Challenge Scores */}
            <div className="bg-white border rounded-md shadow-sm p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-3 md:gap-0">
                    {/* Left Side */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
                        <h2 className="font-semibold text-lg md:text-2xl font-poppins">Summary</h2>
                        <select className="text-sm bg-blue-50 focus:outline-none rounded-md px-2 py-2 text-[#3CCDF8] w-auto truncate">
                            <option>Who said challenge</option>
                            <option>All challenges</option>
                        </select>
                    </div>
                    {/* Right Side */}
                    <select className="border text-sm rounded-md px-2 py-2 text-gray-600 w-auto max-w-[150px] truncate">
                        <option>Last 14 Days</option>
                        <option>Last 30 Days</option>
                    </select>
                </div>
                <div className="w-full h-60 md:h-72 -mx-3 md:mx-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={challengeData} barSize={10} margin={{ left: 0, right: 0 }}>
                            <CartesianGrid horizontal={false} vertical={false} />
                        
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                className="hidden md:block"
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                className="hidden md:block"
                            />
                            <Tooltip
                                cursor={false}
                                contentStyle={{
                                    backgroundColor: "white",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "6px",
                                }}
                            />
                            <Bar dataKey="score" fill="#61A131" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Time Spent */}
            <div className="bg-white border rounded-md shadow-sm p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-3 md:gap-0">
                    {/* Left Side */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
                        <h2 className="font-semibold text-lg md:text-2xl font-poppins">Summary</h2>
                        <select className="text-sm bg-blue-50 focus:outline-none rounded-md px-5 py-2 text-[#3CCDF8] w-auto max-w-[150px] truncate">
                            <option>Reading</option>
                            <option>Prayer</option>
                            <option>Study</option>
                        </select>
                    </div>
                    {/* Right Side */}
                    <select className="border text-sm rounded-md px-2 py-2 text-gray-600 w-auto max-w-[150px] truncate">
                        <option>Last 14 Days</option>
                        <option>Last 30 Days</option>
                    </select>
                </div>
                <div className="w-full h-60 md:h-72 -mx-3 md:mx-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={timeSpentData} barSize={10} margin={{ left: 0, right: 0 }}>
                            <CartesianGrid horizontal={false} vertical={false} />
                        
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                className="hidden md:block"
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                className="hidden md:block"
                            />
                            <Tooltip
                                cursor={false}
                                contentStyle={{
                                    backgroundColor: "white",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "6px",
                                }}
                            />
                            <Bar dataKey="time" fill="#61A131" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
