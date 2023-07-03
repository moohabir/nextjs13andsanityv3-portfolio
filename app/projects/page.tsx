'use client';
import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/lib/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Chip } from '@mui/material';

const query = groq`
*[_type=="project"]{
 ...,
author->
}|order(_createAt desc)`;

export default async function Projects() {
  const projects = await client.fetch(query, { cache: 'no-store' });

  const hoverAnimation = {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="text-center mb-10 items-center flex justify-center gap-10 flex-col pt-10">
      <h1 className="font-bold text-3xl ">My Projects</h1>
      <p className="pb-10">Browse my recently created projects</p>
      <div className="grid grid-cols-2 gap-10  md:grid-cols-1 md:gap-10   bg-slate-200 p-10 rounded-lg ">
        {projects.map((project: any) => (
          <motion.div
            key={project.id}
            className="rounded-xl bg-slate-100 p-4 "
            whileHover={hoverAnimation}
          >
            <Image
              src={urlForImage(project?.image?.asset?._ref).url()}
              alt=""
              width={500}
              height={500}
              className="over-follow-hidden rounded-sm w-full h-32 sm:h-48 object-cover object-center"
            />
            <h2 className="p-4 text-2xl font-bold">{project.title}</h2>
            <h3 className="text-sm">Tech Stacks used :</h3>
            <div className="px-2 grid grid-cols-4 gap-4 md:grid-cols-3 md:gap-4 ">
              {project.tags.map((tag: any) => (
                <Chip
                  key={tag}
                  label={tag}
                  color="primary"
                  size="small"
                  className="bg-slate-100 text-slate-500 text-sm"
                />
              ))}
            </div>
            <div className="flex gap-4 px-4 mt-4 ">
              <Link href={project?.link}>
                <button className="bg-black text-white w-32 rounded-md">
                  Demo
                </button>
              </Link>
              <Link href={project?.code}>
                <button className="bg-slate-600 text-white w-32 rounded-md">
                  Code
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
