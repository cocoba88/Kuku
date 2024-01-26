let handler = async (m, { conn }) => {
  let pesan1 = `
 ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀█░▌
▐░▌       ▐░▌
▐░▌       ▐░▌
▐░▌       ▐░▌
▐░▌       ▐░▌
▐░▌       ▐░▌
▐░█▄▄▄▄▄▄▄█░▌
▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀ 
`;

  let pesan2 = `
 ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀▀▀ 
▐░▌          
▐░▌ ▄▄▄▄▄▄▄▄ 
▐░▌▐░░░░░░░░▌
▐░▌ ▀▀▀▀▀▀█░▌
▐░▌       ▐░▌
▐░█▄▄▄▄▄▄▄█░▌
▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀ 
`;

  // Mengirim pesan menggunakan conn.reply
  conn.reply(m.chat, pesan1, m);
  await sleep(1000);

  conn.reply(m.chat, pesan2, m);
};

handler.command = ['pesan'];
handler.tags = ['tools'];
module.exports = handler;

// Fungsi sleep untuk memberikan jeda waktu
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
