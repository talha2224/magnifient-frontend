import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import TotalFirst from "../../../assets/total.png";
import TotalSecond from "../../../assets/totalsecond.png";
import TotalLast from "../../../assets/totallast.png";

function DevoutionalHistory() {
    const [status, setStatus] = useState("All status");

    const donations = [
        {
            id: 1,
            date: "June 29, 2025",
            amount: "$1,000",
            method: "Card",
            reason: "New Church Audio System",
            status: "Completed",
        },
        {
            id: 2,
            date: "June 29, 2025",
            amount: "$1,000",
            method: "Card",
            reason: "New Church Audio System",
            status: "Pending",
        },
        {
            id: 3,
            date: "June 29, 2025",
            amount: "$1,000",
            method: "Card",
            reason: "New Church Audio System",
            status: "Completed",
        },
        {
            id: 4,
            date: "June 29, 2025",
            amount: "$1,000",
            method: "Card",
            reason: "New Church Audio System",
            status: "Completed",
        },
    ];

    const statusColors = {
        Completed: "bg-[#E1F3E3] text-[#468218]",
        Pending: "bg-[#EEEFD8] text-[#BE7807]",
    };

    return (
        <div className="bg-white rounded-lg w-full">
            {/* Header */}
            <div className="border-b py-4 px-4">
                <h2 className="text-base md:text-lg font-semibold font-poppins">
                    Donations history
                </h2>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 pt-5 px-4 gap-4 mb-6">
                <div className="border shadow-md rounded-lg p-4 md:p-5 flex flex-col items-start">
                    <div className="flex items-center gap-2 text-blue-500">
                        <img src={TotalFirst} className="h-5 w-5 object-contain" alt="" />
                        <p className="text-sm text-gray-500 font-poppins font-medium">
                            Total donations made
                        </p>
                    </div>
                    <p className="text-xl md:text-3xl font-bold font-poppins mt-2">200</p>
                </div>

                <div className="border shadow-md rounded-lg p-4 md:p-5 flex flex-col items-start">
                    <div className="flex items-center gap-2 text-blue-500">
                        <img src={TotalSecond} className="h-5 w-5 object-contain" alt="" />
                        <p className="text-sm text-gray-500 font-medium font-poppins">
                            Total amount
                        </p>
                    </div>
                    <p className="text-xl md:text-3xl font-poppins font-semibold mt-2">
                        $4,200,00
                    </p>
                </div>

                <div className="border shadow-md rounded-lg p-4 md:p-5 flex flex-col items-start">
                    <div className="flex items-center gap-2 text-blue-500">
                        <img src={TotalLast} className="h-5 w-5 object-contain" alt="" />
                        <p className="text-sm text-gray-500 font-medium font-poppins">
                            Last donation date
                        </p>
                    </div>
                    <p className="text-xl md:text-3xl font-poppins font-semibold mt-2">
                        1 month ago
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col px-4 sm:flex-row gap-3 mb-6">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute top-3 md:top-[14px] left-3 text-black w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search orders"
                        className="w-full pl-10 pr-4 font-poppins py-2.5 md:py-3 border rounded-lg text-sm focus:ring-1 focus:ring-[#3CCDF8] focus:outline-none"
                    />
                </div>

                {/* Status Filter */}
                <div className="relative w-full sm:w-[200px]">
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="appearance-none w-full border font-poppins rounded-lg py-2.5 md:py-3 px-4 pr-8 text-sm focus:ring-1 focus:ring-[#3CCDF8] focus:outline-none"
                    >
                        <option className="w-full">All status</option>
                        <option className="w-full">Completed</option>
                        <option className="w-full">Pending</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 md:top-3.5 text-gray-500 w-4 h-4 pointer-events-none" />
                </div>

                {/* Reset Button */}
                <button className="bg-[#3CCDF8] text-white px-4 md:px-6 font-poppins py-2.5 md:py-3 rounded-lg text-sm transition">
                    Reset filter
                </button>
            </div>

    
            <div className="px-4 pb-4 flex justify-center">
                <div className="w-full">
                    <table className="md:w-full text-xs md:text-sm text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 font-medium">
                                <th className="px-4 font-poppins py-3 whitespace-nowrap">Date</th>
                                <th className="px-4 font-poppins py-3 whitespace-nowrap">Amount</th>
                                <th className="px-4 font-poppins py-3 whitespace-nowrap">Method</th>
                                <th className="px-4 font-poppins py-3 whitespace-nowrap">Campaign reasons</th>
                                <th className="px-4 font-poppins py-3 whitespace-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations.map((donation) => (
                                <tr key={donation.id} className="border-b">
                                    <td className="px-4 text-gray-500 font-poppins py-4 whitespace-nowrap">
                                        {donation.date}
                                    </td>
                                    <td className="px-4 text-gray-500 font-poppins py-4 whitespace-nowrap">
                                        {donation.amount}
                                    </td>
                                    <td className="px-4 text-gray-500 font-poppins py-4 whitespace-nowrap">
                                        {donation.method}
                                    </td>
                                    <td className="px-4 text-gray-500 font-poppins py-4">
                                        {donation.reason}
                                    </td>
                                    <td className="px-4 text-gray-500 font-poppins py-4 whitespace-nowrap">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[donation.status]}`}
                                        >
                                            {donation.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DevoutionalHistory;
