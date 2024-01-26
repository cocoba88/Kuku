const { ChatBot, conversation_style } = require('bingai-js');

// Fungsi untuk memilih elemen acak dari sebuah array
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("Usage:\n!bingx <prompt>\n\nExample:\n!bingx Tutorial Mendapatkan Janda Pirang");
    }

    conn.sendMessage(m.chat, {
        react: {
            text: `${pickRandom(['🗿','🦍','🦝','☢️','⚠', '🙈', '🔞','🚭', '❌', '🐤','🗿','🐦','🤨','❎','😐','👆','🖤','👀','⏱'])}`,
            key: m.key,
        }
    });

    try {
        // Gantilah 'wait' dengan pesan yang sesuai.
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

        const cookie = "16kMEsKAG-EP4nhgmsZScZGA3NPTsSXbytK-ZEh4iqNS3O2cq55XGXp0Rv18kJd7aV6eqYtigkcOmuIhAf5WdmKTaura7qIHKTpcHZbsKjiam_xqClA-J5QAmyoVtMXISZx-Yz2PoBe8ueaHwESbIeed4tRmieW-kLSrYP9_A8Xgoi2oyDi_IXYY6XsfoNDV2R1nxU_Wrj7rWTZTIzLVB1Q";
        const a = new ChatBot(cookie);
        await a.init();
		/**
         *   balanced : conversation_style.balanced
         *   creative : conversation_style.creative
         *   precise  : conversation_style.precise
         */

        // Gunakan salah satu gaya percakapan, misalnya, 'conversation_style.creative'
        m.reply(await a.ask(text, conversation_style.precise));
    } catch (e) {
        // Tampilkan pesan kesalahan yang sebenarnya
        m.reply(`⚠️ Maaf, aku lagi nggak bisa bantuin kamu. Aku harus selesaiin dulu misi rahasia dari pemerintah.`);
    }
};

handler.command = ["bingx", "bingaix"];
handler.help = ["bingx / bingaix <prompt>"];
handler.diamond = false;

module.exports = handler;
