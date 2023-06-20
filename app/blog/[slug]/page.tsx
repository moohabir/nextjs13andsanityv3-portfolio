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
    title,
    body,
    "name": author->name,
    "authorImage": author->image
  }`;

  const post: Post = await client.fetch(query, { slug });

  return (
    <div>
      {/*<Image
        src={urlForImage(post.mainImage?.asset?._ref).url()}
        alt=""
        width={500}
        height={500}
  />*/}
      <div className="">
        <h2>{post.title}</h2>
        <h2>{post?.name}</h2>
      </div>
      <div className="">
        <PortableText
          value={post.body}
          //components={/* optional object of custom components to use */}
          serializers={{
            h1: (props) => (
              <h1
                style={{ color: 'red' }}
                {...props}
              />
            ),
            h2: (props) => (
              <h1
                style={{ color: 'red' }}
                {...props}
              />
            ),
            p: (props) => (
              <h1
                style={{ color: 'blue' }}
                {...props}
              />
            ),
            li: ({ children }) => (
              <li className="special-list-item">{children}</li>
            ),
            //someCustomType: YourComponent,
          }}
        />
      </div>
    </div>
  );
}
