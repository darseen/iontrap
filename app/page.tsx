import LinkButton from "@/components/link-button";
import Loop from "@/components/loop";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="mt-20 flex flex-col items-center gap-8">
        <Loop width={100} height={100} className="mt-10" />
        <div className="flex items-center gap-2 text-white">
          <span className="text-base">Disconnected.</span>
          <span className="text-base">Lost.</span>
          <span className="text-base">Irrelevant.</span>
        </div>

        <div className="flex items-center gap-4">
          <LinkButton href="/posts" className="">
            Posts
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
