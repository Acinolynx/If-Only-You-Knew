function initLoadingParticles() {
  particlesJS("loading-particles", {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#ffcaca" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.5, random: true },
      size: { value: 5, random: true },
      move: { enable: true, speed: 1, direction: "none", out_mode: "out" },
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false }, onclick: { enable: false } },
    },
    retina_detect: true,
  });
}

function initGameParticles() {
  particlesJS("game-particles", {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#ffcaca" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.5, random: true },
      size: { value: 5, random: true },
      move: { enable: true, speed: 1, direction: "none", out_mode: "out" },
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false }, onclick: { enable: false } },
    },
    retina_detect: true,
  });
}
