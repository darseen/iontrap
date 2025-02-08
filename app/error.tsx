"use client";

import Loop from "@/components/loop";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-8 px-4 text-center text-red-500 md:px-10 lg:px-40">
      <Loop width={100} height={100} />
      <div className="space-y-10">
        <h2 className="text-lg font-bold lg:text-xl">Something went wrong!</h2>
        <p>{error.message}</p>
        <button
          className="mt-4 rounded-lg border-zinc-400 bg-zinc-800 px-4 py-2 text-white shadow-lg transition-all hover:scale-[1.05]"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
