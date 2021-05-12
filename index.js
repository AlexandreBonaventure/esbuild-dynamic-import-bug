const fs = require('fs')
const out = require('esbuild').transformSync(fs.readFileSync('src/main.js','utf8'), {
  minify: false,
  format: 'esm',
  target: [
   'edge18'
  ],
})
console.log(out)
fs.writeFileSync('out.js', out.code)