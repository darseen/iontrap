import { getPosts } from "@/actions/posts/get";
import Card from "@/app/posts/_components/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Posts page",
};

export default async function Page() {
  const { data, error } = await getPosts();

  if (error) throw new Error(error.message);

  return (
    <main className="h-screen p-10">
      <section className="grid w-full grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        {data.posts.map((post, i) => (
          <Card key={i} post={post} />
        ))}
      </section>
    </main>
  );
}
