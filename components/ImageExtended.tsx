import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageExtendedProps extends ImageProps {
  fallBackSrc: string;
  className?: string;
}

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const ImageExtended = ({
  src,
  alt,
  fallBackSrc,
  width,
  height,
  objectFit = "contain",
  objectPosition = "center center",
  priority = false,
  className,
}: ImageExtendedProps) => {
  const [imageError, setImageError] = useState(false);
  return (
    <div className={className}>
      <Image
        src={
          imageError
            ? `${strapi_url}${fallBackSrc}?format=png;width=${width};height=${height}`
            : `${strapi_url}${src}?format=webp;width=${width};height=${height}`
        }
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        objectPosition={objectPosition}
        onError={() => setImageError(true)}
        priority={priority}
      ></Image>
    </div>
  );
};

export default ImageExtended;
