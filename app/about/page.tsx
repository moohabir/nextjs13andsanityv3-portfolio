//import BlogList from '../components/BlogList';
import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import BlogList from '../../components/BlogList';
import Image from 'next/image';
import { urlForImage } from '@/lib/image';

const query = groq`
*[_type=="about"]{
 ...,
author->
}|order(_createAt desc)`;

type props = {
  query: string;
};

export default async function About() {
  const about = await client.fetch(query);

  return (
    <div className=" flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold mb-5 mt.5 ">About me</h1>
      {about.map((about: any) => (
        <div
          key={about.id}
          className="flex justify-center gap-20 md:flex-col"
        >
          <h1>{about.title}</h1>
          <Image
            src={urlForImage(about.image.asset._ref).url()}
            width={500}
            height={500}
            alt="hhh"
          />
        </div>
      ))}
    </div>
  );
}
