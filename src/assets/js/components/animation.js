const paralaxAnimBloclk = document.querySelectorAll(".anim-block-1");
const paralaxAnimBloclkTwo = document.querySelectorAll(".anim-block-2");
const paralaxAnimBloclkThree = document.querySelectorAll(".anim-block-3");

paralaxAnimation(paralaxAnimBloclk, 0.01, 1, -1);
paralaxAnimation(paralaxAnimBloclkTwo, 0.01, -1, -1);
paralaxAnimation(paralaxAnimBloclkThree, 0.001, -1, 1);
/**
 * Анимация параллакса для элементов на странице с использованием GSAP.
 *
 * @param {HTMLElement[]} animationElementAll - Массив элементов, которые нужно анимировать.
 * @param {number} [amplitude=0.01] - Амплитуда параллакса, определяет степень смещения элементов. Чем больше значение, тем сильнее эффект.
 * @param {number} [orientirX=1] - Направление смещения по оси X относительно курсора. Может быть `1` (стандартное направление) или `-1` (инверсия).
 * @param {number} [orientirY=1] - Направление смещения по оси Y относительно курсора. Может быть `1` (стандартное направление) или `-1` (инверсия).
 */

function paralaxAnimation(
	animationElementAll,
	amplitude = 0.01,
	orientirX = 1,
	orientirY = 1
) {
	if (animationElementAll && animationElementAll.length > 0) {
		let requestId = null;

		document.addEventListener("mousemove", (e) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;

			if (!requestId) {
				requestId = requestAnimationFrame(() => {
					animationElementAll.forEach((animationElement) => {
						gsap.to(animationElement, {
							x:
								orientirX *
								(mouseX - window.innerWidth / 2) *
								amplitude,
							y:
								orientirY *
								(mouseY - window.innerHeight / 2) *
								amplitude,
							ease: "power2.out",
							duration: 0.3,
						});
					});
					requestId = null;
				});
			}
		});
	}
}

// main animation

const trigerMain = document.querySelector(".main__row");
const mainBox = document.querySelectorAll(".main__row-box");
if (trigerMain && mainBox) {
	const mainAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerMain,
			start: "top center",
		},
	});

	mainBox.forEach((box) => {
		mainAnimategroup.to(box, {
			y: "0",
			opacity: 1,
			duration: 0.5,
		});
	});
}

// solution animation
const trigerSolution = document.querySelector(".solution");
if (trigerSolution) {
	const leftPanel = document.querySelector(".soluton__wrapp");
	const rightPanel = document.querySelector(".solution__list-container");
	if (leftPanel) {
		gsap.to(leftPanel, {
			x: "0",
			opacity: 1,
			duration: 2,
			scrollTrigger: {
				trigger: trigerSolution,
				start: "top center",
			},
		});
	}
	if (rightPanel) {
		gsap.to(rightPanel, {
			opacity: 1,
			x: "0",
			duration: 2,
			scrollTrigger: {
				trigger: trigerSolution,
				start: "top center",
			},
		});
	}
}

//wish animation
const trigerWish = document.querySelector(".wish");
if (trigerWish) {
	const wishImg = document.querySelector(".wish__row-img");
	const wishBoxAll = document.querySelectorAll(".wish__list-inner");
	const wishWrapp = document.querySelector(".wish-wrapp");
	const wishTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: trigerSolution,
			start: "top top",
		},
	});
	if (wishImg) {
		wishTimeline.to(wishImg, {
			opacity: 1,
			duration: 1,
		});
	}
	if (wishBoxAll) {
		wishBoxAll.forEach((wishBox) => {
			wishTimeline.to(wishBox, {
				x: "0",
				opacity: 1,
				duration: 0.5,
			});
		});
	}
	if (wishWrapp) {
		wishTimeline.to(wishWrapp, {
			opacity: 1,
			scale: 1,
			duration: 0.5,
		});
	}
}

// fasting animation
const fastingTop = document.querySelector(".fasting-top");
const trigerFastingTop = document.querySelector(".fasting");
if (fastingTop && trigerFastingTop) {
	gsap.to(fastingTop, {
		y: "0",
		opacity: 1,
		duration: 0.7,
		scrollTrigger: {
			trigger: trigerFastingTop,
			start: "top center",
		},
	});
}

const trigerBlock = document.querySelector(".fasting-bottom ");
const arrowClock = document.querySelector(".fasting-svg-arrow");
if (trigerBlock && arrowClock) {
	const clockAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerBlock,
			start: "top center",
		},
	});
	clockAnimategroup.to(".fasting-bottom-title", {
		x: "0",
		opacity: 1,
		duration: 0.5,
	});
	clockAnimategroup.to(".fasting__list-check", {
		x: "0",
		opacity: 1,
		duration: 0.5,
	});

	clockAnimategroup.to(".fasting-scales", {
		scale: 1,
		duration: 0.5,
	});
	clockAnimategroup.to(".fasting-bottom-footer", {
		x: "0",
		opacity: 1,
		duration: 0.5,
	});
	clockAnimategroup.to(".fasting-svg-arrow", {
		transformOrigin: "bottom right",
		rotation: -100,
		duration: 4,
	});
}

// animate diet
const trigerBlockDiet = document.querySelector(".diet");
if (trigerBlockDiet) {
	const dietTitle = document.querySelector(".diet-title");
	const dietBtns = document.querySelector(".diet-btn-row");
	const dietListInner = document.querySelectorAll(".diet-list-inner");

	const dietAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerBlockDiet,
			start: "top center",
		},
	});

	if (dietTitle) {
		dietAnimategroup.to(dietTitle, {
			y: "0",
			opacity: 1,
			duration: 0.5,
		});
	}
	if (dietBtns) {
		dietAnimategroup.to(dietBtns, {
			x: "0",
			opacity: 1,
			duration: 0.5,
		});
	}
	if (dietListInner) {
		dietListInner.forEach((inner) => {
			dietAnimategroup.to(inner, {
				y: "0",
				opacity: 1,
				duration: 0.5,
			});
		});
	}
}

//animate questions

const questionsBlockDiet = document.querySelector(".questions-title");
if (questionsBlockDiet) {
	const questionsTitle = document.querySelector(".questions-title");

	const questionsAcc = document.querySelectorAll(".questions__accordion");

	const questionsAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: questionsBlockDiet,
			start: "top center",
		},
	});

	if (questionsTitle) {
		questionsAnimategroup.to(questionsTitle, {
			y: "0",
			opacity: 1,
			duration: 0.5,
		});
	}

	if (questionsAcc) {
		questionsAcc.forEach((inner) => {
			questionsAnimategroup.to(inner, {
				y: "0",
				opacity: 1,
				duration: 0.5,
			});
		});
	}
}

// reivews animate
const reviewsAnimate = document.querySelector(".reviews-animate");
const trigerReviews = document.querySelector(".reviews");
if (trigerReviews && reviewsAnimate) {
	gsap.to(reviewsAnimate, {
		opacity: 1,
		duration: 3,
		scrollTrigger: {
			trigger: trigerReviews,
			start: "top center",
		},
	});
}

// Анимация для чисел
const animateNumbers = (element, target) => {
	gsap.to(element, {
		innerText: target,
		duration: 1.5,
		ease: "power1.out",
		snap: { innerText: 1 }, // Округляем до целых чисел
		onUpdate: function () {
			element.textContent = Math.floor(element.innerText);
		},
	});
};

// Анимация для прогресс-бара
const progressBars = document.querySelectorAll(".progress-item");
if (progressBars) {
	progressBars.forEach((item) => {
		const numberElement = item.querySelector(".progress-number");
		const progressFill = item.querySelector(".progress-fill");
		const targetValue = parseInt(
			numberElement.getAttribute("data-target"),
			10
		);
		const fillPercent = targetValue === 16 ? "80%" : "40%"; // Устанавливаем ширину вручную

		ScrollTrigger.create({
			trigger: item,
			start: "top 80%",
			onEnter: () => {
				// Анимация заполнения чисел
				animateNumbers(numberElement, targetValue);

				// Анимация заполнения прогресс-бара
				gsap.to(progressFill, {
					width: fillPercent,
					duration: 1.5,
					ease: "power1.out",
				});
			},
		});
	});
}
