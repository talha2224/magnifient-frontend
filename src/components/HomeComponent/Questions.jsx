// Question.jsx
import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import explorImg from "../../assets/explor.png";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I create a personalized Bible reading plan?",
    answer:
      "To create a personalized reading plan, simply sign up or log in, go to the 'Plans' tab, and select 'Create My Plan.' You can choose your preferred duration, topics, and Bible version.",
  },
  {
    question: "Can I access devotionals offline?",
    answer:
      "Yes! You can download devotionals in advance and access them offline anytime.",
  },
  {
    question: "Is the platform completely free to use?",
    answer:
      "Absolutely. The platform is free to use, with optional premium features for enhanced experiences.",
  },
  {
    question: "How do I submit a prayer request?",
    answer:
      "Navigate to the 'Prayer' tab, click on 'Submit Request,' and share your prayer with the community.",
  },
  {
    question: "What languages does the app support?",
    answer:
      "Currently, the app supports multiple languages including English, Spanish, and French, with more being added soon.",
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

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold font-poppins text-gray-900 mb-4">
            Got Questions? We’ve Got Answers
          </h2>
          <p className="text-[#212121B2] font-poppins md:pr-[280px] mb-6">
            Explore common questions about using the platform and growing your faith
          </p>
          <button className="bg-[#45BDE0] text-white font-poppins font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2 shadow-md">
            Read More Answers{" "}
            <img src={explorImg} className="h-4 w-4 object-contain" alt="" />
          </button>
        </motion.div>

        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              {/* Question Row */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium font-poppins text-sm md:text-md text-gray-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <X className="text-gray-600 size-5" />
                ) : (
                  <Plus className="text-gray-600 size-5" />
                )}
              </div>

              {/* Answer (show only if open) */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="p-4 pt-0 text-gray-600 text-sm"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Question;
