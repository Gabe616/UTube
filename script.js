let colors = {
  red: "#f22",
  green: "#2f2",
  blue: "#22f",

  yellow: "#ff2",
  purple: "#f2f",
  cyan: "#2ff",
};

let colr = colors.red;
let txtnd = document.createTextNode("slay");
let adblock = true;
let makeCss = () => {
  txtnd.textContent = `
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
        --yt-spec-brand-button-background: ${colr} !important
    }
    
    ${
      adblock
        ? `.adblk {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }`
        : ""
    }`;
};

if (window.ytstyle) window.ytstyle.remove();

makeCss();

let stylesheet = document.createElement("style");
stylesheet.type = "text/css";
stylesheet.appendChild(txtnd);
window.ytstyle = stylesheet;
document.head.appendChild(stylesheet);

let avdd;
let isloser = false;
let isawesome = false;
let awshsv = 0;
let coolthingy = "ytd-app *";

if (window.awesomeTimer) clearInterval(window.awesomeTimer);

document.querySelectorAll(coolthingy).forEach((x) => {
  x.style.filter = "";
});

let lastFnc;
let typeFunc = (e) => {
  let ddt = e.split(/ +/g);
  let [cmd, ignorethislmao, ...args] = ddt;
  if (lastFnc === e) return;
  lastFnc = e;

  switch (cmd) {
    case "ytbar":
      if (!args[0]) return;

      let CLR = colors[args[0]];
      let nclr;

      if (args[0] === "custom") {
        nclr = args[1];
      } else if (CLR) {
        nclr = CLR;
      }

      if (nclr && colr !== nclr) {
        colr = nclr;
        makeCss();
      }
    case "adblock":
      if (!args[0]) return;

      let yes = "yes sure true zapni ano jj klidně díky slay".split(" ");
      let no = "no nah false vypni ne nn nikdy bruh unslay deslay".split(" ");

      let y1 = yes.includes(args[0].toLowerCase());
      let y2 = no.includes(args[0].toLowerCase());

      if (y1 || y2) {
        blk = y1 ? true : false;

        if (adblock !== blk) {
          adblock = blk;
          makeCss();
        }
      }
      break;
    case "awesome":
      isawesome = !isawesome;
      clearInterval(window.awesomeTimer);
      document.querySelectorAll(coolthingy).forEach((x) => {
        x.style.filter = "";
      });

      if (isawesome) {
        window.awesomeTimer = setInterval(() => {
          document.querySelectorAll(coolthingy).forEach((x) => {
            x.style.filter = `hue-rotate(${awshsv}deg)`;
          });
          awshsv += 1.5;
        }, 3);
      }
      break;
  }
};

if (window.ytbarTimer) clearInterval(window.ytbarTimer);
window.ytbarTimer = setInterval(() => {
  let vid = document.querySelector("video[src]");
  let adtxt = document.querySelector("div.ytp-ad-player-overlay");
  let yticn = document.querySelectorAll("yt-icon#logo-icon");
  let vspinner = document.querySelector("div.ytp-spinner");
  let vchrome = document.querySelector("div.ytp-chrome-bottom");
  let signin = document.querySelector(
    "ytd-masthead ytd-button-renderer a[href]"
  );
  let sform = document.querySelector("#search-form input#search");
  let ads = [];
  let adKeys = [
    "#player-ads",
    "ytd-banner-promo-renderer",
    "masthead-ad",
    "div.video-ads.ytp-ad-module",
  ];
  for (let x of adKeys) {
    for (let y of document.querySelectorAll(x)) {
      ads.push(y);
    }
  }

  for (let a of ads) {
    if (!a.classList.contains("adblk")) {
      a.classList.add("adblk");
    }
  }

  if (vid && adtxt) {
    vid.currentTime = vid.duration;
    vid.volume = 0;
    isloser = true;

    if (vspinner) vspinner.style.display = "block";
    if (vchrome) vchrome.style.display = "none";
    if (vid) vid.style.display = "none";
  } else if (vid) {
    if (isloser) {
      if (vspinner) vspinner.style.display = "none";
      if (vchrome) vchrome.style.display = "";
      if (vid) vid.style.display = "";

      isloser = false;
      vid.volume = avdd;
    } else {
      avdd = vid.volume;
    }
  }

  if (sform) {
    typeFunc(sform.value);
  }

  for (let x of yticn) {
    let l = x.querySelector("path");
    l.attributes.fill.textContent = colr;
  }

  if (signin) signin = signin.parentNode;
  if (signin && !signin.classList.contains("adblk")) {
    signin.classList.add("adblk");
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
