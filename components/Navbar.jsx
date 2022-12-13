"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  //outer nav element
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 fixed top-0 z-10`}
  >
    {/*container div for gradient side of navbar */}
    <div className="absolute w-[50%] inset-0 gradient-01" />
    {/*outer nav container. split all elements using justify between, gap-8 */}
    <div className={`${styles.innerWidth} `}>
      {/* <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      /> */}
      <a href="#about">
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          SHAD'S METAVERSUS
        </h2>
      </a>
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
    </div>
  </motion.nav>
);

export default Navbar;
