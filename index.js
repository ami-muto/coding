



document.querySelectorAll('.section-title').forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.classList.toggle('show');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((element) => observer.observe(element));
});




document.addEventListener("DOMContentLoaded", function () {
  const addressWrapper = document.querySelector(".address-wrapper");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      } else {
        entry.target.style.opacity = "0";
      }
    });
  }, { threshold: 0.2 });

  addressWrapper.style.transition = "opacity 0.5s ease-in-out";
  addressWrapper.style.opacity = "0";
  observer.observe(addressWrapper);
});

document.addEventListener("DOMContentLoaded", function () {
  const shopWrapper = document.querySelector(".shop-wrapper");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      } else {
        entry.target.style.opacity = "0";
      }
    });
  }, { threshold: 0.1 });

  shopWrapper.style.transition = "opacity 0.5s ease-in-out";
  shopWrapper.style.opacity = "0";
  observer.observe(shopWrapper);
});

/*スマホ用JS*/
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active"); // メニューの表示・非表示を切り替え
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: '.swiper-pagination' },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: { el: '.swiper-scrollbar' },
    breakpoints: {
      750: {
        slidesPerView: 2
      }
    }
  });
});

