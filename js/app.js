import { header } from "./components/header/header.js";
import { countdown } from "./components/countdown/countdown.js";
import { cardLarge } from "./components/cardLarge/cardLarge.js";
document.addEventListener("DOMContentLoaded", () => {
    header();
    countdown();
    cardLarge();
})