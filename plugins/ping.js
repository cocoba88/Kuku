const { create, decryptMedia } = require('@open-wa/wa-automate');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let handler = async (m) => {
  const conn = await create();
  let progressMessage = await conn.sendMessage(m.chat, 'Memproses...', 'conversation');

  let progress = 0;
  let total = 10;
  let emoji = '🔵';

  for (let i = 0; i <= total; i++) {
    let progressText = `${emoji.repeat(progress)}${'⚪️'.repeat(total - progress)}`;
    let percentage = Math.floor((progress / total) * 100);

    let message = `Progress: ${progressText} ${percentage}%`;
    await conn.sendMessage(m.chat, message, 'conversation', { quoted: progressMessage });

    progress++;

    // Tambahkan jeda waktu agar animasi berjalan dengan mulus
    await sleep(1000);
  }

  // Selesai, tambahkan pesan selesai
  await conn.sendMessage(m.chat, 'Proses selesai!', 'conversation');
};

handler.command = ['bar'];
handler.tags = ['tools'];
module.exports = handler;
