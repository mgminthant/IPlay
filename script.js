let cards;
let hasturnCard;
let closeCard;

let firstCard, secondCard;

function clickCard() {
  if (closeCard) return;
  if (this == firstCard) return;

  this.classList.add("clicked");
  if (!hasturnCard) {
    hasturnCard = true;
    firstCard = this;
    return;
  }

  hasturnCard = false;
  secondCard = this;
  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
  } else {
    resertCard();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", clickCard);
  secondCard.removeEventListener("click", clickCard);
}

function resertCard() {
  closeCard = true;
  setTimeout(() => {
    firstCard.classList.remove("clicked");
    secondCard.classList.remove("clicked");
    closeCard = false;
  }, 1500);
}

const header = document.getElementsByTagName("header")[0];
const bot = document.getElementsByClassName("bot")[0];
const parent = document.getElementsByClassName("parent")[0];
const homediv = document.getElementsByClassName("home")[0];

const home = document.getElementById("home");
const about = document.getElementById("about");

// header
let ele, left, width;
const makeHeader = () => {
  if (window.scrollY > 25) {
    header.classList.add("head_bg");
  } else {
    header.classList.remove("head_bg");
  }
};

const movebottom = (e) => {
  ele = e.target;
  move();
};

const firstmovebottom = () => {
  ele = home;
  move();
};

const move = () => {
  left = ele.offsetLeft;
  wid = ele.clientWidth;

  bot.style.width = wid + "px";
  bot.style.left = left + "px";
};

about.addEventListener("click", movebottom);
home.addEventListener("click", movebottom);
window.addEventListener("scroll", makeHeader);
window.addEventListener("resize", move);
firstmovebottom();

// res menu
const menu = document.getElementsByClassName("humberger")[0];
const res_hum = document.getElementsByClassName("res-hum")[0];
const des = document.querySelectorAll(".ds");

const showMenuBar = () => {
  res_hum.classList.toggle("show-hum");
  if (header.classList.contains("head_bg")) {
    header.classList.remove("head_bg");
  }
  if (!res_hum.classList.contains("show-hum")) {
    header.classList.add("head_bg");
  }
  menuAni();
};

const menuAni = () => {
  for (let i = 0; i < des.length; i++) {
    des[i].classList.toggle("show");
  }
  des[1].classList.toggle("mid");
};

menu.addEventListener("click", showMenuBar);

// for close nav
const pl = document.getElementById("play");
const pl_1 = document.getElementById("play_1");

const home_1 = document.getElementById("home_1");
const about_1 = document.getElementById("about_1");

pl.addEventListener("click", () => {
  bot.style.width = 0 + "px";
});

home_1.addEventListener("click", showMenuBar);
about_1.addEventListener("click", showMenuBar);
pl_1.addEventListener("click", showMenuBar);

const start = document.getElementById("start");

const closebot = () => {
  bot.style.width = 0 + "px";
};

/**
 * Preloader
 */
let preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

// for game
