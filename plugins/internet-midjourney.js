const fetch = require("node-fetch");

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    if (!text) throw "input text";
    try {
        await m.reply(wait);
        const midjourney = await import("midjourney-client");
        const res = await midjourney.default(text);
        const rdm = res[Math.floor(Math.random() * res.length)];
        await conn.sendFile(m.chat, rdm, text, "*[ Result ]*\n" + text, m);
    } catch (e) {
        throw e;
    }
};

handler.help = ["midjourney"];
handler.tags = ["internet"];
handler.command = /^mid$/i;

module.exports = handler;
