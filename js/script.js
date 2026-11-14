// 1. Toggle Mobile Menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// 2. Navbar Scroll Effect & Active Link Highlight (ScrollSpy)
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active-nav');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active-nav');
                }
            });
        }
    });
});

// 3. Tutup menu mobile otomatis saat link diklik
document.querySelectorAll('.mobile-menu-panel a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.remove('active');
        }
    });
});

// 4. Smooth Scroll dengan Perbaikan Bug href="#" & Offset Navbar (80px)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (!targetId || targetId === '#') {
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const navbarHeight = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 5. Fungsi selectService() untuk tombol di Section Services
function selectService(serviceName) {
    const targetUrl = `service/?paket=${encodeURIComponent(serviceName)}`;
    window.location.href = targetUrl;
}