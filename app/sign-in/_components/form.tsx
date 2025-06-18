"use client";

import { useState } from "react";
import Button from "@/components/button";
import Loop from "@/components/loop";
import { redirect } from "next/navigation";
import signIn from "@/lib/auth/client/actions/sign-in";

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = {
        email: "darseen.dev@gmail.com",
        password: event.currentTarget.password.value,
      };
      const { error } = await signIn(data);
      if (error) window.location.reload();

      redirect("/");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-xs flex-col items-center justify-center gap-10 rounded-md bg-zinc-800/50 p-8 text-white sm:min-w-md"
    >
      <div className="flex flex-col items-center gap-2">
        <Loop width={100} height={100} />
        <span className="text-2xl font-bold">IONTRAP</span>
      </div>
      <div className="flex w-full flex-col gap-4">
        <input
          className="rounded-md border p-2"
          type="password"
          name="password"
          placeholder="Password"
          required
          autoFocus
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className={`${isLoading ? "cursor-not-allowed opacity-50" : ""} w-full`}
      >
        Sign in
      </Button>
    </form>
  );
}
