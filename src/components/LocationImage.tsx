import { useState } from "react";
import { getPlaceholderImage } from "../utils/placeholderImage";

interface LocationImageProps {
  src: string;
  alt: string;
  city: string;
  category: string;
  className?: string;
}

export default function LocationImage({
  src,
  alt,
  city,
  category,
  className,
}: LocationImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed ? getPlaceholderImage(city, category) : src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (!failed) setFailed(true);
      }}
    />
  );
}
