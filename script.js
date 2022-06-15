let colr = "#22f";
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
    `;
};

let stylesheet = document.createElement("style");
stylesheet.innerText = makeCss();
document.head.appendChild(stylesheet);

const mkRed = () => {
  colr = "#f22";
  stylesheet.innerText = makeCss();
};
const mkGreen = () => {
  colr = "#2f2";
  stylesheet.innerText = makeCss();
};
const mkBlue = () => {
  colr = "#22f";
  stylesheet.innerText = makeCss();
};
const mkYellow = () => {
  colr = "#ff2";
  stylesheet.innerText = makeCss();
};
const mkPurple = () => {
  colr = "#f2f";
  stylesheet.innerText = makeCss();
};
const mkCyan = () => {
  colr = "#2ff";
  stylesheet.innerText = makeCss();
};
