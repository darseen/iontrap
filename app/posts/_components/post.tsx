import { Post as PostType } from "@/db/schema";
import Image from "next/image";

interface Props {
  post: PostType;
}

export default function Post({ post }: Props) {
  return (
    <div className="flex flex-col rounded-lg bg-zinc-800/30 text-white shadow-xl transition-all duration-500 hover:cursor-pointer hover:shadow-zinc-500">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={10000}
          height={30000}
          className="object-cover transition-all duration-500 hover:scale-110"
          quality={100}
        />
      </div>

      <div className="p-4">
        <div className="space-y-2 p-4 text-center">
          <h2 className="text-2xl font-bold underline">{post.title}</h2>
          <p className="text-sm wrap-break-word">{post.description} </p>
        </div>

        <p className="mt-6 text-sm">
          {new Date(post.createdAt).toISOString().split("T")[0]}
        </p>
      </div>
    </div>
  );
}
