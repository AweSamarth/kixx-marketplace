import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ServiceCard } from "./ServiceCard";
const services = [
  {
    title: "Web Developer",
    icon: "/backend.png",
  },
  {
    title: "React Native Developer",
    icon: "/backend.png",
  },
  {
    title: "Backend Developer",
    icon: "/backend.png",
  },
  {
    title: "Content Creator",
    icon: "/backend.png",
  },
];

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Introduction</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[70 rem] leading-[30px]"
      >
        The Blockchain-Authenticated Sneaker Marketplace is an innovative
        cutting-edge platform designed to revolutionize the buying and selling
        of sneakers. This marketplace provides a secure and transparent
        ecosystem for both established brands and individual resellers to
        showcase and sell their sneakers with the assurance of authenticity
        backed by blockchain verification.
      </motion.p>

      <div className="mt-20 flex flex-row flex-wrap gap-10">
        {services.map((service, index) => {
          console.log(service); // Log the service object

          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
