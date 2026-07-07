const quotes = [
  { text: "I am the one who knocks.", author: "Walter White" },
  { text: "Say my name.", author: "Walter White" },
  { text: "Yeah, science!", author: "Jesse Pinkman" },
  { text: "Better call Saul.", author: "Saul Goodman" },
  { text: "No more half measures.", author: "Mike Ehrmantraut" }
];


let current = 0;
const textEl = document.getElementById("quoteText");
const authorEl = document.getElementById("quoteAuthor");
const dotsEl = document.getElementById("quoteDots");

quotes.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');

  dot.addEventListener("click", () => {
       current = i;
       showQuote(current)
  })
  dotsEl.appendChild(dot);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    current = (current + 1) % quotes.length;
    showQuote(current);
  } else if (e.key === 'ArrowLeft') {
    current = (current - 1 + quotes.length) % quotes.length;
    showQuote(current);
  }
});

function showQuote(i){
    textEl.style.opacity = 0;
    setTimeout(() => {
         textEl.textContent = `"${quotes[i].text}"`;
         authorEl.textContent = quotes[i].author;
         [...dotsEl.children].forEach((d, idx) => d.classList.toggle("active", idx === i));
         textEl.style.opacity = 1;
    }, 400);
}

setInterval(() => {
    current = (current+1) % quotes.length;
    showQuote(current);
}, 4000);


/* scroll animation */
const sr = ScrollReveal({
    distance: "40px",
    duration: 1000,
    easing: "ease",
    reset: false,

});

sr.reveal("nav li", {
  origin: "top",
  interval: 100
});

sr.reveal("#logo", {
  origin: "left",
  distance: "30px",
  duration: 1000,
  delay: 100
});

sr.reveal(".hero-text", {
    origin: "bottom",
    delay: 300
});

sr.reveal(".about-image", {
    origin: "left"
});

sr.reveal(".title", {
    origin: "right",
    delay: 100
});

sr.reveal(".info", {
    origin: "right",
    delay: 200
});

sr.reveal(".info-text", {
    origin: "bottom",
    interval: 150
});

sr.reveal(".genre", {
    origin: "bottom",
    delay: 200
});

sr.reveal("#trailer", {
    origin: "bottom",
    delay: 300
});

sr.reveal(".card", {
    origin: "bottom",
    delay: 300,
    interval: 100
});

