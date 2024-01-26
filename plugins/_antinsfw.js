const axios = require("axios");
const uploadImage = require("../lib/uploadImage");

let handler = m => m
handler.before = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat]
  let mime = (m.msg || m).mimetype || "";
  var rose = 'Rs-ReiiNtNic'
  if (chat.nsfw) {
  if (/image|webp/.test(mime)) {
    conn.chatRead(m.chat);
    let img = await m.download();
    let imageUrl = await uploadImage(img);
    try {
      let api = `https://api.itsrose.life/image/nsfwCheck?url=${encodeURIComponent(
        imageUrl
      )}&apikey=${rose}`;
      let { data } = await axios.get(api);
      let status = data.status;
      if (status) {
        let classes = data.suggestive_classes;
        let isSuggestive = false;
        for (const key in classes) {
          if (classes[key] >= 0.49) {
            isSuggestive = true;
            break;
          }
        }
        if (data.erotica >= 0.49 || data.sexual_display >= 0.49 || data.sexual_activity >= 0.49 || data.suggestive >= 0.49 || isSuggestive) {
          let user = m.sender;
          let mention = `@${user.replace(/@.+/, "")}`;
          await conn.reply(
            m.chat,
            `${mention} Terdeteksi mengirim NSFW!\n\nMaaf kamu akan saya kick!`,
            m
          );
          await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
        }
      }
    } catch (e) {
      console.log(e);
      conn.reply(m.chat, "Terjadi kesalahan!", m);
    }
  }
};
}

module.exports = handler;