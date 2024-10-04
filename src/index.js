import "./style_reset.css";
import "./styles.css";

import { initPageload } from "./init_pageload";

console.log("server is running");
initPageload();

const $nav = document.querySelector("nav");
$nav.addEventListener("click", e => {
    let pageTab = e.target.textContent;
    initPageload(pageTab);
})