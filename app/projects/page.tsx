import { groq } from 'next-sanity';
import { client } from '@/lib/client';
//import Image from 'next/image';

const query = groq`
*[_type=="project"]{
 ...,
author->
}|order(_createAt desc)`;

//type props = {
//query: string;
//};

export default async function Projects() {
  //{cache:"force-cache"} or {cache:"no-store"}
  const projects = await client.fetch(query, { cache: 'no-store' });
  return (
    <div className="text-center py-10 ">
      <h1 className="text-center text-3xl font-bold p-4">My Projects</h1>
      <div className="grid grid-cols-1  md:grid-cols-2">
        {projects.map((project: any) => (
          <div
            key={project.id}
            className="rounded-xl bg-slate-500 py-4 mb-4 w-full md:w-1/2 flex flex-col justify-center items-center m-auto "
          >
            {/*<Image
            src={project.img}
            alt={project.title}
      />*/}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
