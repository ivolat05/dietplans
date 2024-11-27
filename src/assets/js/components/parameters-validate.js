function parametrsValidate(parametrsWrapp) {
	const wrapp = document.querySelector(`${parametrsWrapp}`);
	if (wrapp) {
		const formInputs = wrapp.querySelectorAll(".step__parameters-input");
		const buttonNext = wrapp.querySelector(".step__parameters-btn");

		// Функция для обработки каждого инпута
		function handleInput(input, min, max) {
			const errorMessage = input.parentElement.querySelector(
				".step__parameters-error-message"
			);
			const maxLength = input.getAttribute("maxlength");

			input.addEventListener("input", () => {
				input.value = input.value.replace(/\D/g, "");
				if (input.value.length > maxLength) {
					input.value = input.value.slice(0, maxLength);
				}

				checkAllInputsFilled();

				// Валидация
				if (input.classList.contains("error")) {
					buttonNext.disabled = true;
					if (
						input.value &&
						input.value >= min &&
						input.value <= max
					) {
						errorMessage.style.display = "none";
						input.classList.remove("error");

						// Проверяем, что нет ошибок у всех полей
						if (document.querySelectorAll(".error").length === 0) {
							buttonNext.disabled = false;
							buttonNext.classList.remove("btn-error");
						}
					}
				}
			});

			// Обработка кнопки при клике
			buttonNext.addEventListener("click", () => {
				const value = parseInt(input.value, 10);

				// Если значение не соответствует диапазону, заменяем его на минимальное или максимальное
				if (!value || value < min) {
					input.value = min;
				}
				if (value > max) {
					input.value = max;
				}

				// Показываем ошибку, если значение выходит за пределы диапазона
				if (!value || value < min || value > max) {
					let textError = `Введите значение от ${min} до ${max}`;
					if (input.classList.contains("age")) {
						textError = `Возраст должен быть указан в диапазоне от ${min} до ${max} лет.`;
					}
					if (input.classList.contains("height")) {
						textError = `Рост должен быть указан в диапазоне от ${min} до ${max} см.`;
					}
					if (input.classList.contains("current-weight")) {
						textError = `Текущий вес должен быть указан в диапазоне от ${min} до ${max} кг.`;
					}
					if (input.classList.contains("desired-weight")) {
						textError = `Желаемый вес должен быть указан в диапазоне от ${min} до ${max} кг.`;
					}
					showError(errorMessage, textError);
					input.classList.add("error");
					buttonNext.disabled = true;
					buttonNext.classList.add("btn-error");
				}
			});
		}

		// Функция для отображения ошибки
		function showError(errorMessage, message) {
			if (errorMessage) {
				errorMessage.textContent = message;
				errorMessage.style.display = "block";
			}
		}

		// Функция для проверки, что все инпуты заполнены
		function checkAllInputsFilled() {
			const inputValueValidat = Array.from(formInputs).some((input) => {
				return !input.value;
			});

			// Если есть пустые поля, кнопка отключена
			buttonNext.disabled = inputValueValidat;
		}

		// Привязываем обработчики для каждого инпута
		formInputs.forEach((input) => {
			const min = parseInt(input.getAttribute("min"), 10);
			const max = parseInt(input.getAttribute("max"), 10);
			handleInput(input, min, max);
		});
	}
}

parametrsValidate(".step__parameters");
