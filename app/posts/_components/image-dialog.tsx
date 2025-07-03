"use client";

import { RefObject } from "react";
import Button from "@/components/button";
import Image from "next/image";

interface Props {
  dialogRef: RefObject<HTMLDialogElement | null>;
  imagePath: string;
}

export default function ImageDialog({ imagePath, dialogRef }: Props) {
  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-0 h-screen max-h-none w-screen max-w-none bg-black/50 p-0 backdrop-blur"
    >
      <section className="flex h-full w-full flex-col items-center justify-center gap-2 p-5">
        <div className="max-w-4xl">
          <Image
            src={imagePath}
            alt="image preview"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-auto object-contain"
            quality={100}
          />
        </div>

        <Button
          onClick={() => dialogRef.current?.close()}
          className="w-full max-w-4xl"
        >
          Close
        </Button>
      </section>
    </dialog>
  );
}
