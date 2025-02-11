/** @type {import("prettier").Config} */
export default {
  plugins: [
    // format .astro files
    "prettier-plugin-astro"
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      // this hack lets you format svg files (see. https://github.com/prettier/prettier/issues/5322#issuecomment-1276302630)
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
  ],
};
