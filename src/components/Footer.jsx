import { motion } from 'framer-motion';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';
import { SectionWrapper } from "../hoc";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    className='mt-[-90px]'
  >
    <div className="lg:w-[100%] w-[95%] mx-auto flex flex-col">

      <div className="flex flex-col">
      <hr  className="mb-[30px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 opacity-40" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[20px] text-white cyberpunk">Rodrigo | Front End Developer</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 RYF. All rights reserved.
          </p>
          <div className="flex gap-4 ml-10">
            {socials.map((social) => (
              <a key={social.name}
                 href={social.url}
                 target='_blank'
                 rel='noreferrer '>
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-[30px] h-[30px] object-contain cursor-pointer transition ease-in-out delay-150 hover:scale-150"
                />
              </a>

            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default SectionWrapper(Footer, "")