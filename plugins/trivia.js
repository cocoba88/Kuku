

let timeout = 180000; // 3 minutes timeout
let poin = 500; // Points for correct answer

let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakknowledge = conn.tebakknowledge ? conn.tebakknowledge : {};
    let id = m.chat;

    if (id in conn.tebakknowledge) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakknowledge[id][0]);
        throw false;
    }

    // Sample questions and answers
    let questions = [

  { soal: 'Apa nama ibu kota Indonesia?', jawaban: 'Jakarta' },
  { soal: 'Berapa jumlah provinsi di Indonesia?', jawaban: '34' },
  { soal: 'Apa nama gunung tertinggi di Indonesia?', jawaban: 'Puncak Jaya' },
  { soal: 'Siapa nama pahlawan nasional yang terkenal dengan julukan "Pahlawan Revolusi"?', jawaban: 'Jenderal Soedirman' },
  { soal: 'Apa nama hari raya besar umat Islam yang dirayakan pada bulan Ramadhan?', jawaban: 'Idul Fitri' },
  { soal: 'Apa nama hari raya besar umat Islam yang dirayakan pada bulan Syawal?', jawaban: 'Idul Adha' },
  { soal: 'Apa nama hari raya besar umat Hindu yang dirayakan pada bulan Margasirsha?', jawaban: 'Galungan' },
  { soal: 'Apa nama hari raya besar umat Buddha yang dirayakan pada bulan Waisak?', jawaban: 'Waisak' },
  { soal: 'Apa nama hari raya besar umat Katolik yang dirayakan pada tanggal 25 Desember?', jawaban: 'Natal' },
  { soal: 'Apa nama hari raya besar umat Kristen yang dirayakan pada tanggal 25 Desember?', jawaban: 'Natal' },
  { soal: 'Apa nama mata uang Indonesia?', jawaban: 'Rupiah' },
  { soal: 'Apa nama lagu kebangsaan Indonesia?', jawaban: 'Indonesia Raya' },
  { soal: 'Apa nama lambang negara Indonesia?', jawaban: 'Garuda Pancasila' },
  { soal: 'Berapa jumlah lagu wajib nasional di Indonesia?', jawaban: '10' },
  { soal: 'Siapa nama pencipta lagu kebangsaan Indonesia, Indonesia Raya?', jawaban: 'Wage Rudolf Supratman' },
  { soal: 'Apa nama mata pelajaran wajib di sekolah dasar?', jawaban: 'Bahasa Indonesia, Matematika, IPA, IPS, PPKn, dan Seni Budaya' },
  { soal: 'Apa nama nama-nama planet di tata surya?', jawaban: 'Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus' },
  { soal: 'Apa nama nama-nama bintang di tata surya?', jawaban: 'Matahari' },
  { soal: 'Apa nama nama-nama bulan di tata surya?', jawaban: 'Bulan' },
  { soal: 'Apa nama nama-nama galaksi di tata surya?', jawaban: 'Galaksi Bimasakti' },
  { soal: 'Apa nama nama-nama satelit Bumi?', jawaban: 'Bulan' },
  { soal: 'Apa nama nama-nama satelit Mars?', jawaban: 'Phobos dan Deimos' },
  { soal: 'Apa nama nama-nama satelit Jupiter?', jawaban: 'Io, Europa, Ganymede, dan Callisto' },
  { soal: 'Apa nama nama-nama satelit Saturnus?', jawaban: 'Titan, Rhea, Enceladus, dan Dione' },
  { soal: 'Apa nama nama-nama satelit Uranus?', jawaban: 'Titania, Oberon, Uranus II, dan Uranus III' },
  { soal: 'Apa nama nama-nama satelit Neptunus?', jawaban: 'Triton, Nereid, dan Proteus' },
  { soal: 'Apa nama nama-nama bentuk geometri dasar?', jawaban: 'Persegi, persegi panjang, segitiga, lingkaran, dan trapesium' },
  { soal: 'Apa nama nama-nama jenis bangun ruang?', jawaban: 'Balok, kubus, prisma, limas, dan tabung' },
  { soal: 'Apa nama nama-nama benda yang termasuk dalam kelompok benda padat?', jawaban: 'Kayu, batu, besi, dan kaca' },
  { soal: 'Apa nama nama-nama benda yang termasuk dalam kelompok benda cair?', jawaban: 'Air, susu, minyak, dan bensin' },
  { soal: 'Apa nama nama-nama benda yang termasuk dalam kelompok benda gas?', jawaban: 'Udara, oksigen, nitrogen'},
  { soal: 'Apa nama nama-nama elemen dalam tabel periodik?', jawaban: 'Hidrogen, Helium, Litium, Berilium, Boron, Karbon, Nitrogen, Oksigen, Fluorin, Neon, Natrium, Magnesium, Alumunium, Silikon, Fosfor, Belerang, Klorin, Argon, Kalium, Kalsium' },
{ soal: 'Apa nama nama-nama komponen darah?', jawaban: 'Plasma, sel darah merah, sel darah putih, dan trombosit' },
{ soal: 'Apa nama nama-nama sistem pencernaan manusia?', jawaban: 'Mulut, kerongkongan, lambung, usus halus, dan usus besar' },
{ soal: 'Apa nama nama-nama organ dalam sistem pernapasan manusia?', jawaban: 'Hidung, faring, laring, trakea, bronkus, dan paru-paru' },
{ soal: 'Apa nama nama-nama tulang belakang manusia?', jawaban: 'Tulang servikal, tulang torakal, dan tulang lumbal' },
{ soal: 'Apa nama nama-nama jenis gigi pada manusia?', jawaban: 'Gigi seri, gigi taring, gigi premolar, dan gigi molar' },
{ soal: 'Apa nama nama-nama sistem saraf manusia?', jawaban: 'Sistem saraf pusat (otak dan sumsum tulang belakang) dan sistem saraf tepi' },
{ soal: 'Apa nama nama-nama jenis tulang pada manusia?', jawaban: 'Tulang pipih, tulang panjang, dan tulang pendek' },
{ soal: 'Apa nama nama-nama jenis otot pada manusia?', jawaban: 'Otot rangka, otot polos, dan otot jantung' },
{ soal: 'Apa nama nama-nama jenis sendi pada manusia?', jawaban: 'Sendi engsel, sendi peluru, dan sendi geser' },
{ soal: 'Apa nama nama-nama jenis sel pada manusia?', jawaban: 'Sel saraf, sel otot, sel darah merah, dan sel epitel' },
{ soal: 'Apa nama nama-nama kelompok darah manusia?', jawaban: 'A, B, AB, dan O' },
{ soal: 'Apa nama nama-nama jenis penyakit menular?', jawaban: 'Influenza, tuberkulosis, HIV/AIDS, dan malaria' },
{ soal: 'Apa nama nama-nama jenis penyakit tidak menular?', jawaban: 'Diabetes, hipertensi, kanker, dan penyakit jantung' },
{ soal: 'Apa nama nama-nama jenis tulisan dalam seni kaligrafi?', jawaban: 'Naskh, Thuluth, Diwani, dan Riq' },
{ soal: 'Apa nama nama-nama alat musik tiup?', jawaban: 'Seruling, terompet, trombon, dan saksofon' },
{ soal: 'Apa nama nama-nama alat musik petik?', jawaban: 'Gitar, biola, harpa, dan sitar' },
{ soal: 'Apa nama nama-nama alat musik perkusi?', jawaban: 'Drum, gendang, marakas, dan xilofon' },
{ soal: 'Apa nama nama-nama jenis tarian tradisional Indonesia?', jawaban: 'Tari Pendet, Tari Kecak, Tari Saman, dan Tari Topeng' },
{ soal: 'Apa nama nama-nama seni bela diri?', jawaban: 'Karate, Taekwondo, Judo, dan Kung Fu' },
{ soal: 'Apa nama nama-nama penemu terkenal?', jawaban: 'Thomas Edison, Albert Einstein, Marie Curie, dan Alexander Graham Bell' },
{ soal: 'Apa nama nama-nama ilmuwan terkenal?', jawaban: 'Isaac Newton, Galileo Galilei, Charles Darwin, dan Stephen Hawking' },
{ soal: 'Apa nama nama-nama penulis terkenal?', jawaban: 'William Shakespeare, Jane Austen, George Orwell, dan J.K. Rowling' },
{ soal: 'Apa nama nama-nama pelukis terkenal?', jawaban: 'Leonardo da Vinci, Vincent van Gogh, Pablo Picasso, dan Frida Kahlo' },
{ soal: 'Apa nama nama-nama film terkenal?', jawaban: 'Titanic, The Shawshank Redemption, Avatar, dan The Godfather' },
{ soal: 'Apa nama nama-nama novel terkenal?', jawaban: 'To Kill a Mockingbird, 1984, Pride and Prejudice, dan Harry Potter' },
{ soal: 'Apa nama nama-nama alat transportasi darat?', jawaban: 'Mobil, sepeda motor, bus, dan kereta api' },
{ soal: 'Apa nama nama-nama alat transportasi udara?', jawaban: 'Pesawat terbang, helikopter, balon udara, dan jet' },
{ soal: 'Apa nama nama-nama alat transportasi laut?', jawaban: 'Kapal laut, perahu, feri, dan kapal selam' },
{ soal: 'Apa nama nama-nama alat tulis?', jawaban: 'Pensil, pulpen, penghapus, dan spidol' },
{ soal: 'Apa nama nama-nama alat masak?', jawaban: 'Panci, wajan, spatula, dan pisau' },
{ soal: 'Apa nama nama-nama alat kebersihan?', jawaban: 'Sapu, pel, sikat toilet, dan ember' },
{ soal: 'Apa nama nama-nama alat pertukangan?', jawaban: 'Palu, gergaji, obeng, dan meteran' },
{ soal: 'Apa nama nama-nama alat elektronik?', jawaban: 'Televisi, laptop, smartphone, dan blender' },
{ soal: 'Apa nama nama-nama alat kantor?', jawaban: 'Printer, komputer, telepon, dan mesin fax' },
{ soal: 'Apa nama nama-nama alat musik elektronik?', jawaban: 'Synthesizer, drum machine, keyboard, dan mixer' },
{ soal: 'Apa nama nama-nama alat olahraga?', jawaban: 'Bola, raket, sepatu lari, dan dumbbell' },
{ soal: 'Apa nama nama-nama alat camping?', jawaban: 'Tenda, sleeping bag, kompor portable, dan headlamp' },
{ soal: 'Apa nama nama-nama alat pancing?', jawaban: 'Reel, joran, umpan, dan tali pancing' },
{ soal: 'Apa nama nama-nama alat pertanian?', jawaban: 'Cangkul, sabit, traktor, dan mesin penyiram' },
{ soal: 'Apa nama nama-nama alat medis?', jawaban: 'Stetoskop, termometer, plester, dan obat' },
{ soal: 'Apa nama nama-nama alat keamanan?', jawaban: 'CCTV, alarm, kunci pintu, dan pagar' },
{ soal: 'Apa nama nama-nama alat komunikasi?', jawaban: 'Telepon, radio, televisi, dan walkie-talkie' },
{ soal: 'Apa nama nama-nama alat fotografi?', jawaban: 'Kamera, lensa, tripod, dan flash' },
{ soal: 'Apa nama nama-nama alat lukis?', jawaban: 'Kuas, cat air, palet, dan kanvas' },
{ soal: 'Apa nama nama-nama alat sulap?', jawaban: 'Topi ajaib, kartu remi, tongkat sulap, dan boneka sawah' },
{ soal: 'Apa nama nama-nama alat make-up?', jawaban: 'Lipstik, bedak, maskara, dan kuas make-up' },
{ soal: 'Apa nama nama-nama alat pesta?', jawaban: 'Balon, kembang api, topi pesta, dan kue ulang tahun' },
{ soal: 'Apa nama nama-nama alat pengukur?', jawaban: 'Thermometer, stopwatch, penggaris, dan alat ukur berat' },
{ soal: 'Apa nama nama-nama alat kebugaran?', jawaban: 'Treadmill, dumbbell, yoga mat, dan resistance band' },
{ soal: 'Apa nama nama-nama alat pertolongan pertama?', jawaban: 'Plester, obat antiseptik, perban, dan masker' },
{ soal: 'Apa nama nama-nama alat pendingin?', jawaban: 'Kipas angin, AC, kulkas, dan es batu' },
{ soal: 'Apa nama nama-nama alat pemanas?', jawaban: 'Kompor gas, rice cooker, oven, dan pemanas air' },
{ soal: 'Apa nama nama-nama alat kebersihan gigi?', jawaban: 'Sikat gigi, pasta gigi, benang dental, dan mouthwash' },
{ soal: 'Apa nama nama-nama alat kecantikan?', jawaban: 'Hair dryer, curling iron, facial cleanser, dan mirror' },
{ soal: 'Apa nama nama-nama alat bayi?', jawaban: 'Popok, botol susu, mainan bayi, dan baby monitor' },
{ soal: 'Apa nama nama-nama alat penulisan?', jawaban: 'Pensil, pulpen, penghapus, dan buku catatan' },
{ soal: 'Apa nama nama-nama alat mandi?', jawaban: 'Sabun mandi, sampo, sikat gigi, dan handuk' },
{ soal: 'Apa nama nama-nama alat tidur?', jawaban: 'Bantal, selimut, sprei, dan guling' },
{ soal: 'Apa nama nama-nama alat makan?', jawaban: 'Sendok, garpu, pisau, dan piring' },
{ soal: 'Apa nama nama-nama alat minum?', jawaban: 'Gelas, cangkir, botol minum, dan sedotan' },
{ soal: 'Apa nama nama-nama alat masak?', jawaban: 'Panci, wajan, spatula, dan pisau' },
{ soal: 'Apa nama nama-nama alat kebersihan?', jawaban: 'Sapu, pel, sikat toilet, dan ember' },
{ soal: 'Apa nama nama-nama alat tulis kantor?', jawaban: 'Printer, komputer, pulpen, dan kertas' },
{ soal: 'Apa nama nama-nama alat olahraga air?', jawaban: 'Papan seluncur air, perahu kayak, ski air, dan snorkel' },
{ soal: 'Apa nama nama-nama alat olahraga indoor?', jawaban: 'Treadmill, sepeda statis, alat angkat berat, dan bola basket' },
{ soal: 'Apa nama nama-nama alat olahraga outdoor?', jawaban: 'Sepeda, bola sepak, raket tenis, dan bola voli' },
{ soal: 'Apa nama ibu kota Jepang?', jawaban: 'Tokyo' },
{ soal: 'Berapa jumlah benua di dunia?', jawaban: '7' },
{ soal: 'Apa nama sungai terpanjang di dunia?', jawaban: 'Amazon' },
{ soal: 'Siapa presiden Amerika Serikat pertama?', jawaban: 'George Washington' },
{ soal: 'Apa nama samudera terbesar di dunia?', jawaban: 'Samudera Pasifik' },
{ soal: 'Apa singkatan dari UNESCO?', jawaban: 'United Nations Educational, Scientific and Cultural Organization' },
{ soal: 'Siapa penulis "Romeo dan Juliet"?', jawaban: 'William Shakespeare' },
{ soal: 'Apa nama julukan kota Paris?', jawaban: 'Kota Cahaya' },
{ soal: 'Berapa jumlah negara anggota ASEAN?', jawaban: '10' },
{ soal: 'Siapa penemu bola lampu?', jawaban: 'Thomas Edison' },
{ soal: 'Apa nama pulau terbesar di dunia?', jawaban: 'Greenland' },
{ soal: 'Apa nama sungai yang melintasi Mesir?', jawaban: 'Nil' },
{ soal: 'Siapa penulis "Harry Potter" series?', jawaban: 'J.K. Rowling' },
{ soal: 'Apa nama ilmuwan yang merumuskan teori relativitas?', jawaban: 'Albert Einstein' },
{ soal: 'Berapa jumlah gigi dewasa manusia?', jawaban: '32' },
{ soal: 'Apa nama fenomena alam saat langit gelap karena gerhana matahari?', jawaban: 'Gerhana Matahari Total' },
{ soal: 'Apa nama satelit alami Bumi?', jawaban: 'Bulan' },
{ soal: 'Siapa penemu telepon?', jawaban: 'Alexander Graham Bell' },
{ soal: 'Apa nama benua yang dijuluki "Benua Es"?', jawaban: 'Antartika' },
{ soal: 'Siapa presiden pertama Indonesia?', jawaban: 'Soekarno' },
{ soal: 'Apa nama senjata tradisional Jepang?', jawaban: 'Katana' },
{ soal: 'Apa nama mata uang Jepang?', jawaban: 'Yen' },
{ soal: 'Siapa pelukis "Mona Lisa"?', jawaban: 'Leonardo da Vinci' },
{ soal: 'Apa nama tarian tradisional India?', jawaban: 'Bharatanatyam' },
{ soal: 'Siapa penemu gravitasi?', jawaban: 'Isaac Newton' },
{ soal: 'Apa nama pulau terbesar di Indonesia?', jawaban: 'Kalimantan' },
{ soal: 'Apa nama hewan tercepat di darat?', jawaban: 'Cheetah' },
{ soal: 'Siapa penulis "The Great Gatsby"?', jawaban: 'F. Scott Fitzgerald' },
{ soal: 'Apa nama mata uang China?', jawaban: 'Yuan' },
{ soal: 'Berapa jumlah lapisan atmosfer bumi?', jawaban: '5' },
{ soal: 'Apa nama hewan yang dapat terbang tanpa sayap?', jawaban: 'Ikan Terbang' },
{ soal: 'Siapa tokoh fiksi paling terkenal dari Arthur Conan Doyle?', jawaban: 'Sherlock Holmes' },
{ soal: 'Apa nama ibu kota Australia?', jawaban: 'Canberra' },
{ soal: 'Berapa jumlah provinsi di Kanada?', jawaban: '10' },
{ soal: 'Apa nama tanaman yang menghasilkan kopi?', jawaban: 'Pohon Kopi' },
{ soal: 'Siapa penulis "War and Peace"?', jawaban: 'Leo Tolstoy' },
{ soal: 'Apa nama hewan terbesar di dunia?', jawaban: 'Paus Biru' },
{ soal: 'Apa nama tarian tradisional Meksiko?', jawaban: 'Flamenco' },
{ soal: 'Siapa penulis "The Lord of the Rings"?', jawaban: 'J.R.R. Tolkien' },
{ soal: 'Apa nama mata uang Brazil?', jawaban: 'Real' },
{ soal: 'Berapa jumlah kontinen di dunia?', jawaban: '6' },
{ soal: 'Apa nama sungai terpanjang di Eropa?', jawaban: 'Volga' },
{ soal: 'Siapa presiden pertama Amerika Serikat yang merupakan seorang aktor?', jawaban: 'Ronald Reagan' },
{ soal: 'Apa nama bintang terdekat dari Bumi?', jawaban: 'Proxima Centauri' },
{ soal: 'Apa nama mata uang India?', jawaban: 'Rupee' },
{ soal: 'Siapa penulis "Pride and Prejudice"?', jawaban: 'Jane Austen' },
{ soal: 'Apa nama tarian tradisional Spanyol?', jawaban: 'Flamenco' },
{ soal: 'Apa nama hewan yang memiliki sifat mimikri?', jawaban: 'Kumbang Daun' },
{ soal: 'Apa nama ilmuwan yang menemukan struktur DNA?', jawaban: 'James Watson dan Francis Crick' },
{ soal: 'Berapa jumlah planet di tata surya?', jawaban: '8' },
{ soal: 'Apa nama hewan yang dapat mengubah warna kulitnya?', jawaban: 'Kepiting Peacock Mantis' },
{ soal: 'Apa nama senjata tradisional Korea?', jawaban: 'Bidan' },
{ soal: 'Apa nama mata uang Rusia?', jawaban: 'Rubel' },
{ soal: 'Berapa jumlah otot dalam tubuh manusia?', jawaban: 'Lebih dari 600' },
{ soal: 'Siapa penulis "The Catcher in the Rye"?', jawaban: 'J.D. Salinger' },
{ soal: 'Apa nama bintang terpanas dalam tata surya?', jawaban: 'Matahari' },
{ soal: 'Apa nama tanaman yang menghasilkan teh?', jawaban: 'Camellia sinensis' },
{ soal: 'Siapa penemu mesin uap?', jawaban: 'James Watt' },
{ soal: 'Apa nama mata uang Korea Selatan?', jawaban: 'Won' },
{ soal: 'Apa nama tarian tradisional Jepang?', jawaban: 'Bon Odori' },
{ soal: 'Apa nama hewan yang dapat berenang melawan arus sungai?', jawaban: 'Salmon' },
{ soal: 'Apa nama ilmuwan yang menemukan hukum gravitasi?', jawaban: 'Isaac Newton' },
{ soal: 'Berapa jumlah kartu dalam satu set kartu remi?', jawaban: '52' },
{ soal: 'Apa nama senjata tradisional Tiongkok?', jawaban: 'Tai Chi Chuan' },
{ soal: 'Apa nama mata uang Inggris?', jawaban: 'Pound Sterling' },
{ soal: 'Siapa penulis "The Odyssey"?', jawaban: 'Homer' },
{ soal: 'Apa nama tanaman yang menghasilkan serat untuk pembuatan kain?', jawaban: 'Kapas' },
{ soal: 'Apa nama hewan tercepat di udara?', jawaban: 'Elang Peregrine' },
{ soal: 'Apa nama ilmuwan yang menemukan radioaktivitas?', jawaban: 'Marie Curie' },
{ soal: 'Berapa jumlah elemen dalam tabel periodik?', jawaban: '118' },
{ soal: 'Apa nama senjata tradisional Skotlandia?', jawaban: 'Claymore' },
{ soal: 'Apa nama mata uang Jerman sebelum menggunakan Euro?', jawaban: 'Mark' },
{ soal: 'Siapa penulis "Brave New World"?', jawaban: 'Aldous Huxley' },
{ soal: 'Apa nama tanaman yang menghasilkan buah tomat?', jawaban: 'Tomat' },
{ soal: 'Apa nama hewan yang dapat melihat dalam kondisi gelap?', jawaban: 'Owl' },
{ soal: 'Apa nama ilmuwan yang merumuskan hukum gerak planet?', jawaban: 'Johannes Kepler' },
{ soal: 'Berapa jumlah lapisan kulit manusia?', jawaban: '3' },
{ soal: 'Apa nama senjata tradisional Arab?', jawaban: 'Scimitar' },
{ soal: 'Apa nama mata uang Swiss?', jawaban: 'Swiss Franc' },
{ soal: 'Siapa penulis "The Iliad"?', jawaban: 'Homer' },
{ soal: 'Apa nama tarian tradisional Brasil?', jawaban: 'Samba' },
{ soal: 'Apa nama hewan yang dapat melihat ultraviolet?', jawaban: 'Lebah' },
{ soal: 'Apa nama ilmuwan yang menemukan penicillin?', jawaban: 'Alexander Fleming' },
{ soal: 'Berapa jumlah huruf dalam alfabet Rusia?', jawaban: '33' },
{ soal: 'Apa nama senjata tradisional India?', jawaban: 'Khanda' },
{ soal: 'Apa nama mata uang Turki?', jawaban: 'Lira' },
{ soal: 'Siapa penulis "One Hundred Years of Solitude"?', jawaban: 'Gabriel Garcia Marquez' },
{ soal: 'Apa nama tanaman yang menghasilkan minyak kelapa?', jawaban: 'Kelapa' },
{ soal: 'Apa nama hewan terbesar di darat?', jawaban: 'Gajah' },
{ soal: 'Apa nama ilmuwan yang menemukan listrik?', jawaban: 'Benjamin Franklin' },
{ soal: 'Berapa jumlah otot dalam tubuh manusia?', jawaban: 'Lebih dari 600' },
{ soal: 'Apa nama senjata tradisional Eskimo?', jawaban: 'Harpoon' },
{ soal: 'Apa nama mata uang Korea Utara?', jawaban: 'Won' },
{ soal: 'Siapa penulis "The Canterbury Tales"?', jawaban: 'Geoffrey Chaucer' },
{ soal: 'Apa nama tarian tradisional Sunda?', jawaban: 'Jaipong' },
{ soal: 'Apa nama tanaman yang menghasilkan teh?', jawaban: 'Camellia sinensis' },
{ soal: 'Apa nama hewan yang dapat berenang melawan arus sungai?', jawaban: 'Salmon' },
{ soal: 'Apa nama ilmuwan yang menemukan struktur DNA?', jawaban: 'James Watson dan Francis Crick' },
{ soal: 'Berapa jumlah planet di tata surya?', jawaban: '8' },
{ soal: 'Apa nama hewan yang dapat mengubah warna kulitnya?', jawaban: 'Kepiting Peacock Mantis' }

 
    
    ];

    let question = questions[Math.floor(Math.random() * questions.length)];
    
    let caption = `${question.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teka untuk bantuan
Bonus: ${poin} XP
Tiketcoin: 1 Tiketcoin
`.trim();

    conn.tebakknowledge[id] = [
        await conn.reply(m.chat, caption, m),
        question, poin,
        setTimeout
(() => {
if (conn.tebakknowledge[id]) {
setTimeout(() => {
    if (conn.tebakknowledge[id]) {
        conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${question.jawaban}*`, conn.tebakknowledge[id][0]);
        delete conn.tebakknowledge[id];
    }
}, timeout);
}
}, timeout)
];
};

handler.help = ['tebakknowledge'];
handler.tags = ['game'];
handler.command = /^trivia/i;
handler.limit = false;
handler.group = false;

module.exports = handler;