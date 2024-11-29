const fastingSwiper = document.querySelector(".fasting-swiper");
const fastingSwiperConfig = {
	slidesPerView: 3,
	spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: ".fasting__slide-prev",
		prevEl: ".fasting__slide-next",
	},
	autoplay: {
		delay: 3000,
		reverseDirection: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},
};

const reviewsSwiper = document.querySelector(".reviews-swiper");
const reviewsSwiperConfig = {
	slidesPerView: 4,
	spaceBetween: 10,
	loop: true,
	preventClicks: true,
	threshold: 15,
	touchRatio: 0.3,
	preventClicksPropagation: false,
	navigation: {
		nextEl: ".reviews__slide-prev",
		prevEl: ".reviews__slide-next",
	},
	on: {
		slideChange: () => {
			openModalWindow(); // Вызов вашей функции при смене слайда
		},
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		660: {
			slidesPerView: 2,
			spaceBetween: 60,
		},
		998: {
			slidesPerView: 3,
			spaceBetween: 60,
		},
		1300: {
			slidesPerView: 4,
			spaceBetween: 60,
		},
	},
};

const nutritionSwiper = document.querySelector(".nutrition__swiper");
const nutritionSwiperConfig = {
	slidesPerView: 4,
	spaceBetween: 10,

	breakpoints: {
		320: {
			slidesPerView: 1.5,
			spaceBetween: 40,
		},
		660: {
			slidesPerView: 2.5,
			spaceBetween: 30,
		},
		998: {
			slidesPerView: 3.2,
			spaceBetween: 40,
		},
		1300: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	},
};

/**
 * Функция для инициализации Swiper
 * @param {HTMLElement} swiperElement - Элемент DOM для Swiper
 * @param {Object} config - Конфигурация для Swiper
 */
function swiperInstal(swiperElement, config) {
	if (swiperElement) {
		try {
			new Swiper(swiperElement, config);
		} catch (error) {
			console.error("Failed to initialize Swiper:", error);
		}
	}
}
swiperInstal(fastingSwiper, fastingSwiperConfig);
swiperInstal(reviewsSwiper, reviewsSwiperConfig);
swiperInstal(nutritionSwiper, nutritionSwiperConfig);
