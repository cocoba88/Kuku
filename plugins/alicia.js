const fetch = require("node-fetch");

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let handler = async (m, { conn, text }) => {
    if (!text) throw `✳️ Masukkan Teks\n\nContoh: .bardx Tutorial Mendapatkan Janda Pirang`;
    conn.sendMessage(m.chat, {
        react: {
            text: `${pickRandom(['🗿','🦍','🦝','☢️','⚠', '🙈', '🔞','🚭','❌','🐤','🗿','🐦','🤨','❎','😐','👆','🖤','👀','☠'])}`,
            key: m.key,
        }
    });

    try {
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

        let bard = await fetch(`https://api.azz.biz.id/api/alicia?q=${text}&key=global`);
        let res = await bard.json();
        await m.reply(res.respon);

    } catch (error) {
        m.reply(`⚠️ Maaf, aku lagi nggak bisa bantuin kamu. Aku harus selesaiin dulu misi rahasia dari pemerintah.`);
    }
}

handler.help = ['bard <text>']
handler.tags = ['ai']
handler.command = ['chtx121','bardaix1'];
handler.premium = false
handler.diamond = false

module.exports = handler;
