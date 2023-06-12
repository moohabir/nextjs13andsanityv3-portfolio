import { client } from '@/lib/client';
import { Post } from '@/types';

type props = {
  posts: Post[];
};
export default async function BlogList({ posts }: props) {
  return (
    <div className="">
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded-xl bg-slate-500 py-4 mb-4 w-1/2 flex flex-col justify-center items-center m-auto"
        >
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post._createdAt}</p>
        </div>
      ))}
    </div>
  );
}
