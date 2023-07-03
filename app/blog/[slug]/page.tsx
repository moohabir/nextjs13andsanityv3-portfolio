import { client } from '@/lib/client';
import { urlForImage } from '@/lib/image';
import { Post } from '@/types';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export default async function SingleBlog({ params: { slug } }: Props) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    author->
  }
   `;

  const post: Post = await client.fetch(query, { slug });

  const ptComponents = {
    block: {
      h2: ({ children }: any) => {
        return <h2 className="text-2xl mb-4 pr-96 ">{children}</h2>;
      },
      normal: ({ children }: any) => {
        return (
          <p className="text-center m-auto mb-4 max-w-prose  sm:max-w-none sm:w-full whitespace-normal break-words px-4 py-1 ">
            {children}
          </p>
        );
      },
    },
  };

  return (
    <div className="text-center items-center p-10 ">
      <h1 className="text-4xl font-bold pb-10 ">{post.title}</h1>
      <div className="w-full h-full rounded-md ">
        <Image
          src={urlForImage(post.mainImage).url()}
          alt=""
          width={500}
          height={500}
          className=" sm:h-48 object-cover object-center mx-auto px-10"
        />
      </div>

      <div className="text-center flex justify-center gap-20 pb-10">
        <h2 className="text-sm">{post.author.name}</h2>
        <span className="px-10 text-sm">
          {new Date(post._createdAt).toLocaleDateString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>
      <div className="">
        <PortableText
          value={post.body}
          //className="prose"
          components={ptComponents}
        />
      </div>
    </div>
  );
}
