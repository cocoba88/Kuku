
const fetch = require("node-fetch");
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {

let limit = 2500000

if (!args[0]) throw `✳️ Download File Terabox\n\n Mana ID nya?\nContoh: https://www.terabox.app/wap/share/filelist?surl=iniIDnya\nAmbil id dibelakang linknya!`
 
try {
let ling = await fetch(`https://api.yanzbotz.my.id/api/downloader/terabox?url=https://www.terabox.app/wap/share/filelist?surl=${args[0]}`)
let tb = await ling.json()

if (tb.result.size.split('Byte')[0] >= limit)
return m.reply(`
${global.htki} *Mika Bot Terabox-DL* ${global.htka}

${global.htjava} *Nama File* : ${tb.result.server_filename}
${global.htjava} *Size* : ${tb.result.size}

${global.htjava} _File melebihi batas unduhan_ *+${limit} Byte*`)

let detil = `
*Nama File:* ${tb.result.server_filename}
*Ukuran:* ${tb.result.size} Byte
*MD5:* ${tb.result.md5}

_Sedang mengirim..._
`
let detil2 = `
*Nama File:* ${tb.result.server_filename}
*Ukuran:* ${tb.result.size} Byte
*MD5:* ${tb.result.md5}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Terabox Downloader'),
body: tb.result.server_filename,
sourceUrl: (`${args[0]}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

await conn.sendFile(m.chat, tb.result.dlink, `${tb.result.server_filename}`, detil2, m)
 }
 catch {
		m.reply(`Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['terabox'].map(v => v + ' <url>')
handler.tags = ['dl','prem']
handler.command = /^((tera|box)(downloader|dl)?)$/i
handler.premium = false

module.exports = handler;


//https://api.yanzbotz.my.id/api/downloader/terabox?url=https://www.terabox.app/wap/share/filelist?surl=JwlPncQOrzuYcvyrK683Cw