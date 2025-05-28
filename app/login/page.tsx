import { login } from "@/actions/login";
import Button from "@/components/button";
import Loop from "@/components/loop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function Page() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-10">
      <form
        action={login}
        className="flex min-w-md flex-col items-center justify-center gap-10 rounded-md bg-zinc-800 p-8 text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <Loop width={100} height={100} />
          <span className="text-2xl font-bold">IONTRAP</span>
        </div>
        <div className="flex w-full flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="rounded-md border p-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="rounded-md border p-2"
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </main>
  );
}
