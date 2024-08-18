import loopImage from "@/assets/images/loop.png";
import Image from "next/image";

export default function Loop() {
  return (
    <Image
      src={loopImage}
      alt="loop"
      width={100}
      height={100}
      className="animate-spin-slow"
    />
  );
}
