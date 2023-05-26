/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      displayName: true,
      // Setting this will override the default for all environments.
      ssr: true,
      // Enabled by default in development, disabled in production to reduce file size,
      fileName: true,
      // Enabled by default, disabled in production to reduce noise in the DOM.
      topLevelImportPaths: [],
      // Empty by default, this is a list which will be populated with prefixes once you use them.
      meaninglessFileNames: ["index"],
      // Defaults to ["index"], this is a list which will be populated with files once they are transformed.
      cssProp: true,
      // Enabled by default, this is a list which will be populated with tag names once you use them in conjunction with the "as" prop.
      namespace: "",
      // Empty by default, this is a list which will be populated with tag names once you use them.
      minify: false,
      // Not supported yet.
      transpileTemplateLiterals: false,
      // Not supported yet.
      pure: false,
      // Not supported yet.
    },
  },
}


module.exports = nextConfig
