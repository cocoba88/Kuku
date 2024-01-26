let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

// Hari Tanggal
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Owner
global.owner = [
  ['6285600423487', 'indra', 'xx@gmail.com', true]
] // Put your number here
global.mods = ['6285600423487'] // Moderator
global.prems = ['6285600423487'] // Premium
global.APIs = { // API Prefix
  // name: 'https://website'
  dannteam: 'https://api.dannteam.com',
  lann: 'https://api.betabotz.org',
  xzn : 'https://skizo.tech'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.dannteam.com': 'DannTeam',
  'https://skizo.tech': 'bebas aja om',
  'https://api.betabotz.org': 'fXgfnHZa'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Magang BOT'
  var sticker_author = 'Magang'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Database
global.version = 'Beta Testing'
global.sessionName = 'Dann'
global.gcbot = '-'
global.instagram = '-'
global.namebot = 'Magang-BOT\'s'
global.thumb = '-'
global.thumbnail = '-'
global.qris = '-'
global.nomorown = '6285600423487'

// Sosial Media
global.sig = '-'
global.syt = '-'
global.sgh = '-'
global.sgc = '-'
global.swa = '-'
global.swb = '-' // Link Discord
global.snh = 'https://telegra.ph/file/128ead3a5bf6fca904e08.jpg' // Link nhentai

// Pembayaran
global.pdana = '6285600423487'
global.povo = '6285600423487'
global.pgopay = '6285600423487'
global.shopeepay = '6285600423487'
global.linkaja = '6285600423487'
global.pulsa = '6285600423487'
global.pulsa2 = '-'
global.psaweria = '-'
global.ptrakteer = '-'
global.psbuzz = '-'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = false

// Watermark
global.packname = sticker_name
global.author = sticker_author
global.wm = 'Beta Testing'
global.wm2 = 'Magang\'s'
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.danied = '✘ 𝗘𝗥𝗥𝗢𝗥 𝟰𝟬𝟰'
global.packname = sticker_name
global.author = sticker_author
global.nameown = 'Magang'
global.wait = 'Tunggu Sebentar...'

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
