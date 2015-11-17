var display = document.getElementById("display");
var ie = document.getElementById("ie");
var firefox = document.getElementById("firefox");
var chrome = document.getElementById("chrome");
var browser = document.getElementById("browser");

function showIE() {
    display.style.transition = "all 1s";
    display.src = "img/ie.png";
    browser.innerHTML = "Internet Explorer";
}

function showFirefox() {
    display.style.transition = "all 1s";
    display.src = "img/firefox.png";
    browser.innerHTML = "Firefox";
}

function showChrome() {
    display.style.transition = "all 1s";
    display.src = "img/chrome.png";
    browser.innerHTML = "Chrome";
}

ie.onmouseover = showIE;
firefox.onmouseover = showFirefox;
chrome.onmouseover = showChrome;