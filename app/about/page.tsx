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
  const abouts = await client.fetch(query);

  return (
    <div className="text-center items-center flex flex-col mt-10 pt-10 ">
      <h1 className="font-bold text-3xl">About me</h1>

      <div className=" px-4  py-4 mx-20">
        {abouts.map((about: any) => (
          <div
            key={about._id}
            className=" gap-5  flex md:flex-col-reverse justify-center m-auto items-center "
          >
            <div
              className="rounded-full  p-4 "
              style={{ position: 'relative', width: '250px', height: '250px' }}
            >
              <Image
                src={urlForImage(about.image.asset._ref).url()}
                alt="my profile picture here"
                layout="fill"
                objectFit="cover"
                className="rounded-full lg:px-10"
              />
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="font-bold ">{about.title}</h2>
              <p className="text-sm">{about.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
