function parametrsValidate(parametrsWrapp) {
	const wrapp = document.querySelector(`${parametrsWrapp}`);
	if (wrapp) {
		const formInputs = wrapp.querySelectorAll(".step__parameters-input");
		const buttonNext = wrapp.querySelector(".step__parameters-btn");

		// Функция для обработки каждого инпута
		function handleInput(input, min, max) {
			const maxLength = input.getAttribute("maxlength");

			input.addEventListener("input", () => {
				input.value = input.value.replace(/\D/g, "");
				if (input.value.length > maxLength) {
					input.value = input.value.slice(0, maxLength);
				}
				checkAllInputsFilled();
			});

			// Обработка кнопки при клике
			input.addEventListener("blur", () => {
				const value = parseInt(input.value, 10);

				// Если значение не соответствует диапазону, заменяем его на минимальное или максимальное
				if (!value || value < min) {
					input.value = min;
				}
				if (value > max) {
					input.value = max;
				}
				checkAllInputsFilled();
			});
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
