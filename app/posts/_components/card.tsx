import { Post } from "@/types";
import Image from "next/image";

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  return (
    <div className="grid grid-cols-3 rounded-lg bg-transparent/30 text-white shadow-lg">
      <div className="col-span-2 overflow-hidden rounded-lg">
        <Image
          src={post.image}
          alt={post.title}
          width={10000}
          height={30000}
          className="object-cover transition-all duration-300 hover:scale-110"
          quality={100}
          priority
        />
      </div>

      <div className="flex flex-col items-start justify-between p-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="text-sm">{post.description}</p>
      </div>

      <div>
        <p className="text-sm">
          {new Date(post.created_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
