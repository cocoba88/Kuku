const { sendViralVideo, setVideoSendingStatus, getVideoSendingStatus } = require('./script2');

const NIGHT_START_HOUR = 19; // Jam 7 malam

let handler = async (m, { conn, args }) => {
  const currentHour = new Date().getHours();

  let wait = '⏳Please wait...';
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
    { text: new Date().getHours() < NIGHT_START_HOUR ? "Nanti Malam Saja" : "*BERHASIL*", timeout: 7000 }
  ];

  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });

  if (currentHour < NIGHT_START_HOUR) {
    // Hentikan proses ke script2.js jika waktu sebelum malam
    for (let i = 0; i < arr.length; i++) {
      await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key: lll.key,
          type: 14,
          editedMessage: {
            conversation: arr[i].text
          }
        }
      }, {});
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll.key,
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
module.exports = handler;
