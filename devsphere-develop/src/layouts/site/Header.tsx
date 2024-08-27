import React, { useState } from "react";
import csxLogo from "@src/assets/logos/logo.png";
import LanguageToggle from "@src/components/LanguageSwitcher";
import LngLink from "@src/components/LngLink";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css";


export default function Header() {
  const [openIndex, setOpenIndex] = useState(null);

  const menuItems = [
    {
      label: "Business",
      href: "#",
      subItems: [
        { label: "Business Overview", href: "#" },
        { label: "Capital Market IT Service", href: "#" },
        { label: "Financial Investment Company IT Service", href: "#" },
        { label: "IT Infrastructure Service", href: "#" },
        { label: "Financial Information Service", href: "#" },
        { label: "Blockchain Service", href: "#" },
        { label: "New Business", href: "#" },
      ],
    },
    {
      label: "Media Room",
      href: "#",
      subItems: [
        { label: "CI Introduction", href: "#" },
        { label: "Brochure", href: "#" },
        { label: "PR Movie Clip", href: "#" },
        { label: "At a Glance", href: "#" },
      ],
    },
    {
      label: "About Us",
      href: "#",
      subItems: [
        { label: "Company Information", href: "#" },
        { label: "Organization Chart", href: "#" },
        { label: "Sitemap", href: "#" },
      ],
    },
    {
      label: "Contact",
      href: "#",
      subItems: [
        { label: "Customer Center", href: "#" },
        { label: "Location & Contact", href: "#" },
      ],
    },
  ];

  const start = (
    <LngLink to={"/"}>
      <img
        alt="logo"
        className="mr-2"
        style={{
          width: "210px",
          height: "55px",
          fontSize: "14px",
          padding: "0.5rem 1rem",
        }}
        src={csxLogo}
      />
    </LngLink>
  );

  const end = (
    <div className="items-center ">
      <LanguageToggle />
    </div>
  );

  return (
    <div className="sticky top-0 shadow-md bg-white z-50">
      <div className="w-full p-4 flex justify-between">
        {start}
        {end}
      </div>
      <div className="w-full mt-2">
        <div className="flex justify-end pr-36 py-4">
          <ul className="flex space-x-20 bg-white w-auto px-10">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative mr-6"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <a
                  href={item.href}
                  className="font-bold text-orange-500 hover:text-blue-600 whitespace-nowrap"
                >
                  {item.label}
                </a>
                <AnimatePresence>
                  {openIndex === index && item.subItems && (
                    <motion.ul
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute transform -translate-x-1/2 top-12 bg-white text-black border-t border-gray-300"
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.href}
                            className="block px-4 py-2 text-neutral-600 hover:text-orange-500 whitespace-nowrap relative"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
