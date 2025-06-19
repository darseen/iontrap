"use client";

import signOut from "@/lib/auth/client/actions/sign-out";
import { useSession } from "@/lib/auth/client/hooks/use-session";
import Link from "next/link";

export default function SignInLink() {
  const { session } = useSession();

  return (
    <>
      {!session ? (
        <Link href="/sign-in" className="underline">
          Sign in
        </Link>
      ) : (
        <button className="underline hover:cursor-pointer" onClick={signOut}>
          Logout
        </button>
      )}
    </>
  );
}
