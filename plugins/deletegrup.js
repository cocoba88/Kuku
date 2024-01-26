let handler = async (m, { conn, args }) => {
  const groupId = args[0]; // ID grup yang ingin dihapus pesannya
  if (!groupId) {
    return m.reply('Silakan masukkan ID grup yang ingin dihapus pesannya.');
  }

  const messages = await conn.loadMessage(groupId, 1000); // Mengambil 1000 pesan terakhir dalam grup

  const myMessages = messages.filter((msg) => msg.key.fromMe);

  for (const msg of myMessages) {
    try {
      await conn.deleteMessage(groupId, msg.key.id);
    } catch (error) {
      console.log('Gagal menghapus pesan:', error.message);
    }
  }

  m.reply('Seluruh pesan bot yang sudah terkirim dalam grup berhasil dihapus.');
};

handler.command = ['deletegroup'];
handler.tags = ['tools'];
handler.help = ['deletegroup <group_id>', 'deletegroup <ID grup>'];
handler.desc = 'Menghapus seluruh pesan bot yang sudah terkirim dalam grup tertentu.';
handler.owner = true;

module.exports = handler;
