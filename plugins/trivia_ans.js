const similarity = require('similarity');
const threshold = 0.72;

let handler = m => m;

handler.before = async function (m) {
    let id = m.chat;

    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teka/i.test(m.quoted.text)) return !0;

    this.tebakknowledge = this.tebakknowledge ? this.tebakknowledge : {};

    if (!(id in this.tebakknowledge)) return m.reply('Soal itu telah berakhir');

    if (m.quoted.id == this.tebakknowledge[id][0].id) {
        let question = JSON.parse(JSON.stringify(this.tebakknowledge[id][1]));
        let correctAnswers = question.jawaban.trim().toLowerCase().split(', ').map(ans => ans.trim());

        // Check if the user's response matches any part of the correct answers
        let userResponse = m.text.toLowerCase().trim();
        let isCorrect = correctAnswers.some(ans => {
            return userResponse === ans || similarity(userResponse, ans) >= threshold;
        });

        if (isCorrect) {
            global.db.data.users[m.sender].exp += this.tebakknowledge[id][2];
            global.db.data.users[m.sender].tiketcoin += 1;
            m.reply(`*Benar!*\n+${this.tebakknowledge[id][2]} XP\n+1 Tiketcoin`);
            clearTimeout(this.tebakknowledge[id][3]);
            delete this.tebakknowledge[id];
        } else {
            m.reply(`*Salah!*`);
        }
    }

    return !0;
};

handler.exp = 0;

module.exports = handler;
