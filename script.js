const audio = document.getElementById('audio');
const PlayPauseBtn = document.getElementById("playPause");
const progressBar = document.getElementById("progressBar");
const fileInput = document.getElementById("fileInput");
const dropArea = document.getElementById("dropArea");
const coverImage = document.getElementById("coverImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let playlist = [];
let currentIndex = -1;

const coverImages = [
    "default-cover.png",
    "default-cover1.png",
    "default-cover2.png"
];

function handleFiles(files) {
    for (const file of files) {
        if (!file || !file.type.startsWith("audio/")) continue;
        
        const url = URL.createObjectURL(file);
        const fileName = file.name.replace(/\.[^/.]+$/, "");

        const song = {
            name :fileName,
            url: url,
            cover: "default-cover.png",
        };

        playlist.push(song);
    }

    if (currentIndex === -1 && playlist.length > 0) {
      currentIndex = 0;
      loadSong(currentIndex);
    }
}