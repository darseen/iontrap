"use client";

import { useRef } from "react";
import { Post as PostType } from "@/db/schema";
import Image from "next/image";
import ImageDialog from "./image-dialog";

interface Props {
  post: PostType;
}

export default function Post({ post }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div
        onClick={() => dialogRef.current?.showModal()}
        className="flex flex-col rounded-lg bg-zinc-800/30 text-white shadow-xl transition-all duration-500 hover:cursor-pointer hover:shadow-zinc-500"
      >
        <div className="rounded-lg">
          <Image
            src={post.imagePath}
            alt={post.title}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-auto object-contain"
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

      <ImageDialog dialogRef={dialogRef} imagePath={post.imagePath} />
    </>
  );
}
