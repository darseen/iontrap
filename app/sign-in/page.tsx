import { Metadata } from "next";
import SignInForm from "./_components/form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In page",
};

export default function Page() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-10">
      <SignInForm />
    </main>
  );
}
