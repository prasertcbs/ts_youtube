// https://www.npmjs.com/package/image-downloader

// npm install --save image-downloader
// npm install @types/node --save-dev
const download = require('image-downloader');
const options = {
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    dest: './'                  
  }
   
  async function downloadIMG() {
    try {
      const { filename, image } = await download.image(options)
      console.log(filename) // => /path/to/dest/image.jpg 
    } catch (e) {
      console.error(e)
    }
  }
   
  downloadIMG()