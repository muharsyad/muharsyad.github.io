function toggleNavbar() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slideInterval = 3000; // Interval waktu dalam milidetik

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto slide
function autoSlide() {
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, slideInterval);
}

// Menampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);
autoSlide();
