let colors = {
  red: "#f22",
  green: "#2f2",
  blue: "#22f",
  yellow: "#ff2",
  purple: "#f2f",
  cyan: "#2ff",
};
let colr = colors.green;
let makeCss = () => {
  return `
    .ytp-swatch-background-color {
        background-color: ${colr} !important;
    }
    .ytp-settings-button.ytp-hd-quality-badge:after,.ytp-settings-button.ytp-hdr-quality-badge:after,.ytp-settings-button.ytp-4k-quality-badge:after,.ytp-settings-button.ytp-5k-quality-badge:after,.ytp-settings-button.ytp-8k-quality-badge:after,.ytp-settings-button.ytp-3d-badge-grey:after,.ytp-settings-button.ytp-3d-badge:after {
        background-color: ${colr} !important;
    }
    .ytp-swatch-color {
        color: ${colr} !important;
    }
    html {
        --yt-spec-brand-button-background: ${colr}
    }
    
    .adblk {
        display: none;
        opacity: 0;
    }`;
};

let stylesheet = document.createElement("style");
stylesheet.innerHTML = makeCss();
document.head.appendChild(stylesheet);

window.ytbar = {};
for (let [k, b] of Object.entries(colors)) {
  window.ytbar[k] = () => {
    colr = b;
    stylesheet.innerHTML = makeCss();
  };
}

if (window.ytbarTimer) clearInterval(window.ytbarTimer);
window.ytbarTimer = setInterval(() => {
  let vid = document.querySelector("video[src]");
  let adtxt = document.querySelector("div.ytp-ad-player-overlay");
  let A = document.querySelector("#player-ads");

  if (A && !A.classList.contains("adblk")) {
    A.classList.add("adblk");
  }

  if (vid && adtxt) {
    vid.currentTime = vid.duration;
  }

  let g = [];
  for (let b of document.querySelectorAll(
    "ytd-promoted-sparkles-text-search-renderer"
  )) {
    g.push(b);
  }
  for (let b of document.querySelectorAll(
    "ytd-promoted-sparkles-web-renderer"
  )) {
    g.push(b);
  }

  for (let z of g) {
    let prn = z.parentNode.parentNode;
    let pr = z.parentNode;

    if (
      prn.tagName === "YTD-ITEM-SECTION-RENDERER" &&
      !prn.classList.contains("adblk")
    ) {
      prn.classList.add("adblk");
    } else if (pr.id === "items" && !z.classList.contains("adblk")) {
      z.classList.add("adblk");
    }
  }
}, 1);
