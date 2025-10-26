import React, { useState } from "react";
import PointsImg from '../../assets/points.png'

const QuizeAndGame = () => {
    const [activeTab, setActiveTab] = useState("quiz");
    const [currentQuestion, setCurrentQuestion] = useState(1);

    // Questions Data
    const questionsData = {
        quiz: [
            {
                question: "What is the main purpose of prayer in most religious beliefs?",
                options: [
                    "A. To test people's memory",
                    "B. To communicate with a higher power",
                    "C. To impress others",
                    "D. To earn money",
                ],
            },
            {
                question: "Which book is the first in the Bible?",
                options: ["A. Exodus", "B. Genesis", "C. Psalms", "D. Matthew"],
            },
            {
                question: "What is the main purpose of prayer in most religious beliefs?",
                options: [
                    "A. To test people's memory",
                    "B. To communicate with a higher power",
                    "C. To impress others",
                    "D. To earn money",
                ],
            },
            {
                question: "Which book is the first in the Bible?",
                options: ["A. Exodus", "B. Genesis", "C. Psalms", "D. Matthew"],
            },
            {
                question: "What is the main purpose of prayer in most religious beliefs?",
                options: [
                    "A. To test people's memory",
                    "B. To communicate with a higher power",
                    "C. To impress others",
                    "D. To earn money",
                ],
            },
            {
                question: "Which book is the first in the Bible?",
                options: ["A. Exodus", "B. Genesis", "C. Psalms", "D. Matthew"],
            },
        ],
        verse: [
            {
                question: "Complete the verse: 'The Lord is my shepherd; I shall not ____'",
                options: ["A. Want", "B. Fear", "C. Fail", "D. Forget"],
            },
            {
                question: "Complete the verse: 'For God so loved the world that He gave His only ____'",
                options: ["A. Prophet", "B. Son", "C. Angel", "D. Disciple"],
            },
        ],
        who: [
            {
                question: "Who built the ark according to the Bible?",
                options: ["A. Moses", "B. Noah", "C. Abraham", "D. David"],
            },
            {
                question: "Who was swallowed by a great fish?",
                options: ["A. Jonah", "B. Daniel", "C. Peter", "D. Paul"],
            },
        ],
    };

    const totalQuestions = questionsData[activeTab].length;

    const nextQuestion = () => {
        if (currentQuestion < totalQuestions) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const leaderboard = [
        { name: "Annie Lopez", points: 300, img: "https://i.pravatar.cc/40?img=1" },
        { name: "Jacob Jones", points: 293, img: "https://i.pravatar.cc/40?img=2" },
        { name: "Theresa Webb", points: 290, img: "https://i.pravatar.cc/40?img=3" },
        { name: "Arlene McCoy", points: 200, img: "https://i.pravatar.cc/40?img=4" },
        { name: "Jenny Wilson", points: 100, img: "https://i.pravatar.cc/40?img=5" },
        { name: "Wade Warren", points: 80, img: "https://i.pravatar.cc/40?img=6" },
        { name: "Albert Flores", points: 70, img: "https://i.pravatar.cc/40?img=7" },
        { name: "Cody Fisher", points: 60, img: "https://i.pravatar.cc/40?img=8" },
        { name: "You", points: 60, img: "https://i.pravatar.cc/40?img=9" },
        { name: "Dianne Russell", points: 55, img: "https://i.pravatar.cc/40?img=10" },
        { name: "Richards", points: 54, img: "https://i.pravatar.cc/40?img=11" },
        { name: "Simmons", points: 54, img: "https://i.pravatar.cc/40?img=12" },
    ];

    const tabs = [
        { id: "quiz", label: "Bible quiz challenge" },
        { id: "verse", label: "Complete the verse" },
        { id: "who", label: "Who said it" },
    ];

    const currentData = questionsData[activeTab][currentQuestion - 1];

    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
            {/* Left Section */}
            <div className="flex-1 rounded-2xl">
                {/* Tabs (moved to very top) */}
                <div className="flex md:space-x-2 flex-col md:flex-row pb-4 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setCurrentQuestion(1);
                            }}
                            className={`px-4 py-2 mt-3 md:mt-0 rounded font-poppins text-sm font-medium ${activeTab === tab.id
                                ? "bg-[#3CCDF8] text-white"
                                : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>



                {/* Question Area */}
                <div className="border bg-white px-5 py-10 rounded-md">
                    {/* Progress Line */}
                    <div className="flex space-x-1 mb-6">
                        {Array.from({ length: totalQuestions }).map((_, index) => (
                            <div
                                key={index}
                                className={`h-[5px] flex-1 rounded-full ${index < currentQuestion ? "bg-[#3CCDF8]" : "bg-gray-200"
                                    }`}
                            />
                        ))}
                    </div>
                    <h2 className="text-lg font-poppins font-semibold mb-2">
                        Question {currentQuestion}
                    </h2>
                    <p className="text-black font-poppins mb-4">{currentData.question}</p>

                    <div className="space-y-2">
                        {currentData.options.map((opt, i) => (
                            <label
                                key={i}
                                className="block text-gray-600 text-sm font-poppins border rounded px-3 py-3 cursor-pointer bg-gray-100"
                            >
                                {opt}
                            </label>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between gap-5 mt-4">
                        <button
                            onClick={prevQuestion}
                            disabled={currentQuestion === 1}
                            className={`px-4 py-2 border w-full font-poppins rounded-lg ${currentQuestion === 1 ? "opacity-50 border cursor-not-allowed" : ""
                                }`}
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextQuestion}
                            disabled={currentQuestion === totalQuestions}
                            className={`px-4 py-2 bg-[#3CCDF8] w-full font-poppins text-white rounded-lg ${currentQuestion === totalQuestions
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                                }`}
                        >
                            Next
                        </button>
                    </div>
                </div>

                
                <div className="mt-6 border bg-white px-5 py-10 rounded-md pt-4">
                    <h3 className="font-semibold font-poppins mb-2">
                        Yesterday’s Daily challenge answer
                    </h3>
                    <p className="text-black text-sm font-poppins mb-4">
                        What is the main purpose of prayer in most religious beliefs?
                    </p>
                    <div className="space-y-2">
                        <div className="border text-xs bg-gray-100 md:text-sm px-3 py-2 font-poppins rounded-lg">
                            A. To test people's memory
                        </div>
                        <div className="border px-3 text-xs py-2 md:text-sm rounded-lg bg-[#90BE6D] text-white font-poppins font-semibold">
                            B. To communicate with a higher power
                        </div>
                        <div className="border font-poppins md:text-sm text-xs px-3 bg-gray-100 py-2 rounded-lg">C. To impress others</div>
                        <div className="border px-3 py-2 font-poppins md:text-sm text-xs bg-gray-100 rounded-lg">D. To earn money</div>
                    </div>
                </div>
            </div>

    
            <div className="w-full md:w-64 bg-white rounded border p-4 mt-4 md:mt-0 md:ml-4">
                <h3 className="font-semibold font-poppins mb-4">Leaderboard</h3>
                <ul className="space-y-3">
                    {leaderboard.map((user, idx) => (
                        <li
                            key={idx}
                            className={`flex items-center font-poppins justify-between text- text-xs ${user.name === "You"
                                ? "font-bold text-black"
                                : "text-gray-700"
                                }`}
                        >
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.img}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full"
                                />
                                <span>{user.name}</span>
                            </div>
                            <span className="flex font-poppins text-black text-xs font-semibold"> <img src={PointsImg} className="h-3 w-3 object-contain" alt="" /> {user.points}pts</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default QuizeAndGame;
