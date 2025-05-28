"use client";

import useSession from "@/hooks/useSession";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function LoginLink() {
  const supabase = createClient();
  const { session } = useSession();

  return (
    <>
      {!session ? (
        <Link href="/login" className="underline">
          Login
        </Link>
      ) : (
        <button
          className="underline hover:cursor-pointer"
          onClick={() => {
            supabase.auth.signOut();
            redirect("/");
          }}
        >
          Logout
        </button>
      )}
    </>
  );
}
