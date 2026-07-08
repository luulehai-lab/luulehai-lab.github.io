/*
File: d:/CloudStation/CODE/PYTHON_APP/57_LANDING_PAGE_0807/script.js
CHỨC NĂNG: Xử lý logic tương tác (Typing effect, Scroll Reveal, Mobile menu, Form Submission)
CHANGELOG:
- 11:45:00 08/07/2026: [NEW] Khởi tạo các hàm xử lý giao diện mượt mà và tích hợp Web3Forms (Lê Thanh Vân/Antigravity)
*/

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initTypingEffect();
    initScrollNavbar();
    initScrollReveal();
    initFormSubmission();
});

/**
 * 1. Mobile Navigation Menu Toggle
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });
}

/**
 * 2. Typing Effect for Tagline
 */
function initTypingEffect() {
    const textElement = document.getElementById('typing-text');
    if (!textElement) return;

    const words = [
        "Head of Sales & Design tại TLS",
        "Kỹ sư Xây dựng - NUCE K43",
        "Nhà phát triển Công cụ Tự động hóa",
        "Chuyên gia Kết cấu thép"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deleting is faster
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        // Word completed typing
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at full word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/**
 * 3. Dynamic Navbar Background & Active Links Track
 */
function initScrollNavbar() {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Scrolled header background
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link tracking on scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Offset for fixed nav
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * 4. Scroll Reveal Effect (Fade-in on Scroll)
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.section-reveal');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal once
            }
        });
    }, {
        threshold: 0.15, // Elements reveal when 15% visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
}

/**
 * 5. Handle Contact Form Submission (Web3Forms API)
 */
function initFormSubmission() {
    const form = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    if (!form || !formResult) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const accessKey = formData.get('access_key');

        formResult.textContent = "Đang gửi tin nhắn của bạn...";
        formResult.className = "form-result"; // Reset classes
        
        // MOCKUP MODE: Nếu key chưa được cấu hình, chạy giả lập thành công để không làm đứt mạch UX
        if (accessKey === 'YOUR_ACCESS_KEY_HERE') {
            setTimeout(() => {
                formResult.textContent = "Gửi thành công! (Chế độ demo: Vui lòng cấu hình Web3Forms Access Key thật trong index.html để nhận email thật).";
                formResult.classList.add('success');
                form.reset();
            }, 1000);
            return;
        }

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let res = await response.json();
            if (response.status == 200) {
                formResult.textContent = "Tin nhắn của bạn đã được gửi đi thành công! Cảm ơn anh.";
                formResult.classList.add('success');
                form.reset();
            } else {
                formResult.textContent = res.message || "Có lỗi xảy ra, vui lòng thử lại sau.";
                formResult.classList.add('error');
            }
        })
        .catch(error => {
            console.error('Submit Error:', error);
            formResult.textContent = "Kết nối thất bại. Vui lòng kiểm tra internet.";
            formResult.classList.add('error');
        });
    });
}
