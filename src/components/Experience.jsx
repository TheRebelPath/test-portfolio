import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { useMobile } from "../utils/useMobile";
import Tech from "./Tech";

const Experience = () => {
  
  const isMobile = useMobile();
 
  return (
  <>
    <motion.div variants={textVariant()}
    className="mb-10">
       <h2 className={`${styles.sectionHeadText} cyberpunk`}>Experience</h2>
     </motion.div>
 
    <motion.div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 overflow-hidden`}
      >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-[330px] green-pink-gradient p-[1px] rounded-[20px] "
      >
        <div 
        className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          
        <p className="mt-4 text-secondary  text-[19px] max-w-3xl leading-[30px]">
        With development, it is essential to stay updated with the latest tools and technologies. Throughout my coding journey, I have focused on the essentials (HTML, CSS, JavaScript) while also picking up tools that can further improve my skillset (React, Tailwind, etc.).
        </p>
        </div>
      </motion.div>
      { isMobile ? ( 
        false
      ) : ( 
          <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-1 flex justify-center items-center"
        >
          <Tech/>
        </motion.div>   
      )}
    </motion.div>
    </>
 )
};


export default SectionWrapper(Experience, "experience");
