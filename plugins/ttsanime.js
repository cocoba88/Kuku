let fetch = require('node-fetch');

const voice = [
  'special_week',
  'silence_suzuka',
  'tokai_teio',
  'maruzensky',
  'fuji_kiseki',
  'oguri_cap',
  'gold_ship',
  'vodka',
  'daiwa_scarlet',
  'taiki_shuttle',
  'grass_wonder',
  'hishi_amazon',
  'mejiro_mcqueen',
  'kujou_sara',
  'barbara',
  'paimon',
  'arataki_itto',
  'sayu',
  'xiangling',
  'kamisato_ayaka',
  'raiden_shogun',
  'yae_miko',
  'hu_tao',
  'keqing'
];

const handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  const response = args.join(' ').split('|');
  if (!args[0]) return m.reply(`Example: ${usedPrefix}${command} hallo namaku yamii`);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  
  try {
    const res = await fetch(`https://skizo.tech/api/tts-anime?text=${encodeURIComponent(response[0])}&lang=english&voice=${response[1]}&speed=0.8&symbol=y&apikey=y6rsxtbase`);
    
    if (!res.ok) {
      console.error(`Fetch error: ${res.status} ${res.statusText}`);
      throw `Error: ${res.status} ${res.statusText}`;
    }

    const kemiiBuffer = await res.buffer();
    
    conn.sendFile(m.chat, kemiiBuffer, 'kemii.mp3', `
*Text:* ${response[0]}
*Voice:* ${response[1]}
    `.trim(), m);
  } catch (e) {
    console.error(e);
    m.reply(`Error: ${e.message || 'Failed to process the request'}`);
  }
};

handler.help = ['ttsanime <text>|<voice>'];
handler.tags = ['tools', 'anime'];
handler.command = /^ttsa(nime)?$/i;
handler.limit = false;
handler.premium = false;

module.exports = handler;
