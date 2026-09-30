import Image from "next/image";
import type { Img } from "@/content/resume";

type PortraitProps = {
  photo: Img;
};

export function Portrait({ photo }: PortraitProps) {
  return (
    <div className="portrait relative w-[112px] sm:w-[132px] lg:w-[200px]">
      <div
        className="portrait-arch absolute inset-0 bg-[var(--tint-peach)]"
        style={{ transform: "translate(10px, 10px) rotate(4deg)" }}
        aria-hidden="true"
      />
      <div
        className="portrait-arch relative overflow-hidden border-[3px] border-surface bg-surface-2 shadow-[var(--shadow-md)]"
        style={{ aspectRatio: "4 / 5" }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(min-width: 1024px) 200px, (min-width: 640px) 132px, 112px"
          quality={95}
          priority
          fetchPriority="high"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 18%" }}
        />
      </div>
    </div>
  );
}
