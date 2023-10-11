// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogDocumentDataSlicesSlice =
  | BlogSlice
  | AlternateGrid2Slice
  | CallToAction2Slice;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * img field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.img
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img: prismic.ImageField<never>;

  /**
   * title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *Blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * embedded field in *Blog*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.embedded
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  embedded: prismic.EmbedField;

  /**
   * group field in *Blog*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.group
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  group: prismic.DateField;

  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

export type AllDocumentTypes = BlogDocument;

/**
 * Primary content in *AlternateGrid → Primary*
 */
export interface AlternateGridSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: alternate_grid.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *AlternateGrid → Items*
 */
export interface AlternateGridSliceDefaultItem {
  /**
   * title field in *AlternateGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for AlternateGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AlternateGridSliceDefaultPrimary>,
  Simplify<AlternateGridSliceDefaultItem>
>;

/**
 * Primary content in *AlternateGrid → Primary*
 */
export interface AlternateGridSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: alternate_grid.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *AlternateGrid → Items*
 */
export interface AlternateGridSliceImageRightItem {
  /**
   * title field in *AlternateGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Image Right variation for AlternateGrid Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<AlternateGridSliceImageRightPrimary>,
  Simplify<AlternateGridSliceImageRightItem>
>;

/**
 * Slice variation for *AlternateGrid*
 */
type AlternateGridSliceVariation =
  | AlternateGridSliceDefault
  | AlternateGridSliceImageRight;

/**
 * AlternateGrid Shared Slice
 *
 * - **API ID**: `alternate_grid`
 * - **Description**: AlternateGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSlice = prismic.SharedSlice<
  "alternate_grid",
  AlternateGridSliceVariation
>;

/**
 * Primary content in *AlternateGrid2 → Primary*
 */
export interface AlternateGrid2SliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *AlternateGrid2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: alternate_grid_2.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *AlternateGrid2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *AlternateGrid2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *AlternateGrid2 → Items*
 */
export interface AlternateGrid2SliceDefaultItem {
  /**
   * title field in *AlternateGrid2 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid2 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for AlternateGrid2 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGrid2SliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AlternateGrid2SliceDefaultPrimary>,
  Simplify<AlternateGrid2SliceDefaultItem>
>;

/**
 * Primary content in *AlternateGrid2 → Primary*
 */
export interface AlternateGrid2SliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *AlternateGrid2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: alternate_grid_2.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *AlternateGrid2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *AlternateGrid2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *AlternateGrid2 → Items*
 */
export interface AlternateGrid2SliceImageRightItem {
  /**
   * title field in *AlternateGrid2 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid2 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid_2.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Image Right variation for AlternateGrid2 Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGrid2SliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<AlternateGrid2SliceImageRightPrimary>,
  Simplify<AlternateGrid2SliceImageRightItem>
>;

/**
 * Slice variation for *AlternateGrid2*
 */
type AlternateGrid2SliceVariation =
  | AlternateGrid2SliceDefault
  | AlternateGrid2SliceImageRight;

/**
 * AlternateGrid2 Shared Slice
 *
 * - **API ID**: `alternate_grid_2`
 * - **Description**: AlternateGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGrid2Slice = prismic.SharedSlice<
  "alternate_grid_2",
  AlternateGrid2SliceVariation
>;

/**
 * Primary content in *Blog → Primary*
 */
export interface BlogSliceDefaultPrimary {
  /**
   * content field in *Blog → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * image field in *Blog → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Blog → Items*
 */
export interface BlogSliceDefaultItem {
  /**
   * content field in *Blog → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * title field in *Blog → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * image field in *Blog → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Blog Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogSliceDefaultPrimary>,
  Simplify<BlogSliceDefaultItem>
>;

/**
 * Slice variation for *Blog*
 */
type BlogSliceVariation = BlogSliceDefault;

/**
 * Blog Shared Slice
 *
 * - **API ID**: `blog`
 * - **Description**: Blog
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogSlice = prismic.SharedSlice<"blog", BlogSliceVariation>;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * buttonLink field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * buttonLabel field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceAlignLeftPrimary {
  /**
   * Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * buttonLink field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * buttonLabel field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * AlignLeft variation for CallToAction Slice
 *
 * - **API ID**: `alignLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceAlignLeft = prismic.SharedSliceVariation<
  "alignLeft",
  Simplify<CallToActionSliceAlignLeftPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation =
  | CallToActionSliceDefault
  | CallToActionSliceAlignLeft;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Primary content in *CallToAction2 → Primary*
 */
export interface CallToAction2SliceDefaultPrimary {
  /**
   * Image field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_2.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_2.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_2.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * buttonLink field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action_2.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * buttonLabel field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for CTA button
   * - **API ID Path**: call_to_action_2.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction2 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToAction2SliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToAction2SliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *CallToAction2 → Primary*
 */
export interface CallToAction2SliceAlignLeftPrimary {
  /**
   * Image field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_2.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_2.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_2.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * buttonLink field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action_2.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * buttonLabel field in *CallToAction2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for CTA button
   * - **API ID Path**: call_to_action_2.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * AlignLeft variation for CallToAction2 Slice
 *
 * - **API ID**: `alignLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToAction2SliceAlignLeft = prismic.SharedSliceVariation<
  "alignLeft",
  Simplify<CallToAction2SliceAlignLeftPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction2*
 */
type CallToAction2SliceVariation =
  | CallToAction2SliceDefault
  | CallToAction2SliceAlignLeft;

/**
 * CallToAction2 Shared Slice
 *
 * - **API ID**: `call_to_action_2`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToAction2Slice = prismic.SharedSlice<
  "call_to_action_2",
  CallToAction2SliceVariation
>;

/**
 * Primary content in *CustomerLogos → Primary*
 */
export interface CustomerLogosSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  eyebrowHeadline: prismic.RichTextField;

  /**
   * callToActionLabel field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Primary content in *CustomerLogos → Items*
 */
export interface CustomerLogosSliceDefaultItem {
  /**
   * image field in *CustomerLogos → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * link field in *CustomerLogos → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for CustomerLogos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CustomerLogosSliceDefaultPrimary>,
  Simplify<CustomerLogosSliceDefaultItem>
>;

/**
 * Slice variation for *CustomerLogos*
 */
type CustomerLogosSliceVariation = CustomerLogosSliceDefault;

/**
 * CustomerLogos Shared Slice
 *
 * - **API ID**: `customer_logos`
 * - **Description**: CustomerLogos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSlice = prismic.SharedSlice<
  "customer_logos",
  CustomerLogosSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      AllDocumentTypes,
      AlternateGridSlice,
      AlternateGridSliceDefaultPrimary,
      AlternateGridSliceDefaultItem,
      AlternateGridSliceImageRightPrimary,
      AlternateGridSliceImageRightItem,
      AlternateGridSliceVariation,
      AlternateGridSliceDefault,
      AlternateGridSliceImageRight,
      AlternateGrid2Slice,
      AlternateGrid2SliceDefaultPrimary,
      AlternateGrid2SliceDefaultItem,
      AlternateGrid2SliceImageRightPrimary,
      AlternateGrid2SliceImageRightItem,
      AlternateGrid2SliceVariation,
      AlternateGrid2SliceDefault,
      AlternateGrid2SliceImageRight,
      BlogSlice,
      BlogSliceDefaultPrimary,
      BlogSliceDefaultItem,
      BlogSliceVariation,
      BlogSliceDefault,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceAlignLeftPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      CallToActionSliceAlignLeft,
      CallToAction2Slice,
      CallToAction2SliceDefaultPrimary,
      CallToAction2SliceAlignLeftPrimary,
      CallToAction2SliceVariation,
      CallToAction2SliceDefault,
      CallToAction2SliceAlignLeft,
      CustomerLogosSlice,
      CustomerLogosSliceDefaultPrimary,
      CustomerLogosSliceDefaultItem,
      CustomerLogosSliceVariation,
      CustomerLogosSliceDefault,
    };
  }
}
