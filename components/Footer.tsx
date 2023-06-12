'use client';
//import { Facebook, GitHub, YouTube } from '@mui/icons-material';
//import { IconButton } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex justify-evenly  py-3 bg-slate-600 m-auto">
      <Link href="/">
        <h1 className="text-2xl font-bold p-4">My Portfolio</h1>
      </Link>
      {/*<div className="">
        <IconButton
          className="text-slate-100 p-4  hover:bg-slate-600 "
          href="https://www.facebook.com/moohabir"
        >
          <Facebook />
        </IconButton>
        <IconButton
          className="text-slate-100 p-4 hover:bg-slate-600  "
          href="https://github.com/moohabir"
        >
          <GitHub />
        </IconButton>
        <IconButton
          className="text-slate-100 p-4 hover:bg-slate-600 "
          href="https://www.youtube.com/channel/UCSVGSFG-iU56a5Z9Xs4PEXQ"
        >
          <YouTube />
        </IconButton>
      </div>
      <div className="p-4 text-white">&copy;Mohamed Abdille, 2023</div>*/}
    </div>
  );
}
