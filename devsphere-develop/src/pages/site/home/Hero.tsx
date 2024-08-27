import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import heroPic from "@src/assets/logos/hero.jpg"; // Adjust the path as necessary
import p1 from "@src/assets/pics/p1.jpg";
import p2 from "@src/assets/pics/p2.jpg";
import p3 from "@src/assets/pics/p3.jpg";
import p4 from "@src/assets/pics/p4.jpg";
import p5 from "@src/assets/pics/p5.jpg";
import p6 from "@src/assets/pics/p6.jpg";
import { useTranslation } from "react-i18next";
import { fadeIn } from "@src/layouts/site/variants"; // Ensure fadeIn is correctly defined

const ContentToggle = () => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation("site");

  // Function to toggle the view
  const toggleView = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[80vh] flex justify-center items-center overflow-hidden">
        <img
          alt="heroPic"
          className="w-full h-full object-cover absolute"
          src={heroPic}
        />
        <motion.div 
          variants={fadeIn("right", 0.5)} // Ensure fadeIn is correctly defined
          initial="hidden"
          animate="show" // Changed from whileInView to animate for initial animation
          viewport={{ once: false, amount: 0.7 }}
          className="bg-[url('../@src/assets/logos/hero.jpg')] absolute inset-0 flex flex-col justify-center items-start text-start p-4">
          <h2 className="text-4xl font-bold text-white mb-4 pr-3">
            {t("Data Platform Company, Koscom")}
          </h2>
          <p className="text-lg text-gray-300 py-5">
            {t("Koscom has been a partner for ")}
            <br />
            {t("success in Financial IT over the 40 years.")}
            <br />
            <br />
            {t("Koscom will become a data platform company")}
            <br />
            {t(" in light of the Fourth Industrial Revolution.")}
          </p>
        </motion.div>
      </div>
      <div className="bg-gray-100 text-center py-20">
        <h2 className="text-4xl font-semibold">Business</h2>
      </div>
      {/* Content Toggle Section */}
      <motion.div 
      variants={fadeIn("up", 1)} // Ensure fadeIn is correctly defined
      initial="hidden"
      animate="show" // Changed from whileInView to animate for initial animation
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-grow space-x-4 pl-4 pr-4 pt-8">
        {!showMore ? (
          <>
            {/* Initial Content */}
            <div className="w-1/3">
              <img
                alt="picture1"
                className="w-full h-80 object-cover"
                src={p1}
              />
              <h3 className="text-xl font-semibold py-3">
                Capital Market IT Service
              </h3>
              <p>
                Koscom provides progressive IT services for the securities,
                bonds, futures, options, and commodities markets. With this
                effort, Koscom contributes to ...
              </p>
            </div>
            <div className="w-1/3">
              <img
                alt="picture2"
                className="w-full h-80 object-cover"
                src={p2}
              />
              <h3 className="text-xl font-semibold py-3">
                Financial Investment Company IT Service
              </h3>
              <p>
                As an exclusive IT service provider for Korea’s financial
                investment sector, Koscom provides comprehensive outsourcing
                solutions including ...
              </p>
            </div>
            <div className="w-1/3">
              <img
                alt="picture3"
                className="w-full h-80 object-cover"
                src={p3}
              />
              <h2 className="text-xl font-semibold py-3">
                IT Infrastructure Service
              </h2>
              <p>
                Koscom contributes to the efficiency of IT infrastructure in the
                financial industry by providing ...
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Additional Content */}
            <div
              className={`w-1/3 transition-transform transform duration-300 ease-out ${
                showMore ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <img
                alt="picture4"
                className="w-full h-80 object-cover"
                src={p4}
              />
              <h3 className="text-xl font-semibold py-3">
                Additional Service 1
              </h3>
              <p>
                Details about additional service 1. Koscom offers advanced
                solutions ...
              </p>
            </div>
            <div
              className={`w-1/3 transition-transform transform duration-300 ease-out ${
                showMore ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <img
                alt="picture5"
                className="w-full h-80 object-cover"
                src={p5}
              />
              <h3 className="text-xl font-semibold py-3">
                Additional Service 2
              </h3>
              <p>
                Details about additional service 2. Comprehensive support
                provided ...
              </p>
            </div>
            <div
              className={`w-1/3 transition-transform transform duration-300 ease-out ${
                showMore ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <img
                alt="picture6"
                className="w-full h-80 object-cover"
                src={p6}
              />
              <h2 className="text-xl font-semibold py-3">
                Additional Service 3
              </h2>
              <p>
                Details about additional service 3. Innovating with the latest
                technology ...
              </p>
            </div>
          </>
        )}
      </motion.div>
      <div className="text-center py-4">
        <span
          onClick={toggleView}
          className="cursor-pointer text-blue-500 font-semibold flex items-center justify-end pr-10" // Changed cursor from default to pointer
        >
          <span>{showMore ? "Continue" : "Back"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${
              showMore ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ContentToggle;
