import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param {ImageProps}
 */
const Image = ({ slice }) => {
  return (
    <div className="text-center" style={{ width: "100%" }}>
      <PrismicNextImage style={{ width: "100%", height: "auto" }} field={slice.primary.image} />
    </div>
  );
};

export default Image;
