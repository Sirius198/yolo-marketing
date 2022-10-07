const fs = require('fs');
const resolveConfig = require('tailwindcss/resolveConfig');
const prettier = require('prettier');
const path = require('path');
// bring in the Tailwind config
const tailwindConfig = require('../../tailwind.config.js');

const { theme } = resolveConfig(tailwindConfig);
const themeStr = JSON.stringify(theme);
const js = `
const tailwindTheme  = ${themeStr};

export default tailwindTheme
`;

try {
  // write the file to src/theme.js after
  // having prettier format the string for us
  fs.writeFileSync(
    path.resolve(process.cwd(), './src/theme/_generated/tailwindTheme.ts'),
    prettier.format(js, { parser: 'babel' }),
    'utf-8'
  );
} catch (err: any) {
  // uh-oh, something happened here!
  console.log(err.message);
}

export {};
