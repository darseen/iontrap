import sessionManager from "../session-manager";

export default async function signOut() {
  await fetch("/api/auth/sign-out", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  sessionManager.update(null);
}
