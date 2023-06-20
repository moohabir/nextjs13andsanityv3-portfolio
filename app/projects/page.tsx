'use client';
import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/lib/image';
import { motion } from 'framer-motion';

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
    <div className="text-center">
      <h1 className="font-bold text-3xl pb-10 ">My Projects</h1>
      <div className="grid grid-cols-2 gap-10  md:grid-cols-1 md:gap-10 px-4 ">
        {projects.map((project: any) => (
          <motion.div
            key={project.id}
            className="rounded-xl bg-slate-500 py-4  "
            whileHover={hoverAnimation}
          >
            <Image
              src={urlForImage(project?.image?.asset?._ref).url()}
              alt=""
              width={500}
              height={500}
              className="over-follow-hidden rounded-sm w-full "
            />
            <h2>{project.title}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
