import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full"
    tiltMaxAngleX={4}
    tiltMaxAngleY={4}
    perspective={800}
    transitionSpeed={2500}
    tiltEasing="ease-in-out"
    scale={1.04}
    glareEnable={true}
    glareMaxOpacity={0.55}
    glareColor="purple"
    glarePosition="all"
    glareBorderRadius="20px"
    >
      <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
         className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
         >
          <img src={icon} alt="title" className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} cyberpunk mb-10`}>About Me</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className=" text-secondary  text-[19px] max-w-3xl leading-[30px]">
       Hi there, I'm Rodrigo, a self-taught front end web developer from Mexico. 
       I have a passion for all things technology and design, and I'm always eager to learn new skills and tools.
       Currently I'm looking for job opportunities where I can contribute, learn and grow as a developer.
      </motion.p>

      <div className="mt-20 hidden xs:flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard  key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

