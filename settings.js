const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["6289653898291"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Saya adalah ZeniBot, Silahkan balas dengan menu dibawah _(contoh: ${prepix}sticker)_

- Owner 
- sticker
- toimage
- ai
- tiktok
- confess
`
}
}