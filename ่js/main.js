/* js/main.js */

// ========================================
// SECURITY CONFIGURATION
// ========================================
const SECURITY_CONFIG = {
    SUBMIT_COOLDOWN: 60000,
    MIN_FORM_FILL_TIME: 3000,
    MAX_ATTEMPTS: 5
};

let formLoadTime = Date.now();
let suspiciousActivity = { rapidClicks: 0, lastClickTime: 0 };

// ========================================
// INPUT SANITIZATION
// ========================================
function sanitizeInput(input) {
    if (!input) return '';
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML.substring(0, 1000).trim();
}

// ========================================
// VALIDATION
// ========================================
function validateName(name) {
    const nameRegex = /^[ก-๙a-zA-Z\s]+$/;
    const spamWords = ['test', 'xxx', 'admin', 'spam', 'bot'];
    const sanitized = name.toLowerCase().trim();
    if (spamWords.some(word => sanitized.includes(word))) return false;
    return nameRegex.test(name);
}

function validatePhone(phone) {
    const phoneRegex = /^0[689]\d{8}$/;
    const cleanPhone = phone.replace(/[-\s]/g, '');
    if (/^(\d)\1+$/.test(cleanPhone)) return false;
    return phoneRegex.test(cleanPhone);
}

function validateMessage(message) {
    const trimmed = message.trim();
    if (trimmed.length < 10) return false;
    return true;
}

// ========================================
// BOT DETECTION
// ========================================
function detectBot() {
    const form = document.getElementById('contactForm');
    if (form.website && form.website.value !== '') return true; // Honeypot
    const fillTime = Date.now() - formLoadTime;
    if (fillTime < SECURITY_CONFIG.MIN_FORM_FILL_TIME) return true;
    return false;
}

// ========================================
// PHONE REVEAL
// ========================================
function initPhoneReveal() {
    const phoneDisplay = document.getElementById('phoneDisplay');
    if (!phoneDisplay) return;
    
    phoneDisplay.style.cursor = 'pointer';
    phoneDisplay.addEventListener('click', function() {
        const now = Date.now();
        if (now - suspiciousActivity.lastClickTime < 500) {
            suspiciousActivity.rapidClicks++;
            if (suspiciousActivity.rapidClicks > 3) return;
        } else {
            suspiciousActivity.rapidClicks = 0;
        }
        suspiciousActivity.lastClickTime = now;
        
        this.textContent = "093-694-2456";
        this.style.cursor = 'default';
        this.style.color = '#D72638';
        this.style.fontWeight = 'bold';
    }, { once: true });
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.getElementById('navLinks');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ========================================
// FORM SUBMISSION
// ========================================
async function handleFormSubmit(event) {
    event.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    const alertSuccess = document.getElementById('alertSuccess');
    const alertError = document.getElementById('alertError');
    const form = event.target;
    
    // reCAPTCHA check
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        alert("กรุณาติ๊กยืนยันว่าคุณไม่ใช่บอท");
        return false;
    }
    
    if (detectBot()) { grecaptcha.reset(); return false; }

    const attemptCount = parseInt(localStorage.getItem('kp_attempt_count') || '0');
    if (attemptCount >= SECURITY_CONFIG.MAX_ATTEMPTS) {
        alertError.textContent = '❌ ส่งเกินกำหนด กรุณาโทรติดต่อ';
        alertError.classList.add('show');
        return false;
    }

    const name = sanitizeInput(form.from_name.value);
    const phone = sanitizeInput(form.phone.value);
    const service = sanitizeInput(form.service.value);
    const message = sanitizeInput(form.message.value);
    
    if (!validateName(name) || !validatePhone(phone) || !validateMessage(message)) {
        alertError.textContent = '❌ ข้อมูลไม่ถูกต้อง';
        alertError.classList.add('show');
        return false;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'กำลังส่ง...';
    
    const templateParams = { from_name: name, phone: phone, service: service, message: message, 'g-recaptcha-response': recaptchaResponse };
    
    emailjs.send('service_liwyg8j', 'template_qfqgy9o', templateParams)
        .then(() => {
            alertSuccess.classList.add('show');
            alertError.classList.remove('show');
            form.reset();
            grecaptcha.reset();
            submitBtn.innerHTML = 'ส่งสำเร็จ';
            localStorage.setItem('kp_attempt_count', (attemptCount + 1).toString());
            setTimeout(() => { submitBtn.disabled = false; submitBtn.innerHTML = 'ส่งข้อความ'; alertSuccess.classList.remove('show'); }, 5000);
        })
        .catch((err) => {
            console.error(err);
            alertError.textContent = '❌ ส่งไม่ผ่าน ลองใหม่อีกครั้ง';
            alertError.classList.add('show');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'ส่งข้อความ';
        });
}

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("HBnjcsrLCtxKOiSBP");
    initMobileMenu();
    initPhoneReveal();
    formLoadTime = Date.now();
    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);
});