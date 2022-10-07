import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';

export type StaticImport = ImageProps['src'];

export interface NcImageProps extends ImageProps {
  containerClassName?: string;
  withAspectWrapper?: boolean;
  naked?: boolean;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = '',
  withAspectWrapper,
  alt = 'nc-imgs',
  naked,
  ...restprops
}) => {
  const {
    height,
    width,
    layout = 'fill',
    // layout = "responsive",
    src = '',
    className = '',
    objectFit = 'cover',
    ...args
  } = restprops;

  const sizeProps =
    layout !== 'fill'
      ? {
          width,
          height,
        }
      : {};

  if (naked) {
    return <Image {...restprops} alt={alt} />;
  }
  return (
    <div
      className={`${
        withAspectWrapper ? '' : 'relative'
      } block h-full w-full ${containerClassName}`}
      data-nc-id="NcImage"
    >
      <Image
        alt={alt}
        src={src}
        className={`${className}`}
        // width="100vw"
        layout={layout}
        objectFit={objectFit}
        {...args}
        {...sizeProps}
      />
    </div>
  );
};

export default NcImage;
