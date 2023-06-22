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
    title,
    body,
    _createdAt,
    mainImage{
    asset->{_ref }
  },
    "name": author->name,
    "authorImage": author->image
  }`;

  const post: Post = await client.fetch(query, { slug });

  const ptComponents = {
    block: {
      h2: ({ children }: any) => {
        return <h2 className="text-xl mb-4">{children}</h2>;
      },
      normal: ({ children }: any) => {
        return (
          <p className="text-center mb-4 max-w-prose  sm:max-w-none sm:w-full whitespace-normal break-words px-4 py-1">
            {children}
          </p>
        );
      },
    },
  };

  return (
    <div className="">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      {/*<Image
        src={urlForImage(post?.mainImage?.asset?._ref)?.url()}
        alt=""
        width={50}
        height={50}
  />*/}

      <div className="text-center flex justify-between">
        <h2>{post?.name}</h2>
        <span>
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
