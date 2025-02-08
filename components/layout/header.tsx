import Link from "next/link";
import Loop from "../loop";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full justify-between rounded-md border-b border-gray-300/5 px-2 backdrop-blur">
      <Link
        href="/"
        className="flex items-center justify-between gap-2 px-4 py-2"
      >
        <Loop width={40} height={40} />
        <h1 className="text-2xl font-bold">DESOLATE</h1>
      </Link>

      <div className="flex items-center gap-2 md:gap-4">
        <Link href="/posts" className="underline">
          Posts
        </Link>
        <Link href="/about" className="underline">
          About
        </Link>
      </div>
    </header>
  );
}
