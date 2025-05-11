import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
export default function Posts() {
  return (
    <>
      <h1 className='font-bold text-green-800'>Posts</h1>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </>
  );
}
