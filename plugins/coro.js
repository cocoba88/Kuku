const axios = require('axios');
const fs = require('fs');

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
        if (!text.trim()) throw new Error(`Contoh:\n${usedPrefix}${command} Tutorial Mendapatkan Janda Pirang`);

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

        const options = {
            method: 'GET',
            url: `https://aemt.me/gpt4?text=${encodeURIComponent(text)}`,
            headers: {
                'accept': 'application/json'
            }
        };

        // Menambahkan jeda 1 detik
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await axios.request(options);
        console.log(response.data);

        if (response.data.status && response.data.result) {
            const replyText = response.data.result;

            // Menggabungkan teks jawaban dengan video lokal dalam satu pesan
            const combinedMessage = `${replyText}\n\n[Video yang diminta](file://${__dirname}/gojo.mp4)`;

            // Mengirim pesan yang sudah digabungkan beserta video
            conn.sendFile(m.chat, 'C:\\Users\\Administrator\\Downloads\\BOT\\src\\gojo.mp4', 'video.mp4', combinedMessage, m);
        } else {
            m.reply("Error getting response from GPT-4 API.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Error processing the command.");
    }
};

handler.help = ['chtx <text>'];
handler.tags = ['ai'];
handler.command = /^coro/i;
handler.premium = false;
handler.diamond = false;

module.exports = handler;
