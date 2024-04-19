import  Tilt  from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { useState} from 'react';

const ProjectCard = ({index, name, description, tags, image, source_code_link, live_link,}) => {
  return (
    <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
     <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        perspective={800}
        transitionSpeed={2500}
        tiltEasing="ease-in-out"
        scale={1.04}
        glareEnable={true}
        glareMaxOpacity={0.25}
        glareColor="blue"
        glarePosition="all"
        glareBorderRadius="20px"
        className="green-pink-gradient p-[1px] rounded-2xl sm:w-[360px] w-full">
        <div className="bg-black border-[16px] border-black rounded-[20px]">
       <div className="relative w-full h-[230px]">
         <img 
         loading="lazy"
         src={image} 
         alt={name}
         className="w-full h-full object-cover rounded-2xl cursor-pointer" 
         onClick={() => window.open(live_link, "_blank")}
         />
       </div>

       <div className="relative mt-5">
         <div className="absolute top-[-25px] right-[-10px] flex justify-end m-3 card-img_hover">
          <div
          onClick={() => window.open(source_code_link, '_blank')} 
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img 
            src={github} 
            alt="source code"
            className="w-2/3 h-2/3 object-contain" />
          </div>
         </div>
        <h3 className="text-white font-bold text-[24px] max-[420px]:text-[20px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
       </div>

       <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
       </div>
       </div>
     </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [show, setShow] = useState('hidden');

  const loadMore = () => {
    setShow('false')
    setVisibleProjects(visibleProjects + 3);
  };
  
  return (
    <>
    <motion.section
        variants={staggerContainer()}
        initial={show}
        whileInView="show"
        viewport={{ once: true, amount: 0.08}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
      <span className="hash-span" id="works">
          &nbsp;
      </span>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} cyberpunk mb-10`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-secondary text-[19px] max-w-3xl leading-[30px]"
        >
          Here are some of the projects I’ve worked on that showcase my skills and experience. 
          For each project, I’ve provided brief descriptions and links to code repositories and live demos. 
        </motion.p>
      </div>
      <div className="mt-10 flex flex-wrap gap-7">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            index={index}
          />
        ))}
      </div>
       <div className="w-full p-4 flex justify-center">
      {visibleProjects < projects.length && (
        <button onClick={loadMore} 
        className="cyberpunk2077 active:translate-y-0.5"
        >
          Load More_
        </button>
      )}

       </div>
      </motion.section>
    </>
  );
};

export default Works;

