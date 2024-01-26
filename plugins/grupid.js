let handler = async (m, { conn }) => {
  if (!m.isGroup) {
    return m.reply('Perintah ini hanya bisa digunakan di dalam grup.');
  }

  const groupId = m.chat;
  m.reply(`Group ID dari grup ini adalah: ${groupId}`);
};

handler.command = ['groupid'];
handler.tags = ['tools'];
handler.help = ['groupid'];
handler.desc = 'Menampilkan group ID dari grup aktif.';
module.exports = handler;
