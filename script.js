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