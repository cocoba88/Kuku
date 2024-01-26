let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {

if (!text) throw `✳️ Masukkan Teks\n\nContoh: !simivoice Hai`


try {
let simiv = await conn.getFile(`https://api.yanzbotz.my.id/api/ai/simivoice?query=${text}`)

await m.reply(simiv.data)


}
catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['simivoice', 'simiv'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(simivoice|simiv)$/i

module.exports = handler