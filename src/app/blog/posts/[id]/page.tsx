import { posts } from '@/app/lib/placeholder-data';

interface PostItemProps {
  params: { id: string };
}

export default function PostItem({ params }: PostItemProps) {
  const post = posts.find((post) => post.id === params.id);
  return (
    <>
      <h1>
        {post?.title} ({post?.id})
      </h1>
      <p>{post?.content}</p>
    </>
  );
}
