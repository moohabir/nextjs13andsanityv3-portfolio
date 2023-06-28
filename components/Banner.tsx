'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import myPhoto from '../public/myphoto.jpg';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';

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
    <div className="text-center items-center flex justify-center gap-30 md:flex-col-reverse mb-10 pt-10 ">
      <div
        //className="flex-1"
        style={{ minHeight: '150px' }}
      >
        <h2 className="font-bold text-2xl">Hello, I am</h2>
        <AnimatePresence>
          {!showSecondHeading ? (
            <motion.h2
              key="firstHeading"
              className="font-bold text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent "
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
        <p className="text-black text-sm">I am javascript </p>

        <Link href="/contacts">
          <button className="text-white bg-black hover:bg-slate-600 w-48 rounded-full mt-5 py-4 ">
            Hire me
          </button>
        </Link>
      </div>

      <div
        className="rounded-full  p-4 "
        style={{ position: 'relative', width: '250px', height: '250px' }}
      >
        <Image
          src={myPhoto}
          alt="my profile picture here"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
