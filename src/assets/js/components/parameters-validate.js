const formInputs = document.querySelectorAll(".step__parameters-input");
const buttonNext = document.querySelector(".step__parameters .step__btn-next");
if (formInputs && buttonNext) {
	function handleInput(input, min, max) {
		const errorMessage = input.parentElement.querySelector(
			".step__parameters-error-message"
		);
		const maxLength = input.getAttribute("maxlength");

		input.addEventListener("input", () => {
			input.value = input.value.replace(/\D/g, ""); // Удаляем всё, кроме цифр

			// Ограничиваем длину ввода, если длина превышает maxlength
			if (input.value.length > maxLength) {
				input.value = input.value.slice(0, maxLength); // Обрезаем лишние символы
			}

			errorMessage.style.display = "none"; // Прячем сообщение об ошибке
			input.classList.remove("error");
		});

		input.addEventListener("blur", () => {
			const value = parseInt(input.value, 10);
			if (!value || value < min) {
				input.value = min; // Устанавливаем минимальное значение
			}
			if (value > max) {
				input.value = max; // Устанавливаем максимальное значение
			}
			if (!value || value < min || value > max) {
				let textError = `Введите значение от ${min} до ${max}`;
				if (input.classList.contains("age")) {
					textError = `Возрост должен быть указан в диапазоне от ${min} до ${max} лет.`;
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
			}

			checkAllInputsFilled();
		});
	}

	function showError(errorMessage, message) {
		if (errorMessage) {
			errorMessage.textContent = message;
			errorMessage.style.display = "block";
		}
	}

	function checkAllInputsFilled() {
		const allValid = Array.from(formInputs).every((input) => {
			const value = parseInt(input.value, 10);
			const min = parseInt(input.getAttribute("min"), 10);
			const max = parseInt(input.getAttribute("max"), 10);

			return value >= min && value <= max; // Проверка, что значение в допустимом диапазоне
		});

		buttonNext.disabled = !allValid; // Разблокируем кнопку, если все поля корректны
	}

	// Привязываем обработчики для каждого инпута
	formInputs.forEach((input) => {
		const min = parseInt(input.getAttribute("min"), 10);
		const max = parseInt(input.getAttribute("max"), 10);
		handleInput(input, min, max);
	});
}
