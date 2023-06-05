import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import Image from 'next/image';

const query = groq`
*[_type=="project"]{
 ...,
author->
}|order(_createAt desc)`;

//type props = {
//query: string;
//};

export default async function Projects() {
  const projects = await client.fetch(query);
  return (
    <div className="text-center">
      Projects page
      {projects.map((project: any) => (
        <div key={project.id}>
          <Image
            src={project.img}
            alt={project.title}
          />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>{project._createdAt}</p>
        </div>
      ))}
    </div>
  );
}
