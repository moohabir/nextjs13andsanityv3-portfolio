'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import myPhoto from '../public/myphoto.jpg';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
  return (
    <div className="text-center items-center flex justify-evenly gap-10 md:flex-col-reverse mb-10 pt-10 ">
      <div
        //className="flex-1"
        style={{ width: '250px' }}
      >
        <h2 className="">Hello, I am </h2>
        <span className="font-bold text-xl">Mohamed Abdille,</span>
        <div className="flex ">
          <h2 className='className="font-bold text-3xl text-black mr-2'>a</h2>
          <TypeAnimation
            sequence={['Frontend Web Developer', 2000, 'Freelancer', 2000]}
            speed={50}
            //wrapper="span"
            repeat={Infinity}
            //className="font-bold text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent "
            className="font-bold text-3xl text-black "
          />
        </div>

        <p className="text-black text-sm">
          Developing websites and solving client problems are my favorites.
        </p>

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
