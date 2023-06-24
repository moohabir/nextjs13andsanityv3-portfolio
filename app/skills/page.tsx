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
    <div className="text-center items-center ">
      <h1 className="font-bold text-3xl pb-4">My Skills</h1>
      <p className="pb-10">
        Here i am listing some skills and tools i am familir with.
      </p>
      <div className=" grid grid-cols-6 gap-10 md:grid-cols-2 px-4 bg-slate-200  rounded-lg place-items-center py-4">
        {skills.map((skill: any) => (
          <div
            key={skill.id}
            className="rounded-xl bg-white py-4 w-48 p-6 md:p-6 "
          >
            <Image
              src={urlForImage(skill?.image?.asset?._ref).url()}
              alt=""
              width={50}
              height={50}
              className="rounded-sm w-full h-32 sm:h-48 object-cover overflow-hidden md:px-0 "
            />

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
