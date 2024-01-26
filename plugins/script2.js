const fs = require('fs');
const path = require('path');
const { readdirSync } = require('fs');

let videoSendingStatus = true; // Pengiriman video diaktifkan secara default
const videoDirectory = './vd'; // Direktori tempat video .mp4 berada

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

function sendViralVideo(m, conn) {
  if (!videoSendingStatus) {
    return; // Hentikan pengiriman video jika tidak diaktifkan
  }

  const dbPath = path.join(__dirname, 'sent_files.json');
  let sentFiles = [];

  try {
    // Baca file sent_files.json dan konversi isi file menjadi array
    sentFiles = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  } catch (error) {
    console.error('Error reading sent_files.json:', error.message);
  }

  // Ambil daftar file video .mp4 dari direktori ./vd
  const videoFiles = readdirSync(videoDirectory).filter(file => file.endsWith('.mp4'));

  // Filter video yang belum pernah dikirim
  const remainingVideos = videoFiles.filter((video) => !sentFiles.includes(video));

  if (remainingVideos.length > 0) {
    // Pilih video acak dari video yang belum pernah dikirim
    const selectedVideo = pickRandom(remainingVideos);

    // Tambahkan video yang akan dikirim ke dalam array sentFiles
    sentFiles.push(selectedVideo);

    try {
      // Simpan array sentFiles ke dalam file sent_files.json
      fs.writeFileSync(dbPath, JSON.stringify(sentFiles), 'utf8');
    } catch (error) {
      console.error('Error writing sent_files.json:', error.message);
    }

    m.reply('Tunggu Sebentar...');

    // Kirim video dari direktori ./vd
    const videoFilePath = path.join(videoDirectory, selectedVideo);
    conn.sendFile(m.chat, videoFilePath, 'video.mp4', '🔞Nih kak!🔞', m);
  } else {
    m.reply('DATABASE HABIS');
  }
}

function setVideoSendingStatus(status) {
  videoSendingStatus = status;
}

function getVideoSendingStatus() {
  return videoSendingStatus;
}

module.exports = {
  sendViralVideo,
  setVideoSendingStatus,
  getVideoSendingStatus,
};
