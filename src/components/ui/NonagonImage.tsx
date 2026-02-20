import Image from "next/image";

interface NonagonImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function NonagonImage({
  src,
  alt,
  className = "",
}: NonagonImageProps) {
  return (
    <div className={`relative aspect-square overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-neutral-100"
        style={{
          // Regular Nonagon polygon points
          clipPath:
            "polygon(50% 0%, 82.1% 11.7%, 98.5% 41.3%, 93.3% 75%, 67.1% 97%, 32.9% 97%, 6.7% 75%, 1.5% 41.3%, 17.9% 11.7%)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, 480px"
          priority
        />
      </div>
    </div>
  );
}
