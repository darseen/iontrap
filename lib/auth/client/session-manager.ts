import { Session } from "../types";

type SessionUpdater = (session: Session | null) => void;

// This is the singleton object that acts as the communication channel.
// It starts with a no-op function to prevent errors if called before the provider mounts.
const sessionManager = {
  update: (session: Session | null): void => {
    // This is a placeholder. The SessionProvider will overwrite it.
    console.warn(
      "SessionProvider is not mounted yet. Session update was ignored.",
    );
  },

  // A method for the provider to register its updater function
  register: (updater: SessionUpdater): void => {
    sessionManager.update = updater;
  },

  // A method to clean up when the provider unmounts
  clear: (): void => {
    sessionManager.update = (session: Session | null) => {
      console.warn("SessionProvider is unmounted. Session update was ignored.");
    };
  },
};

export default sessionManager;
