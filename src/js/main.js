// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.object__tabs');

  if (!container) {
    return null
  }

  const tabButtons = document.querySelectorAll(".object__tabs-btn");
  const tabContents = document.querySelectorAll(".object__tabs-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tabName = button.getAttribute("data-tab-btn");

      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      // Add active class to the clicked button and corresponding content
      button.classList.add("active");
      document.querySelector(`.object__tabs-content[data-tab-content="${tabName}"]`).classList.add("active");
    });
  });
});


function objectGallerySlider() {
  const container = document.querySelector('.object__gallery');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".object__slider-thumbs", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,

    // Responsive breakpoints
    breakpoints: {

      // when window width is >= 767
      767: {
        direction: 'vertical',
      }
    }
  });

  const swiper2 = new Swiper(".object__slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    thumbs: {
      swiper: swiper,
    },
  });
}

objectGallerySlider();

document.addEventListener('DOMContentLoaded', () => {
  const tokenSelect = document.querySelector('.token-select');

  if (!tokenSelect) {
    return null
  }

  const tokenSelectButton = tokenSelect.querySelector('.token-select__selected');

  tokenSelectButton.addEventListener('click', (e) => {
    e.stopPropagation();
    tokenSelect.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!tokenSelect.contains(e.target)) {
      tokenSelect.classList.remove('active');
    }
  });

  tokenSelect.querySelectorAll('.token-select__item').forEach(item => {
    item.addEventListener('click', () => {
      tokenSelect.classList.remove('active');
    });
  });
});



const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});


customSelect('select');

new AirDatepicker('#datepicker');