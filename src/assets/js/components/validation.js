// validation
const form = document.getElementById("#form-access");
if (form) {
	const validation = new JustValidate(form, {
		errorLabelCssClass: "error", // Добавляет класс ошибок
	});

	// Получаем все input для обработки
	const inputs = form.querySelectorAll("input");

	inputs.forEach((input) => {
		const fieldId = `#${input.id}`;
		const fieldRules = [];

		// Устанавливаем правила валидации для каждого input
		if (input.type === "email") {
			fieldRules.push(
				{
					rule: "required",
					errorMessage: "Поле обязательно для заполнения!",
				},
				{ rule: "email", errorMessage: "Введите корректный email!" }
			);
		} else if (input.type === "text") {
			fieldRules.push(
				{
					rule: "required",
					errorMessage: "Поле обязательно для заполнения!",
				},
				{
					rule: "minLength",
					value: 3,
					errorMessage: "Минимум 3 символов!",
				}
			);
		} else if (input.type === "checkbox") {
			fieldRules.push({
				rule: "required",
				errorMessage: "Вы должны принять условия!",
			});
		}

		// Применяем правила только если они есть для этого input
		if (fieldRules.length) {
			validation.addField(fieldId, fieldRules);
		}
	});

	// validation.onSuccess((event) => {
	// 	event.preventDefault(); // Отключаем стандартное поведение формы
	// 	alert("Форма успешно отправлена!");
	// });
}