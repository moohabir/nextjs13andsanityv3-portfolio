'use client';
//import { Facebook, GitHub, YouTube } from '@mui/icons-material';
//import { IconButton } from '@mui/material';
import myPhoto from '../public/myphoto.jpg';
import Image from 'next/image';
function Banner() {
  return (
    <div className="flex flex-col-reverse justify-evenly text-center p-4 px-10 md:flex-row ">
      <div>
        <h2>
          Hello, i am
          <span className="font-bold 4xl text-blue-500 ml-4">
            Mohamed Abdille ,
          </span>
        </h2>
        <h2 className="text-blue-500 font-bold text-3xl">
          Frontend Web Developer
        </h2>
      </div>

      {/* <IconButton
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
  </div>*/}
      <Image
        src={myPhoto}
        alt="my profile picture here"
        width={150}
        height={150}
        className="rounded-full bg-blue-500 p-4  mx-20  "
      />
    </div>
  );
}

export default Banner;
