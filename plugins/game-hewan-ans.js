const similarity = require('similarity');

const threshold = 0.72;

async function before(m, { conn }) {
  let id = m.chat;
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hhew/i.test(m.quoted.text) || /.*hhew/i.test(m.text))
    return true;

  conn.tebakhewan = conn.tebakhewan ? conn.tebakhewan : {};
  if (!(id in conn.tebakhewan))
    return conn.reply(m.chat, 'Soal itu telah berakhir', m);

  if (m.quoted.id == conn.tebakhewan[id][0].id) {
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text);
    if (isSurrender) {
      clearTimeout(conn.tebakhewan[id][3]);
      delete conn.tebakhewan[id];
      return conn.reply(m.chat, '*Yah Menyerah :( !*', m);
    }
    
    let json = JSON.parse(JSON.stringify(conn.tebakhewan[id][1]));

    if (m.text.toLowerCase() == json.title.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += conn.tebakhewan[id][2];
      conn.reply(m.chat, `✅ *Benar!*\n+${conn.tebakhewan[id][2]} XP`, m);
      clearTimeout(conn.tebakhewan[id][3]);
      delete conn.tebakhewan[id];
    } else if (similarity(m.text.toLowerCase(), json.title.toLowerCase().trim()) >= threshold)
      conn.reply(m.chat, `❗ *Dikit Lagi!*`, m);
    else
      conn.reply(m.chat, `❌ *Salah!*`, m);
  }
  return true;
}

module.exports = { before };
