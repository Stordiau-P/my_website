import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";
/**
 * Props for `ImageBlock`.
 */

export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock: FC<ImageBlockProps> = ({ slice }) => {
  return (
      <div className="flex justify-center items-center">
   <PrismicNextImage field={slice.primary.image} className=" flex not-prose w-full h-full my-10 md:my-14 lg:my-16 rounded-lg items-center justify-center"/>
      </div>
  );
};

export default ImageBlock;
