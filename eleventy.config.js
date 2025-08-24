/** @param {import("@11ty/eleventy/UserConfig").default} config */
export default async config => {
  config.setInputDirectory("src");
  config.setOutputDirectory("dist");

  // css
  config.addPassthroughCopy("src/styles");

  // img
  config.addPassthroughCopy("src/img");
};
