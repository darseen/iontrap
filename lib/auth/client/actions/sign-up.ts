import { Session } from "../../types";
import sessionManager from "../session-manager";

type SignUpData = {
  email: string;
  password: string;
};

export default async function signUp(signUpData: SignUpData) {
  const result = await fetch("/api/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  });
  const { data, error } = await result.json();

  if (error) return { error, data: null };

  sessionManager.update(data.session as Session);

  return { data: { session: data.session as Session }, error: null };
}
