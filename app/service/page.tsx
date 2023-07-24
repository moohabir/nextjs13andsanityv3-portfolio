'use client';
import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import { urlForImage } from '@/lib/image';
import Image from 'next/image';
import { Chip } from '@mui/material';

const query = groq`
*[_type=="service"]{
 ...,
author->
}|order(_createAt desc)`;

type props = {
  query: string;
};

export default async function Service() {
  const services = await client.fetch(query, { cache: 'no-store' });

  return (
    <div className="text-center items-center flex justify-center gap-5 flex-col mt-10 pt-10 mb-10">
      <h1 className="font-bold text-3xl pb-2">Service</h1>
      <p className="">Here i am listing some servies i do for my clients.</p>
      <div className=" grid grid-cols-2 gap-4 md:grid-cols-1 px-4 rounded-lg place-items-center py-4 w-full">
        {services.map((service: any) => (
          <div
            key={service._id}
            className="rounded-xl bg-white w-48 "
          >
            {/*<Image
              src={urlForImage(service.image.asset._ref).url()}
              width={150}
              height={150}
              alt="hhh"
              className="rounded-full"
            />>*/}

            <h2 className="mt-2 font-bold text-xl">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
