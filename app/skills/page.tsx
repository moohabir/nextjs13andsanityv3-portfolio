//import BlogList from '../components/BlogList';
import { groq } from 'next-sanity';
import { client } from '@/lib/client';

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
    <div className="text-center pb-10  ">
      <h1 className="font-bold text-3xl pb-10">My Skills</h1>
      <div className=" grid grid-cols-2  md:grid-cols-4 ">
        {skills.map((skill: any) => (
          <div
            key={skill.id}
            className="rounded-xl bg-slate-500 py-4 mb-4 w-1/2 m-auto "
          >
            <div className="bg-slate-500 ">
              <h2>{skill.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
