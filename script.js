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

