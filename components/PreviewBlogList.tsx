import Blog from '@/app/blog/page';
import BlogList from './BlogList';
import { usePreview } from '@/lib/sanity.preview';

type probs = {
  query: string;
};

function PreviewBlogList({ query }: probs) {
  const posts = usePreview(null, query);
  console.log('Loading posts...');
  return;

  //<Blog posts={posts} />;
}

export default PreviewBlogList;
