function allAssetsLoaded() {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("content").style.display = "block";
}

function updateProgressBar(progress) {
  document.getElementById("progress-bar").style.width = progress + "%";
}

function preload() {
  var queue = new createjs.LoadQueue(true);
  queue.on("complete", allAssetsLoaded, this);
  queue.on("progress", function (event) {
    updateProgressBar(event.progress * 100);
  });
  queue.loadManifest([
    { id: "present", src: "Asset/present.png" },
    { id: "tulip1", src: "Asset/tulip1.png" },
    { id: "tulip2", src: "Asset/tulip2.png" },
    { id: "agh", src: "img/agh.mp4" },
    { id: "angry", src: "img/angry.mp4" },
    { id: "anoyed", src: "img/anoyed.mp4" },
    { id: "Awo", src: "img/Awo.mp4" },
    { id: "boxing", src: "img/boxing.mp4" },
    { id: "computer", src: "img/computer.mp4" },
    { id: "confused1", src: "img/confused1.mp4" },
    { id: "confused2", src: "img/confused2.mp4" },
    { id: "cry", src: "img/cry.mp4" },
    { id: "cute", src: "img/cute.mp4" },
    { id: "dance1", src: "img/dance1.mp4" },
    { id: "dance2", src: "img/dance2.mp4" },
    { id: "flower", src: "img/flower.mp4" },
    { id: "hahee", src: "img/hahee.mp4" },
    { id: "happy", src: "img/happy.mp4" },
    { id: "Hihi", src: "img/Hihi.mp4" },
    { id: "huh", src: "img/huh.mp4" },
    { id: "lying", src: "img/lying.mp4" },
    { id: "massage", src: "img/massage.mp4" },
    { id: "nail", src: "img/nail.mp4" },
    { id: "O", src: "img/O.mp4" },
    { id: "Puyenk", src: "img/Puyenk.mp4" },
    { id: "sad", src: "img/sad.mp4" },
    { id: "salute", src: "img/salute.mp4" },
    { id: "Sed", src: "img/Sed.mp4" },
    { id: "shocked", src: "img/shocked.mp4" },
    { id: "sideeye", src: "img/sideeye.mp4" },
    { id: "sleepy", src: "img/sleepy.mp4" },
    { id: "sus", src: "img/sus.mp4" },
    { id: "sweepy", src: "img/sweepy.mp4" },
    { id: "talk", src: "img/talk.mp4" },
    { id: "whisper", src: "img/whisper.mp4" },
    { id: "Present1", src: "img/Present1.mp4" },
    { id: "Present2", src: "img/Present2.mp4" },
    { id: "Present3", src: "img/Present3.mp4" },
    { id: "Present4", src: "img/Present4.mp4" },
    { id: "Present5", src: "img/Present5.mp4" },
  ]);
}

preload();

particlesJS("particles-js", {
  particles: {
    number: {
      value: 50,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#ffcaca" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 5,
      random: true,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
    },
  },
  retina_detect: true,
});
