"use client";

import { useEffect, useState, createContext, ReactNode } from "react";
import { Session } from "../types";
import sessionManager from "./session-manager";

interface Props {
  children: ReactNode;
}

type SessionContextType = {
  session: Session | null;
  pending: boolean;
};

export const SessionContext = createContext<SessionContextType | null>(null);

export default function SessionProvider({ children }: Props) {
  const [session, setSession] = useState<Session | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  useEffect(() => {
    // Register the component's setSession function with the manager
    sessionManager.register(setSession);

    const getSession = async () => {
      setPending(true);
      try {
        const result = await fetch("/api/auth/get-session", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { data, error } = await result.json();

        if (!error) setSession(data.session as Session);
      } finally {
        setPending(false);
      }
    };
    getSession();

    // When the provider unmounts, clean up the manager reference
    return () => {
      sessionManager.clear();
    };
  }, []);

  return (
    <SessionContext.Provider value={{ session, pending }}>
      {children}
    </SessionContext.Provider>
  );
}
