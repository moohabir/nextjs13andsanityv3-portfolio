'use client';
import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import { urlForImage } from '@/lib/image';
import Image from 'next/image';
import { Chip } from '@mui/material';

const query = groq`
*[_type=="skills"]{
 ...,
author->
}|order(_createAt desc)`;

type props = {
  query: string;
};

export default async function Skills() {
  const skills = await client.fetch(query);

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl pb-10">My Skills</h1>
      <div className=" grid grid-cols-3 gap-10 md:grid-cols-2 px-4">
        {skills.map((skill: any) => (
          <div
            key={skill.id}
            className="rounded-xl bg-slate-600 p-4"
          >
            <div className="">
              {/*<Image
                src={urlForImage(skill?.image?.asset?._ref).url()}
                alt=""
                width={50}
                height={50}
        />*/}
            </div>
            <h2 className="">{skill.title}</h2>
            {/*{skill.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}*/}
          </div>
        ))}
      </div>
    </div>
  );
}
