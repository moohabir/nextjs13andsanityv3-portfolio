import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import BlogList from '../../components/BlogList';

const query = groq`
*[_type=="post"]{
 ...,
author->
}|order(_createAt desc)`;

export default async function Blog() {
  const posts = await client.fetch(query);

  return (
    <div className="text-center ">
      <h1 className="text-3xl font-bold mb-5 mt.5">My blog posts</h1>

      <div>
        {/* @ts-expect-error Async Server Component */}
        <BlogList posts={posts} />
      </div>
    </div>
  );
}
