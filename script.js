const enterGameButton = document.getElementById("enter-game");
const startButton = document.getElementById("start-button");
const splashScreen = document.getElementById("splash-screen");
const mainMenu = document.getElementById("main-menu");
const gameContainer = document.getElementById("game-container");
const storyText = document.getElementById("story-text");
const choiceButtons = document.getElementById("choice-buttons");
const expressionGif = document.getElementById("expression-video");
const menuVideo = document.getElementById("menu-video");

expressionGif.volume = 0.2;
menuVideo.volume = 0.2;
bgm.volume = 0.5;

document.addEventListener("DOMContentLoaded", function () {
  const bgm = document.getElementById("bgm");

  function playBGM() {
    bgm.play().catch(() => {
      console.log("Auto-play diblokir, user harus berinteraksi dulu.");
    });
  }
  function restartGame() {
    bgm.currentTime = 0; // Reset musik ke awal
    playBGM();
  }
  // 🔹 Saat klik tombol "Lanjutkan" di splash screen, musik mulai
  document.getElementById("enter-game").addEventListener("click", playBGM);
  // 🔹 Saat klik tombol "Mulai Ulang", musik restart
  document
    .getElementById("start-button")
    .addEventListener("click", restartGame);
});

const story = [
  {
    text: "\n 🛏️ Kamu baru saja bangun. Mata masih berat. Rasanya malas buat bangun dari kasur. \n 📱 Kamu raih HP di samping bantal. Jam sudah agak siang. \n 👩🏻 Apa yang mau kamu lakukan?",
    video: "img/sleepy.mp4",
    choices: [
      { text: "Cek notifikasi, siapa tahu ada yang inget...", nextText: 1 },
      { text: "Scroll FYP aja sambil rebahan...", nextText: 2 },
    ],
  },
  {
    text: "\n 📱 Kamu membuka notifikasi… tapi kosong. Tidak ada pesan spesial, tidak ada kejutan. \n 👩🏻💭 'Yah… gak ada yang inget ya…' ",
    video: "img/sweepy.mp4",
    choices: [{ text: "Yaudah, scroll FYP aja deh...", nextText: 2 }],
  },
  {
    text: "\n 📱 Jempolmu terus menggeser layar. Satu video, dua video, tiga video… semuanya tentang pasangan yang saling memberi kejutan. \n 💐 Ada yang dikasih bunga. \n 🎁 Ada yang dikasih kado di hari spesial. \n 🎂 Ada yang dirayakan ulang tahunnya dengan meriah. \n 💔 Kamu mendesah pelan. Rasanya sedikit nyesek.",
    video: "img/sed.mp4",
    choices: [
      { text: "Huft… iri banget ya...", nextText: 3 },
      { text: "Yaudah lah… mungkin aku gak seistimewa itu.", nextText: 3 },
    ],
  },
  {
    text: "\n 🔔 Tiba-tiba, HP-mu bergetar. Ada satu notifikasi baru dari nomor tidak dikenal. \n 📩 'Mainkan ini, buat kamu.' \n 🎮 Sebuah link. Game?",
    video: "img/confused1.mp4",
    choices: [
      { text: "Coba aja, siapa tahu menarik.", nextText: 4 },
      {
        text: "Siapa sih ini? Tapi yaudah, penasaran juga...",
        nextText: 4,
      },
    ],
  },
  {
    text: "\n 🎮 Kamu membuka game itu. Layarnya gelap sebentar, lalu muncul pesan pertama. \n 📜 'Kalau kamu tahu… ada yang selalu inget hari ini' ",
    video: "img/o.mp4",
    choices: [{ text: "Ehh... Apaan nih?...", nextText: 5 }],
  },
  {
    text: "\n 📜 'Kalau kamu tahu… ada yang selalu inget hari ini.' \n 📜 'Ada yang gak mau hari ini berlalu tanpa bilang sesuatu ke kamu.' \n 👩🏻💭 Kamu mengerutkan dahi...",
    video: "img/huh.mp4",
    choices: [
      { text: "Siapa yaa?...", nextText: 6 },
      { text: "Kenapa rasanya familiar...", nextText: 6 },
    ],
  },
  {
    text: "\n 🎂 'Selamat ulang tahun, sayang.' \n 📜 'Hari ini spesial. Bukan cuma karena angkanya berubah, tapi karena kamu ada di dunia ini.' \n  💖 'Dan buat aku, itu adalah sesuatu yang patut dirayakan.' ",
    video: "img/sus.mp4",
    choices: [
      { text: "Aku gak nyangka ada yang inget...", nextText: 7 },
      { text: "Aku kira ngga ada yang peduli...", nextText: 7 },
    ],
  },
  {
    text: "\n 📜 'Aku tahu... mungkin kamu gak selalu merasa dihargai.' \n 📜 'Mungkin ada hari-hari di mana kamu ngerasa sendirian.' \n 📜 'Tapi aku ingin kamu tahu, aku selalu ada di sini.'",
    video: "img/lying.mp4",
    choices: [
      { text: "Ini apaan sih, tiba tiba banget...", nextText: 8 },
      { text: "Jujur, kadang aku ngerasa gitu sih...", nextText: 8 },
    ],
  },
  {
    text: "\n 📜 'Kamu itu berharga.' \n 📜 'Gak peduli seberapa sering kamu ragu atau merasa gak cukup baik...' \n 📜 'Buat aku, kamu selalu cukup. Selalu lebih dari cukup.' \n 😌 Kamu menarik napas pelan. Jempolmu berhenti di atas layar.",
    video: "img/hihi.mp4",
    choices: [
      { text: "Kenapa kata-katanya bisa pas banget ya...", nextText: 9 },
      { text: "Aku gak tahu harus bilang apa...", nextText: 9 },
    ],
  },
  {
    text: "\n 📜 'Aku sadar, aku gak selalu jadi yang terbaik.' \n 📜 'Kadang aku bikin kamu kesal, bikin kamu capek.' \n 📜 'Tapi aku mau kamu tahu, aku selalu berusaha. Karena aku sayang kamu.'",
    video: "img/puyenk.mp4",
    choices: [
      { text: "Ya ampun, ini bikin aku mau nangis...", nextText: 10 },
      {
        text: "Aku gak nyangka ternyata dia mikirin sampe segini...",
        nextText: 10,
      },
    ],
  },
  {
    text: "\n 📜 'Aku gak mau kehilangan kamu.' \n 📜 'Mungkin aku gak selalu bisa ada di dekat kamu. Tapi aku gak mau kamu merasa sendiri.' \n 📜 'Aku ada di sini. Aku selalu ada untuk kamu.' \n 💖 'Dan aku harap... kamu tetap mau ada di sini juga.'",
    video: "img/sideeye.mp4",
    choices: [
      { text: "Kamu bikin aku speechless, tau gak?", nextText: 11 },
      { text: "Kenapa ini berasa terlalu nyata...", nextText: 11 },
    ],
  },
  {
    text: "\n 📜 'Aku tahu, kadang kita berantem. Kadang kita gak sepaham.' \n 📜 'Tapi itu bukan berarti aku gak peduli.' \n 📜 'Aku mau kita terus belajar bareng. Terus tumbuh bareng.'",
    video: "img/sad.mp4",
    choices: [
      { text: "Aku juga gak pengen kehilangan kamu...", nextText: 12 },
      {
        text: "Kita pasti bisa lewatin semuanya bareng!",
        nextText: 12,
      },
    ],
  },
  {
    text: "\n 🎁 'Ini mungkin bukan hadiah besar.' \n 🎁 'Tapi aku ingin kamu tahu, setiap kata di sini tulus dari hatiku.' \n 🎁 'Dan kalau aku bisa memberi satu hal untuk kamu hari ini...' \n 🎁 '...Aku ingin kamu bahagia.'",
    video: "img/happy.mp4",
    choices: [
      { text: "Ini lebih dari cukup buat aku...", nextText: 13 },
      { text: "Aku gak butuh apa-apa lagi, cukup kamu ada.", nextText: 13 },
    ],
  },
  {
    text: "\n 🎉 'Selamat ulang tahun sekali lagi.' \n 🎉 'Aku harap hari ini penuh dengan senyum untuk kamu.' \n 🎉 'Dan kalau suatu saat kamu merasa sendirian lagi...' \n 🎉 'Buka game ini. Karena aku selalu ada di sini.' \n ❤️ Layar perlahan memudar, meninggalkan satu pesan terakhir:📜 'Aku sayang kamu.'",
    video: "img/cry.mp4",
    choices: [
      { text: "Aku juga sayang kamu. Selalu.", nextText: 14 },
      { text: "Yuk, bareng-bareng terus ya...", nextText: 14 },
    ],
  },
  {
    text: "💌\nHari ini bukan cuma ulang tahunmu.\nBukan cuma hari anniv kita (telat banget sih hehe).\nTapi hari di mana aku pengen bilang…\n\nTerima kasih.\nMaaf.\nDan... aku sayang kamu.\n\nTerus bertahan ya. Aku di sini, buat kamu. \n\n Ada hadiah lhoo <3 Buka hadiahnya!",
    video: "img/flower.mp4",
    choices: [{ text: "🎁 Hehe, penasaran ya?", nextText: 15 }],
  },
  {
    text: "🎁 Ciee Ciee ❤️",
    video: "img/present1.mp4",
    choices: [
      {
        text: "🎁 Buka lagi!",
        nextText: 16,
      },
    ],
  },
  {
    text: "🎁 Waduh, Masih ada? 👀",
    video: "img/present2.mp4",
    choices: [
      {
        text: "🎁 Coba buka lagi!",
        nextText: 17,
      },
    ],
  },
  {
    text: "🎁 Eits, masih ada lho!",
    video: "img/present3.mp4",
    choices: [
      {
        text: "🎁 Lanjut bukaaa!",
        nextText: 18,
      },
    ],
  },
  {
    text: "🎁 Kamu kira udah abis? 👀",
    video: "img/present4.mp4",
    choices: [
      {
        text: "🎁 Buka cepet! ini spesial buat kamu lhoo ❤️",
        nextText: 19,
      },
    ],
  },
  {
    text: "🎁 Tadaaa~ Hadiah spesial buat kamu! 🎊🎈",
    video: "img/present5.mp4",
    choices: [
      {
        text: "🎁 Asikk Abiss Hadiahnya, Main lagi ngga?",
        nextText: 0,
      },
    ],
  },
];

function showSplashScreen() {
  splashScreen.style.display = "block";
  mainMenu.style.display = "none";
  gameContainer.style.display = "none";
}

function enterMainMenu() {
  splashScreen.style.display = "none";
  mainMenu.style.display = "block";
  const menuVideo = document.getElementById("menu-video");
  splashScreen.classList.remove("fade-in");
  mainMenu.classList.add("fade-in");
  menuVideo.play();
}

function startGame() {
  mainMenu.style.display = "none";
  gameContainer.style.display = "block";
  mainMenu.classList.remove("fade-in");
  gameContainer.classList.add("fade-in");
  showTextNode(0);
}

const typeSound = new Audio("Asset/type.mp3");
typeSound.volume = 0.3;

function typeWriterEffect(text, callback) {
  let i = 0;
  storyText.textContent = "";
  const speed = 30;
  let typingSoundInterval;

  // Fungsi untuk looping audio efek ketik
  function startTypingSound() {
    typingSoundInterval = setInterval(() => {
      const sound = typeSound.cloneNode();
      sound.volume = 0.2;
      sound.play().catch(() => {});
    }, 120); // loop setiap 120ms (bisa kamu atur biar pas)
  }

  // Hentikan suara
  function stopTypingSound() {
    clearInterval(typingSoundInterval);
  }

  startTypingSound();

  function type() {
    if (i < text.length) {
      storyText.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      stopTypingSound(); // stop suara saat selesai
      callback();
    }
  }
  type();
}

function stopAllVideos() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}

function showTextNode(index) {
  stopAllVideos();
  const node = story[index];
  if (!node) return;

  if (index === -1) {
    showGiftScreen();
    return;
  }

  // Tambahkan efek fade-out sebelum ganti scene
  expressionGif.classList.add("fade-out");
  storyText.classList.add("fade-out");
  choiceButtons.classList.add("fade-out");

  setTimeout(() => {
    // Hapus fade-out setelah animasi selesai
    expressionGif.classList.remove("fade-out");
    storyText.classList.remove("fade-out");
    choiceButtons.classList.remove("fade-out");

    // Ganti konten dengan scene baru
    expressionGif.src = node.video || "img/default.mp4";
    storyText.textContent = "";
    choiceButtons.innerHTML = "";

    typeWriterEffect(node.text, () => {
      if (node.choices && node.choices.length > 0) {
        let delay = 0;
        node.choices.forEach((choice) => {
          setTimeout(() => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.addEventListener("click", () => {
              showTextNode(choice.nextText);
            });
            choiceButtons.appendChild(button);
          }, delay);
          delay += 300; // tombol muncul bertahap
        });
      }

      // Tambahkan efek fade-in setelah update scene
      setTimeout(() => {
        expressionGif.classList.add("fade-in");
        storyText.classList.add("fade-in");
        choiceButtons.classList.add("fade-in");
      }, 50);
    });
  }, 300); // Delay agar fade-out dulu sebelum update scene
}

function showSplashTextSequence() {
  const messages = [
    "Kadang, perhatian itu tidak terlihat. Tapi, itu bukan berarti tidak ada.",
    "Ada hal-hal yang sulit diungkapkan dengan kata. Tapi bukan berarti tidak terasa.",
    "Perasaan itu tidak selalu terdengar, tidak selalu terlihat. Tapi, ia tetap ada.",
    "Terkadang, kita memahami sesuatu bukan dari kata-kata, tapi dari perasaan.",
    "Beberapa hal lebih baik dirasakan... daripada hanya sekadar didengar.",
    "Mungkin ini bukan sesuatu yang kau duga. Tapi aku harap kau bisa merasakannya.",
    "Ada yang ingin kusampaikan. Tapi mungkin, lebih baik kamu menemukannya sendiri.",
  ];

  const container = document.querySelector("#splash-screen");
  const button = document.getElementById("enter-game");
  button.style.display = "none";

  let i = 0;

  function showNext() {
    if (i < messages.length) {
      const p = document.createElement("p");
      p.classList.add("splash-text", "fade-in");
      p.textContent = messages[i];
      container.insertBefore(p, button);
      i++;
      setTimeout(showNext, 2000);
    } else {
      button.style.display = "inline-block";
      button.classList.add("fade-in");
    }
  }

  showNext();
}

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  document.getElementById("flower-container").appendChild(flower);

  const tulipImages = ["/Asset/tulip1.png", "Asset/tulip2.png"];
  const randomTulip =
    tulipImages[Math.floor(Math.random() * tulipImages.length)];

  // Random horizontal posisi & durasi
  const randomLeft = Math.random() * window.innerWidth;
  const duration = 5 + Math.random() * 5; // antara 5 - 10 detik
  const size = 30 + Math.random() * 20; // antara 30 - 50px
  const rotate = Math.random() * 360;

  flower.style.left = `${randomLeft}px`;
  flower.style.top = "-60px";
  flower.style.width = `${size}px`;
  flower.style.height = `${size}px`;
  flower.style.backgroundImage = `url(${randomTulip})`;
  flower.style.animationDuration = `${duration}s`;
  flower.style.transform = `rotate(${rotate}deg)`;

  setTimeout(() => flower.remove(), duration * 1000);
}

setInterval(createFlower, 400); // tiap 0.4 detik muncul bunga baru

enterGameButton.addEventListener("click", enterMainMenu);
startButton.addEventListener("click", startGame);
showSplashScreen();
showSplashTextSequence();
