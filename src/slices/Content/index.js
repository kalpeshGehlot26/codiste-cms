import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param {ContentProps}
 */
const Content = ({ slice }) => {
  return <PrismicRichText className="my-4" field={slice.primary.content} />;
};

export default Content;
