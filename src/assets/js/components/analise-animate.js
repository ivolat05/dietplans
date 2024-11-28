function analiseAnimate() {
	// здесь вставить ссылку на которую необходимо переходить со страницы теста
	const redirectLink = "result.html";
	const leaves = document.querySelectorAll(".-leaves");
	const steps = document.querySelectorAll(".-steps");
	if (leaves && steps) {
		const counter = document.querySelector(".-counter-info");
		const btn = document.querySelector(".-step-btn-next");
		const totalLeaves = leaves.length;
		const totalSteps = steps.length;

		let progress = 0;

		function updateProgress() {
			if (progress <= 100) {
				const currentLeafIndex = Math.floor(
					(progress / 100) * totalLeaves
				);
				const currentStepIndex = Math.floor(
					(progress / 100) * totalSteps
				);

				// Обновляем листья
				leaves.forEach((leaf, index) => {
					if (index < currentLeafIndex) {
						leaf.classList.add("active"); // Лист становится зелёным
					} else {
						leaf.classList.remove("active"); // Лист серый
					}
				});

				// Обновляем шаги
				steps.forEach((step, index) => {
					if (index < currentStepIndex) {
						step.classList.add("active"); // Шаг становится зелёным
					} else {
						step.classList.remove("active"); // Шаг серый
					}
				});

				// Обновляем счётчик
				if (counter) {
					counter.textContent = `${progress}`;
				}

				progress++;

				if (progress == 100) {
					if (btn) {
						btn.classList.add("--active");
						// переход на страницу
						setTimeout(() => {
							window.location.replace(redirectLink);
						}, 3000);
						// переход на страницу
						btn.addEventListener("click", () => {
							window.location.replace(redirectLink);
						});
					}
				}
				setTimeout(updateProgress, 100); // Интервал анимации
			}
		}

		updateProgress();
	}
}
