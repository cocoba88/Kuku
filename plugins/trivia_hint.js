let handler = async (m, { conn }) => {
    conn.tebakknowledge = conn.tebakknowledge ? conn.tebakknowledge : {};
    let id = m.chat;

    if (!(id in conn.tebakknowledge)) throw false;

    let question = conn.tebakknowledge[id][1];
    let ans = question.jawaban.trim();
    
    // Ensure the answer is not empty
    if (!ans) {
        console.log('DEBUG: Answer is undefined or null');
        throw false;
    }

    // Generate a clue by replacing vowels with underscores
    let clue = ans.replace(/[aeiou]/ig, '_');

    console.log('DEBUG: Clue:', clue);

    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tebakknowledge[id][0]);
};

handler.command = /^teka$/i;
handler.limit = false;

module.exports = handler;
