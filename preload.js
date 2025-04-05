function updateProgressBar(progress) {
  document.getElementById("progress-bar").style.width = progress + "%";
}

function allAssetsLoaded() {
  // Sembunyikan loading screen dan tampilkan konten
  document.getElementById("loading-screen").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("content").classList.add("fade-in");
    document.getElementById("splash-screen").style.display = "block";

    initGameParticles?.(); // kalau ada
    onAssetsLoaded(); // dispatch event selesai load
  }, 500); // match sama animasi fade-out
}

function onAssetsLoaded() {
  document.dispatchEvent(new Event("assetsLoaded"));
}

function preload() {
  const queue = new createjs.LoadQueue(true);

  queue.on("progress", function (event) {
    updateProgressBar(event.progress * 100);
  });

  queue.on("complete", allAssetsLoaded, this);

  queue.loadManifest([
    { id: "tulip1", src: "Asset/tulip1.png" },
    { id: "tulip2", src: "Asset/tulip2.png" },
    { id: "loveletter", src: "Asset/loveletter.mp3" },
    { id: "type", src: "Asset/type.mp3" },

    // MP4s (pastikan file-nya bener dan huruf besar/kecil match!)
    { id: "confused1", src: "img/confused1.mp4" },
    { id: "cry", src: "img/cry.mp4" },
    { id: "cute", src: "img/cute.mp4" },
    { id: "flower", src: "img/flower.mp4" },
    { id: "happy", src: "img/happy.mp4" },
    { id: "hihi", src: "img/Hihi.mp4" },
    { id: "huh", src: "img/huh.mp4" },
    { id: "lying", src: "img/lying.mp4" },
    { id: "o", src: "img/O.mp4" },
    { id: "puyenk", src: "img/Puyenk.mp4" },
    { id: "sad", src: "img/sad.mp4" },
    { id: "Sed", src: "img/Sed.mp4" },
    { id: "sideeye", src: "img/sideeye.mp4" },
    { id: "sleepy", src: "img/sleepy.mp4" },
    { id: "sus", src: "img/sus.mp4" },
    { id: "sweepy", src: "img/sweepy.mp4" },
    { id: "present1", src: "img/Present1.mp4" },
    { id: "present2", src: "img/Present2.mp4" },
    { id: "present3", src: "img/Present3.mp4" },
    { id: "present4", src: "img/Present4.mp4" },
    { id: "present5", src: "img/Present5.mp4" },
  ]);
}

window.addEventListener("load", preload);
