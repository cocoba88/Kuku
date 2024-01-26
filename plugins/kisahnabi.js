const fetch = require('node-fetch');

let handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'Nama Nabinya?';
  }

  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`
    );

    if (!response.ok) {
      throw 'Not Found';
    }

    const kisah = await response.json();
    const hasil = `
_*Nama Nabi :*_ ${kisah.name} 
_*Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*Tempat Lahir :*_ ${kisah.tmp}
_*Usia :*_ ${kisah.usia}

* — [ K I S A H ] — *

${kisah.description}
    `;

    conn.reply(m.chat, hasil, m);
  } catch (error) {
    throw error;
  }
};

handler.help = ['kisahnabi'];
handler.tags = ['islami'];
handler.command = /^kisahnabi$/i;
handler.register = false;
handler.limit = false;

module.exports = handler;
