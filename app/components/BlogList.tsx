import { client } from '@/lib/client';

type probs = {
  post: string;
  title: string;
  id: string;
  description: string;
  createAt: string;
};
export default async function BlogList({ post }: any) {
  //const posts = await client.fetch(query);
  //console.log(posts);
  return (
    <div>
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post._createdAt}</p>
        <p>{post.blockContent}</p>
      </div>
    </div>
  );
}
