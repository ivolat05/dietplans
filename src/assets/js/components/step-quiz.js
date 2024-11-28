// квиз

function stepQuiz() {
	const btnControllStep = document.querySelectorAll(".step__btn");
	const allStep = document.querySelectorAll(".step__list-inner");
	const stepInputAll = document.querySelectorAll(".step__quest-input");
	//const step = document.querySelector(".header");
	//const step = document.querySelector(".page");
	const step = document.querySelector(".step");
	let count = 0;
	if (btnControllStep) {
		btnControllStep.forEach((btn) => {
			btn.addEventListener("click", () => {
				step.scrollIntoView({
					behavior: "auto",
					block: "start",
				});
				if (btn.classList.contains("step__btn-next")) {
					count += 1;
				}
				if (btn.classList.contains("step__btn-prev")) {
					count -= 1;
					if (count < 0) {
						count = 0;
					}
				}
				if (
					btn.classList.contains("step__parameters-btn") &&
					!btn.classList.contains("btn-error")
				) {
					count += 1;
				}
				nextStep(count);
				// прокручиваеть навигацию с кративным вопросом в лево если номер активного вопроса не помещеаеться на экран
				scrollActiveBlock();
			});
		});
	}

	if (stepInputAll) {
		stepInputAll.forEach((input) => {
			input.addEventListener("input", () => {
				const wrapp = input.closest(".step__list-inner");
				const btnNext = wrapp.querySelector(".step__btn-next");

				btnNext.removeAttribute("disabled");

				if (input.type === "radio") {
					step.scrollIntoView({
						behavior: "auto",
						block: "start",
					});
					count += 1;
					nextStep(count);
					// прокручиваеть навигацию с кративным вопросом в лево если номер активного вопроса не помещеаеться на экран
					scrollActiveBlock();
				}
				if (input.type === "checkbox") {
					const allInputs = wrapp.querySelectorAll("input");
					if (input.classList.contains("rezet")) {
						allInputs.forEach((checkbox) => {
							if (!checkbox.classList.contains("rezet")) {
								checkbox.checked = false;
							}
						});
					} else {
						// Если это обычный чекбокс, сбрасываем чекбокс с классом 'rezet'
						allInputs.forEach((checkbox) => {
							if (checkbox.classList.contains("rezet")) {
								checkbox.checked = false;
							}
						});
					}
					const hasChecked = Array.from(allInputs).some(
						(checkbox) => checkbox.checked
					);
					if (!hasChecked) {
						btnNext.setAttribute("disabled", "true");
					}
				}
			});
		});
	}

	function nextStep(count) {
		allStep.forEach((step) => {
			step.classList.remove("active");
		});
		allStep[count].classList.add("active");
		if (allStep[count].classList.contains("step__personal-plan")) {
			analiseAnimate();
		}
	}
}

stepQuiz();
