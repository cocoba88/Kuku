let fetch = require("node-fetch")
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !stabledif 1girls`
m.reply(wait)

//code area
try {
  let tts = await conn.getFile(`https://api.yanzbotz.my.id/api/tts/janie?query=`)
	    
conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}

//end

}
handler.help = ['stabledif <text>']
handler.tags = ['ai']
handler.command = ['disnn2','disn2']
handler.premium = false
handler.diamond = 3

module.exports = handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/