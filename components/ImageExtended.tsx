import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageExtendedProps extends ImageProps {
  fallBackSrc: string;
  className?: string;
}

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const ImageExtended = ({
  src,
  fallBackSrc,
  alt,
  width,
  height,
  layout = "intrinsic",
  objectFit = "contain",
  objectPosition = "center center",
  priority = false,
  quality = 75,
  className,
}: ImageExtendedProps) => {
  const [imageError, setImageError] = useState(false);
  return (
    <div className={className}>
      <Image
        src={
          imageError
            ? `${strapi_url}${fallBackSrc}?format=png&width=${width}&height=${height}&quality=${quality}`
            : `${strapi_url}${src}?format=webp&width=${width}&height=${height}&quality=${quality}`
        }
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        objectFit={objectFit}
        objectPosition={objectPosition}
        priority={priority}
        quality={quality}
        onError={() => setImageError(true)}
      ></Image>
    </div>
  );
};

export default ImageExtended;
