import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = ({ onShowImageModal }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-tertiary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            &lt; De-CodeDarshil / &gt;
          </p>
        </Link>

        <ul className='list-none hidden lg:flex flex-row items-center gap-10'>
          {navLinks.map((nav, index) => (
            <li key={index} 
                className={`${nav.specialClass ? nav.specialClass : "text-secondary hover:text-white"} text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  if (nav.title === "Resume") {
                    onShowImageModal();
                  }
                }}>
              {nav.icon ? (
                <a href={nav.url} target="_blank" rel="noopener noreferrer">
                  <img src={nav.icon} alt={nav.title} className="nav-icon" />
                </a>
              ) : nav.title === "Resume" ? (
                <span>{nav.title}</span>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className={`${active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    if (nav.title === "Resume") {
                      onShowImageModal();
                    } else if (nav.title === "LinkedIn") {
                      // Prevent the default action for LinkedIn to handle it here
                      window.open(nav.url, "_blank");
                    } else {
                      setActive(nav.title);
                    }
                  }}
                >
                  {/* For LinkedIn, render just the text but as an <a> tag for mobile */}
                  {nav.title === "LinkedIn" ? (
                    <a href={nav.url} target="_blank" rel="noopener noreferrer" className="block text-secondary hover:text-white">{nav.title}</a>
                  ) : nav.title === "Resume" ? (
                    // For Resume, render the text without link or button styling
                    <span>{nav.title}</span>
                  ) : (
                    // For all other links, keep as is
                    <a href={nav.title !== "Resume" ? `#${nav.id}` : "#"}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;