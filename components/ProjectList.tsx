import { urlForImage } from '@/lib/image';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProjectList({ project }) {
  if (!project) {
    return null; // Return null or show a loading/error state when posts is undefined
  }
  return (
    <div className="">
    
      <div className="rounded-xl bg-slate-500 py-4 mb-4 w-1/2 flex flex-col justify-center items-center m-auto md:w-1/2">
        {/*<Image
          src={urlForImage(project.mainImage.asset._ref).url()}
          alt=""
          width={500}
          height={500}
  />*/}
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.url}</p>
      </div>
    </div>
  );
}
