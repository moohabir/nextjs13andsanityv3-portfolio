import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import BlogList from '../../components/BlogList';
import { Post } from '@/types';
import { Button } from '@mui/material';

const query = groq`
*[_type=="post"]{
 ...,
author->

}|order(_createAt desc)`;

type Props = {
  post?: Post[]; // Add a "?" to make the posts prop optional
};

export default async function Blog() {
  const posts = await client.fetch(query);

  return (
    <div className="text-center ">
      <h1 className="text-3xl font-bold mb-5 mt.5">My blog posts</h1>

      {posts.map((post: any) => (
        <BlogList
          key={post.title}
          post={post}
        />
      ))}
    </div>
  );
}
