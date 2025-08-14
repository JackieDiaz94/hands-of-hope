console.log(document.querySelector('main'));

// Elements
const volunteerButton = document.getElementById("volunteerButton");
const organizationButton = document.getElementById("organizationButton");
const prevButton = document.getElementById("previousbutton");
const nextButton = document.getElementById("nextbutton");

const volunteerTrack = document.getElementById("volunteerTrack");
const organizationTrack = document.getElementById("organizationTrack");

// State
let currentTrack = volunteerTrack;
let currentIndex = 0;

// Show correct track
function switchTrack(newTrack) {
  volunteerTrack.classList.remove("active");
  organizationTrack.classList.remove("active");

  newTrack.classList.add("active");
  currentTrack = newTrack;
  currentIndex = 0;
  updateCarousel();
}

// Update track position
function updateCarousel() {
  const cards = currentTrack.querySelectorAll(".card");
  if (cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth;
  const gap = 80; // Must match your CSS gap
  const offset = -(currentIndex * (cardWidth + gap));

  currentTrack.style.transform = `translateX(${offset}px)`;
}

// Event: Toggle buttons
volunteerButton.addEventListener("click", () => {
  volunteerButton.classList.add("active");
  organizationButton.classList.remove("active");
  switchTrack(volunteerTrack);
});

organizationButton.addEventListener("click", () => {
  organizationButton.classList.add("active");
  volunteerButton.classList.remove("active");
  switchTrack(organizationTrack);
});

// Event: Arrows
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener("click", () => {
  const totalCards = currentTrack.querySelectorAll(".card").length;
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Init
switchTrack(volunteerTrack);
