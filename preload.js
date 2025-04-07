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

    showSplashScreen();
    showSplashTextSequence();

    initGameParticles?.();
    onAssetsLoaded();
  }, 500);
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
    { id: "tulip1", src: "Asset/tulip1.webp" },
    { id: "tulip2", src: "Asset/tulip2.webp" },
    { id: "loveletter", src: "Asset/loveletter.mp3" },
    { id: "type", src: "Asset/type.mp3" },

    // webms (pastikan file-nya bener dan huruf besar/kecil match!)
    { id: "confused1", src: "img/confused1.webm" },
    { id: "cry", src: "img/cry.webm" },
    { id: "cute", src: "img/cute.webm" },
    { id: "flower", src: "img/flower.webm" },
    { id: "happy", src: "img/happy.webm" },
    { id: "hihi", src: "img/Hihi.webm" },
    { id: "huh", src: "img/huh.webm" },
    { id: "lying", src: "img/lying.webm" },
    { id: "o", src: "img/O.webm" },
    { id: "puyenk", src: "img/Puyenk.webm" },
    { id: "sad", src: "img/sad.webm" },
    { id: "Sed", src: "img/Sed.webm" },
    { id: "sideeye", src: "img/sideeye.webm" },
    { id: "sleepy", src: "img/sleepy.webm" },
    { id: "sus", src: "img/sus.webm" },
    { id: "sweepy", src: "img/sweepy.webm" },
    { id: "present1", src: "img/Present1.webm" },
    { id: "present2", src: "img/Present2.webm" },
    { id: "present3", src: "img/Present3.webm" },
    { id: "present4", src: "img/Present4.webm" },
    { id: "present5", src: "img/Present5.webm" },
  ]);
}

window.addEventListener("load", preload);
