"use strict";

const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme);

const $tabBtns = document.querySelectorAll("[data-tab-btn]");
let LastActiveTab = document.querySelector("[data-tab-content].active");
let LastActiveTabBtn = document.querySelector("[data-tab-btn].active");

$tabBtns.forEach(item => {
    item.addEventListener("click", function() {

        LastActiveTab.classList.remove("active");
        LastActiveTabBtn.classList.remove("active");
        
        const tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        tabContent.classList.add("active");
        this.classList.add("active");

        LastActiveTab = tabContent;
        LastActiveTabBtn = this;
    });
});


