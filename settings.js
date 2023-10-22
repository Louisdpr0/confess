const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["6289653898291"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Saya adalah Zenibot, Ketik .list untuk menampilkan semua menu .
`
}
}
