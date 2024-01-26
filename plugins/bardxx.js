(async () => {
  const { GoogleBard } = await import("googlebard");

  const cookies = `__Secure-1PSID=<egiT-BXOOc7kaxZ1q6xPDLR2kgS5SnAqKujgm5VOPVLdP7BreuO5jkig_ORF1sctnzaVGA.>`;
  const bot = new GoogleBard(cookies);

  let handler = async (m, { conn, text }) => {
    if (!text) throw `✳️ Masukkan Teks\n\nContoh: .chtx Tutorial Mendapatkan Janda Pirang`;

    try {
      const response = await bot.generateText(text);

      if (response.text) {
        await m.reply(response.text);
      } else {
        await m.reply("❎ Terjadi kesalahan dalam pengambilan data dari API");
      }
    } catch (error) {
      console.error(error);
      await m.reply("❎ Terjadi kesalahan dalam menjalankan perintah");
    }
  };

  handler.help = ['gpt <text>'];
  handler.tags = ['ai'];
  handler.command = ['chtx1', 'chatgxptxxxxx', 'opexxxx', 'gptxxxx'];
  handler.premium = false;
  handler.diamond = false;

  module.exports = handler;
})();