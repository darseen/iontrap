import loopImage from "@/assets/images/loop.png";
import Image from "next/image";

export default function Loop() {
  return (
    <Image
      src={loopImage}
      alt="loop"
      width={40}
      height={40}
      className="animate-spin-slow"
    />
  );
}
