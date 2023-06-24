'use client';
import { urlForImage } from '@/lib/image';

import { Post } from '@/types';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post?: Post[]; // Add a "?" to make the posts prop optional
};

const BlogList = ({ post }: any) => {
  if (!post) {
    return null; // Return null or show a loading/error state when posts is undefined
  }

  return (
    <div className=" py-4 mb-4  border rounded-lg ">
      <Image
        src={urlForImage(post.mainImage.asset._ref).url()}
        alt=""
        width={500}
        height={500}
        className=" w-full h-32 sm:h-48 object-cover"
      />
      <div className="m-4">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm">{post.description}</p>

        <span className="text-sm">
          {new Date(post._createdAt).toLocaleDateString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>

      <Link
        href={`/blog/${post.slug.current}`}
        className="text-slate-100"
      >
        <Button className="text-black">Read more</Button>
      </Link>
    </div>
  );
};

export default BlogList;
