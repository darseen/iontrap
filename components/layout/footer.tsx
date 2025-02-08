import React from "react";

export default function Footer() {
  return (
    <footer className="z-50 mt-40 flex h-16 w-full items-center justify-center rounded-md border-t border-gray-300/5 px-2 backdrop-blur">
      <span className="text-sm">
        DESOLATE {new Date().getFullYear()} © No Rights Reserved.
      </span>
    </footer>
  );
}
