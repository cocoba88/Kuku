let fetch = require("node-fetch")
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !disn janda pirang`
m.reply(wait)

//code area
try {
  let stabdif = await conn.getFile(`https://api.yanzbotz.my.id/api/text2img/disney?prompt=${text}`)
	    
conn.sendFile(m.chat, stabdif.data, 'img.jpg', `*[ IMAGE ]*\n\nPROMPT:\n${text}`, m)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}

//end

}
handler.help = ['stabledif <text>']
handler.tags = ['ai']
handler.command = ['disnn','disn']
handler.premium = false
handler.diamond = 3

module.exports = handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/