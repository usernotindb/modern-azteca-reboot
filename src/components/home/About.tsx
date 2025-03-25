import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import AnimatedButton from '../ui/AnimatedButton';
const About = () => {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  return;
};
export default About;