let handler = async (m, { conn }) => {
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
    { text: "*meluncur...*", timeout: 7000 }
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
};

handler.command = ['otw'];
handler.tags = ['owner'];
module.exports = handler;