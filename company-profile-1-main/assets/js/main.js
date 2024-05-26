AOS.init();

const stringsArray = [
    "Assault",
    "Homicide",
    "Fraud",
    "Profanity",
    "Theft",
    "Bribery",
    "Terrorist",
    "Evasion",
    "Laundering",
    "Suspicion",
    "Stalking",
    "Neglect",
    "Abuse",
    "Violance",
    
];

// Shuffle the array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the strings array
const shuffledStrings = shuffleArray(stringsArray);

// Initialize Typed.js with the shuffled strings
new Typed("#typed", {
    strings: shuffledStrings,
    typeSpeed: 100,
    delaySpeed: 300,
    loop: true,
});

$("#btn-nav").click(function () {
    $(".nav-menu").toggleClass("active");
});
$("#btn-menu").click(function () {
    $(".nav-menu").removeClass("active");
});
$("#nav-link").click(function () {
    $(".nav-menu").removeClass("active");
});
$("#nav-link1").click(function () {
    $(".nav-menu").removeClass("active");
});
$("#nav-link2").click(function () {
    $(".nav-menu").removeClass("active");
});
$("#nav-link3").click(function () {
    $(".nav-menu").removeClass("active");
});
$("#nav-link4").click(function () {
    $(".nav-menu").removeClass("active");
});
$("#nav-link5").click(function () {
    $(".nav-menu").removeClass("active");
});

$(".carousel").flickity({
    cellAlign: "left",
    contain: true,
    autoPlay: true,
    wrapAround: true,
    pageDots: false,
});
$(".main-carousel").flickity({
    cellAlign: "left",
    contain: true,
    autoPlay: 2000,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
});
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true
});
var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', { easing: 'easeInQuint' });
