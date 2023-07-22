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
    <div className="text-center items-center flex justify-center gap-5 flex-col mt-10 pt-10 mb-10 mx-20 px-10">
      <h1 className="font-bold text-3xl pb-2">About me</h1>

      <div className=" px-4 rounded-lg  py-4 ">
        {abouts.map((about: any) => (
          <div
            key={about._id}
            className="rounded-xl bg-white  flex gap-10 md:flex-col-reverse justify-center m-auto items-center px-20 mx-20 md:px-0 md:mx-0"
          >
            <Image
              src={urlForImage(about.image.asset._ref).url()}
              width={350}
              height={350}
              alt="hhh"
              objectFit="cover"
              className="rounded-full "
            />

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
