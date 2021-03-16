import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true. </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography ideas that you have. We Have
          professionals with amizing skills !
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          src={home1}
          variants={photoAnimation}
          initial='hidden'
          animate='show'
          alt='cameraMan'
        />
      </Image>
      <Wave></Wave>
    </About>
  );
};
//styled Components

export default AboutSection;
