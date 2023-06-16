#! /usr/bin/env node

const { fontawesomeSubset } = require("fontawesome-subset");

// Add the required glyphs here without the `fa-` prefix.
// Look them up with `rg 'fa-' ./**/*.html
subset = { brands: ["github"] };
output_dir = `${__dirname}/../assets/vendor/fontawesome/webfonts`;
options = { targetFormats: ["sfnt", "woff2"] }; // sfnt is ttf

fontawesomeSubset(subset, output_dir, options);
