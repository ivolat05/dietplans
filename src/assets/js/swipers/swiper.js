const fastingSwiper = document.querySelector(".fasting-swiper");
const fastingSwiperConfig = {
	slidesPerView: 3,
	spaceBetween: 10,
	navigation: {
		nextEl: ".fasting__slide-next",
		prevEl: ".fasting__slide-prev",
	},
	//autoplay: {
	//delay: 5000,
	//},
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
