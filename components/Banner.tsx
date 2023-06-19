'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import myPhoto from '../public/myphoto.jpg';
import Image from 'next/image';

export default function Banner() {
  const [showSecondHeading, setShowSecondHeading] = useState(false);

  const firstHeadingVariants = {
    hidden: {
      opacity: 0,
      x: '-50%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      x: '-50%',
      transition: {
        duration: 2,
      },
    },
  };

  const secondHeadingVariants = {
    hidden: {
      opacity: 0,
      x: '-50%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      x: '-50%',
      transition: {
        duration: 2,
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondHeading((prev) => !prev);
    }, 3000); // Adjust the delay to match the duration of each heading animation

    return () => {
      clearTimeout(timer);
    };
  }, [showSecondHeading]);

  return (
    <div className="flex justify-evenly text-center p-4 px-10 md:flex-col-reverse">
      <div>
        <h2 className="font-bold text-2xl">Hello, I am</h2>
        <AnimatePresence>
          {!showSecondHeading ? (
            <motion.h2
              key="firstHeading"
              className="font-bold text-3xl ml-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={firstHeadingVariants}
            >
              Mohamed Abdille,
            </motion.h2>
          ) : (
            <motion.h2
              className="font-bold text-3xl ml-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial="hidden"
              animate="visible"
              variants={secondHeadingVariants}
            >
              Frontend Web Developer
            </motion.h2>
          )}
        </AnimatePresence>
      </div>

      <Image
        src={myPhoto}
        alt="my profile picture here"
        width={150}
        height={150}
        className="rounded-full bg-blue-500 p-4 mx-20"
      />
    </div>
  );
}
