import { Session } from "../../types";
import sessionManager from "../session-manager";

type SignInData = {
  email: string;
  password: string;
};

export default async function signIn(signInata: SignInData) {
  const result = await fetch("/api/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signInata),
  });
  const { data, error } = await result.json();

  if (error) return { error, data: null };

  sessionManager.update(data.session as Session);

  return { data: { session: data.sessiona as Session }, error: null };
}
