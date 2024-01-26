const { Tt2 } = require('api-dylux');
let fetch = require('node-fetch');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://tiktok.com/xxx`
  let thumb = 'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg'
  let json = await Tt2(text)
  await m.reply(wait)
await conn.sendFile(m.chat, json.data.audio, 'tiktok.mp3', null, m, true, {
type: 'audioMessage',  
ptt: false, seconds: 0,contextInfo: { 
forwardingScore: fsizedoc, 
externalAdReply: { 
body: null, 
containsAutoReply: true, 
mediaType: 1, 
mediaUrl: sig, 
renderLargerThumbnail: true, 
showAdAttribution: true, 
sourceId: null, 
sourceType: 'PDF', 
previewType: 'PDF', 
sourceUrl: null, 
thumbnail: await (await fetch(thumb)).buffer(),
 thumbnailUrl: sgc,
 title: json.author }}})
}
handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tikaudio|tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
module.exports = handler

/*
  * Dann Official
  * ig: @dannalwaysalone
*/