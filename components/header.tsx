import Loop from "./loop";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full rounded-md border-b border-gray-300/5 backdrop-blur">
      <div className="flex items-center justify-between gap-2 px-4 py-2">
        <Loop />
        <h1 className="text-2xl font-bold text-white">DESOLATE</h1>
      </div>
    </header>
  );
}
