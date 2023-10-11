/**
 * @typedef {import("@prismicio/client").Content.BlogSlice} BlogSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogSlice>} BlogProps
 * @param {BlogProps}
 */
const Blog = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog (variation: {slice.variation}) Slices
    </section>
  );
};

export default Blog;
