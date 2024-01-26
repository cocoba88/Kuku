const { sendViralVideo, setVideoSendingStatus, getVideoSendingStatus } = require('./script2');

let handler = async (m, { conn, args }) => {
  if (args[0] && args[0].toLowerCase() === 'on') {
    setVideoSendingStatus(true);
    return m.reply('Pengiriman video telah diaktifkan.');
  }

  if (args[0] && args[0].toLowerCase() === 'off') {
    setVideoSendingStatus(false);
    return m.reply('Pengiriman video telah dinonaktifkan.');
  }

  let wait = 'Please wait...';
  const arr = [
    { text: "[░░░░░░░░░░] 0%", timeout: 1000 },
    { text: "[▓░░░░░░░░░] 10%", timeout: 1000 },
    { text: "[▓▓░░░░░░░░] 20%", timeout: 1000 },
    { text: "[▓▓▓░░░░░░░] 30%", timeout: 1000 },
    { text: "[▓▓▓▓░░░░░░] 40%", timeout: 1000 },
    { text: "[▓▓▓▓▓░░░░░] 50%", timeout: 1000 },
    { text: "[▓▓▓▓▓▓░░░░] 60%", timeout: 1000 },
    { text: "[▓▓▓▓▓▓▓░░░] 70%", timeout: 1000 },
    { text: "[▓▓▓▓▓▓▓▓░░] 80%", timeout: 1000 },
    { text: "[▓▓▓▓▓▓▓▓▓░] 90%", timeout: 1000 },
    { text: "[▓▓▓▓▓▓▓▓▓▓] 100%", timeout: 1000 },
    { text: "*BERHASIL*", timeout: 7000 }
  ];

  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });

  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i].text
        }
      }
    }, {});
  }

  // Cek apakah pengiriman video diaktifkan sebelum mengirimkan video
  if (getVideoSendingStatus()) {
    sendViralVideo(m, conn);
  }
};

handler.command = ['asupan'];
handler.tags = ['owner'];
module.exports = handler;
