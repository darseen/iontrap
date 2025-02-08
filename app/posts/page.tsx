import { getPosts } from "@/actions/posts/get";
import Card from "@/app/posts/_components/card";

export default async function Page() {
  const { data, error } = await getPosts();

  if (error) throw new Error(error.message);

  return (
    <section className="grid w-full grid-cols-1 gap-20">
      {data.posts.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </section>
  );
}
