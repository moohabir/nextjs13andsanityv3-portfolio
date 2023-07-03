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
    <div className="text-center py-10 mb-10">
      <h1 className="text-3xl font-bold mb-5 mt.5 ">About me</h1>
      {about.map((about: any) => (
        <div key={about.id}>
          <h1>{about.title}</h1>
          {/*<Image
            src={urlForImage(about.image.asset).width(50).url()}
            alt="hhh"
      />*/}
        </div>
      ))}
    </div>
  );
}
