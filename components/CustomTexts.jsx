'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  //paragraph motion element that holds the "typing text". Used textcontainer variant to have diff time delay on each child (aka each letter)
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {/*Create an array using the title passed into Typing Text and create a motion span element for each letter (or space) */}
    {Array.from(title).map((letter, index) => (
      //each span element gets textVariant2 which is an animation for slowly fading into view and slightly shifting up.
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
