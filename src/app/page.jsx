"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </motion.div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Crafting Digital Experiences, Designing Tomorrow.
          </motion.h1>
          {/* DESC */}
          <motion.p
            className="md:text-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </motion.p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center">
            <Link href="/portfolio">
              <motion.button
                className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
                transition={{ duration: 0.3 }}
              >
                View My Work
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="p-4 rounded-lg ring-1 ring-black"
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.3 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;