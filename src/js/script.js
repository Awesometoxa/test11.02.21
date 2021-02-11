window.addEventListener('DOMContentLoaded', () => {
    
    // Sliders

    if (window.screen.width > 992) {
        const reviewSlider = new Swiper('._customer-reviews__slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '._customer-reviews__nextBtn',
                prevEl: '._customer-reviews__prevBtn',
            },
            loop: true
        });
        
        const partnersSlider = new Swiper('._customer-partners__slider', {
            slidesPerView: 5,
            navigation: {
                nextEl: '._customer-partners__nextBtn',
                prevEl: '._customer-partners__prevBtn',
            },
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            mousewheel: {
                sensitivity: 1
            }
        });
    } else if ((window.screen.width <= 991) && (window.screen.width > 576)) {
        const reviewSlider = new Swiper('._customer-reviews__slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '._customer-reviews__nextBtn',
                prevEl: '._customer-reviews__prevBtn',
            },
            loop: true
        });
        
        const partnersSlider = new Swiper('._customer-partners__slider', {
            slidesPerView: 3,
            navigation: {
                nextEl: '._customer-partners__nextBtn',
                prevEl: '._customer-partners__prevBtn',
            },
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            mousewheel: {
                sensitivity: 1
            }
        });
    } else {
        const reviewSlider = new Swiper('._customer-reviews__slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '._customer-reviews__nextBtn',
                prevEl: '._customer-reviews__prevBtn',
            },
            loop: true
        });
        
        const partnersSlider = new Swiper('._customer-partners__slider', {
            // slidesPerView: 1,
            navigation: {
                nextEl: '._customer-partners__nextBtn',
                prevEl: '._customer-partners__prevBtn',
            },
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            mousewheel: {
                sensitivity: 1
            }
        });
    }

    // Modal
    const overlay = document.querySelector('._customer-overlay');
    const modalForm = document.querySelector('._customer-form');
    const closeModalBtn = document.querySelector('._customer-modal__close');
    const openModalBtn = document.querySelector('#_customer-open-modal');
    const thansText = document.querySelector('._customer-modal__thanks-text');

    function showModal() {
        overlay.style.display = 'block';
        document.body.style.overflow = "hidden";
    }

    function hideModal() {
        overlay.style.display = 'none';
        document.body.style.overflow = "";
        thansText.textContent = ''
    }

    openModalBtn.addEventListener('click', showModal);

    closeModalBtn.addEventListener('click', hideModal);
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        thansText.textContent = 'Ваша заявка отправлена! Мы скоро свяжемся с Вами!';
        setTimeout(hideModal, 2000);
    });

    overlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('_customer-overlay')){
            hideModal();
        }
    });




});