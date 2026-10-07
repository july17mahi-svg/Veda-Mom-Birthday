// ==============================
// QUOTES
// ==============================

const quotes = [

    "A mother's love is the purest form of love in the world. ❤️",

    "Life doesn't come with a manual, it comes with a mother. 🌷",

    "A mother's hug lasts long after she lets go. 🤗",

    "There is no place safer than a mother's arms. ❤️",

    "A mother's love is the greatest blessing anyone can receive. 🌸",

    "Behind every happy child is a mother who loved them endlessly. 💕",

    "Mom, your love is my greatest strength. ❤️"

];


let quoteIndex = 0;


// Show next quote

function nextQuote() {

    quoteIndex++;

    if (quoteIndex >= quotes.length) {
        quoteIndex = 0;
    }

    document.getElementById("quote").textContent =
        quotes[quoteIndex];

}


// Show previous quote

function previousQuote() {

    quoteIndex--;

    if (quoteIndex < 0) {
        quoteIndex = quotes.length - 1;
    }

    document.getElementById("quote").textContent =
        quotes[quoteIndex];

}


// Automatically change quote

setInterval(nextQuote, 5000);



// ==============================
// SCROLL
// ==============================

function scrollToSection(sectionId) {

    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });

}



// ==============================
// SURPRISE BUTTON
// ==============================

function showSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.style.display = "block";

    createHeartExplosion();

}



// ==============================
// FLOATING HEARTS
// ==============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "🌸",
        "🌷"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 8000);

}


// Create hearts periodically

setInterval(createHeart, 800);



// ==============================
// HEART EXPLOSION
// ==============================

function createHeartExplosion() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);

    }

}