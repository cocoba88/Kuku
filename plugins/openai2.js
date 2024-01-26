const fetch = require("node-fetch");
const { generateWAMessageFromContent } = require("@adiwajshing/baileys");
const fs = require('fs');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey: `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` });
const openai = new OpenAIApi(configuration);

// Fungsi untuk memilih elemen acak dari sebuah array
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.sendMessage(m.chat, {
        react: {
            text: `${pickRandom(['🗿', '🦍', '🦝', '☢️', '⚠', '🙈', '🔞', '🚭', '❌', '🐤', '🗿', '🐦', '🤨', '❎', '😐', '👆', '🖤', '🧑‍🧑‍🧒', '☠'])}`,
            key: m.key,
        }
    });
    try {
        if (!text) throw new Error(`Contoh:\n${usedPrefix}${command} Tutorial Mendapatkan Janda Pirang`);

        m.reply(
            `${pickRandom([
                'Ganggu Aja, Lagi Enak Nidurin Janda!',
                'Bentar, Lagi Ada Misi Menyelamatkan Dunia Dari Serangan Alien',
                'Lagi Enaknya Coli, Eh Ketahuan..',
                'Ganggu Lagi Boker Aja Lu!',
                'Nah Ini, Aku Tanyain Dulu Sama Sepuh',
                'Saya Juga Bingung',
                'Lagi Males Mikir...',
                'Bentar, Lagi Betulin Genteng!',
                'Bentar, Lagi Nyunatin Monyet!',
                'Pinjam Dulu Seratus',
                'Bentar, Aku Lagi Cari Tahu Dulu, Mana Yang Lebih Penting, Permintaanmu Atau Tidurku.',
                'Berisik!',
				'Belajar terus, pintar kagak!',
                'Bentar Ya, Aku Lagi Ada Panggilan Darurat Dari Lumba-Lumba. Harus Segera Diselamatkan.',
                'Lagi Ngelamun Jadi Jutawan. Eh, Malah Diganggu.',
                'Aku Lagi Sibuk Jadi Pawang Naga.',
                'Baik Aku Mengerti, Tapi Aku Nggak Bisa Ngirimnya Sekarang. Aku Lagi Diselidiki Polisi.',
                'Aku Lagi Diutus Oleh Presiden Untuk Menyelesaikan Krisis Di Ukraina',
                'Aku Sudah Bosan Disuruh Terus!',
                'Nanti Aku Fotoin Ya.',
                'Aku Nggak Ada Kuota Internet',
				'Saya menjawab pertanyaan ini karena saya tidak punya pekerjaan lain.',
				'Lihat dia kawan, Betapa bodohnya dia sampai tidak mengerti.',
				'Siap, puh!',
				'Saya tahu jawaban itu karena saya baru saja bertanya kepada Google.',
				'saya tidak peduli, karena itu bukan urusanku',
				'Maaf saya sedang dihipnotis',
				'Akan kubantu, sampai kamu mendapatkan penghargaan Nobel.',
				'Lagi banyak masalah ya?',
                'Aku Lagi Di Pantai. Nanti Aku Kirim Pas Aku Udah Pulang, Ya.'
            ])}`
        );

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: text
                }
               
            ]
        });

        conn.reply(m.chat, `${response.data.choices[0].message.content}`, m);

    } catch (error) {
        console.log(error);
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            conn.reply(m.chat, `${error.response.status}\n\n${error.response.data}`, m);
        } else {
            conn.reply(m.chat, `${error.message}`, m);
        }
    }
}

handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(chbtx|op2enai|gp2xt|op2enai|gp2xt)$/i
handler.limit = false
handler.register = false

module.exports = handler
