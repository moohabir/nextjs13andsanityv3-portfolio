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
    <div className="flex flex-col">
      <div className="rounded-xl bg-slate-500 py-4 mb-4 w-1/2 flex flex-col justify-center items-center m-auto md:w-1/2">
        <Image
          src={urlForImage(post.mainImage.asset._ref).url()}
          alt=""
          width={500}
          height={500}
        />
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post._createdAt}</p>

        <Link
          href={`/blog/${post.slug.current}`}
          className="text-slate-100"
        >
          <Button className="text-slate-100">Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
