import { useState } from "react";
import { motion } from "motion/react";
import { Link as ScrollLink } from "react-scroll";
import { useMediaQuery } from "react-responsive";

function Navigation({setIsOpen, isOpen}) {
const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <ul className="nav-ul">
      <li className="nav-li cursor-pointer">
        <ScrollLink
          className="nav-link"
          to="home"
          smooth={true}
          duration={500}
          offset={-70} // Adjust based on navbar height
          spy={true}
          onClick={() => {isMobile ? setIsOpen(!isOpen) : console.log("not happened")}}
        >
          Home
        </ScrollLink>
      </li>
      <li className="nav-li cursor-pointer">
        <ScrollLink
          className="nav-link"
          to="about"
          smooth={true}
          duration={500}
          offset={-50}
          spy={true}
          onClick={() => {isMobile ? setIsOpen(!isOpen) : console.log("not happened")}}
        >
          About
        </ScrollLink>
      </li>
      <li className="nav-li cursor-pointer">
        <ScrollLink
          className="nav-link"
          to="project"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => {isMobile ? setIsOpen(!isOpen) : console.log("not happened")}}
        >
          Work
        </ScrollLink>
      </li>
      <li className="nav-li cursor-pointer">
        <ScrollLink
          className="nav-link"
          to="experience"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => {isMobile ? setIsOpen(!isOpen) : console.log("not happened")}}
        >
          Experience
        </ScrollLink>
      </li>
      <li className="nav-li cursor-pointer">
        <ScrollLink
          className="nav-link"
          to="contact"
          smooth={true}
          duration={500}
          offset={-20}
          spy={true}
          onClick={() => {isMobile ? setIsOpen(!isOpen) : console.log("not happened")}}
        >
          Contact
        </ScrollLink>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-screen backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors duration-200 text-neutral-400 hover:text-[#F75F17]"
          >
            Talha Tahir
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation setIsOpen={setIsOpen} isOpen={isOpen}/>
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation setIsOpen={setIsOpen} isOpen={isOpen}/>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
