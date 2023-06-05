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
    <div className="text-center">
      Blog page
      {skills.map((skill: any) => (
        <div key={skill.id}>
          <h2>{skill.title}</h2>
          <p>{skill.description}</p>
          <p>{skill._createdAt}</p>
          <p>{skill.blockContent}</p>
        </div>
      ))}
    </div>
  );
}
