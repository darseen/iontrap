import createPost from "@/actions/posts/create";
import validateSlug from "@/actions/posts/validate-slug";
import Button from "@/components/button";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { error } = await validateSlug(slug);

  if (error) return notFound();

  return (
    <main className="flex h-screen flex-col items-center justify-center p-10">
      <div className="flex max-w-xl flex-col rounded-lg bg-zinc-800 p-10 md:min-w-xl">
        <h1 className="mx-auto text-3xl font-bold">Post</h1>

        <form action={createPost} className="flex flex-col gap-5">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              type="text"
              className="rounded-lg border border-zinc-500 bg-transparent/50 py-1"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              className="rounded-lg border border-zinc-500 bg-transparent/50"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="image">Image:</label>
            <input
              id="image"
              name="image"
              type="file"
              className="rounded-lg border border-zinc-500 bg-transparent/50 p-2"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </main>
  );
}
