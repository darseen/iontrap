import loopImage from "@/assets/images/loop.png";
import Image from "next/image";

interface Props {
  width: number;
  height: number;
  className?: string;
}

export default function Loop({ width, height, className }: Props) {
  return (
    <Image
      src={loopImage}
      alt="loop"
      width={width}
      height={height}
      className={`animate-spin-slow ${className}`}
    />
  );
}
