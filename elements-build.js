 const fs = require('fs-extra');
 const concat = require('concat');


 (async function build(){
     const files=[
         './dist/my-video-project2/runtime.js',
         './dist/my-video-project2/polyfills.js',
         './dist/my-video-project2/scripts.js',
         './dist/my-video-project2/main.js'
     ]

     await fs.ensureDir('elements')
     await concat(files,'elements/custom-player.js')
     await fs.copyFile('./dist/my-video-project2/styles.css','elements/styles.css')
     await fs.copy('./dist/my-video-project2/assets/','elements/assets/')

 })()