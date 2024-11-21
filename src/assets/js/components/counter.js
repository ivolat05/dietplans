const startValue = 20000; // Начальное значение счётчика
const endValue = 99999; // Конечное значение
const duration = 5000; // Длительность анимации (мс)

// Функция для анимации счётчика
function animateCounter(element, start, end, duration) {
	const totalSteps = end - start; // Количество шагов
	const stepTime = duration / totalSteps; // Время на один шаг
	let currentValue = start;

	const interval = setInterval(() => {
		currentValue++;
		element.textContent = currentValue;

		if (currentValue >= end) {
			clearInterval(interval);
		}
	}, stepTime);
}

// Настройка IntersectionObserver
const counterSection = document.getElementById("counter-section");
const counterElement = document.getElementById("counter");
let hasStarted = false;
if (counterElement && counterSection) {
	const observer = new IntersectionObserver(
		(entries) => {
			const entry = entries[0];
			// Если блок пересекает нижнюю границу окна
			if (entry.isIntersecting && !hasStarted) {
				hasStarted = true; // Запускаем анимацию только один раз
				animateCounter(counterElement, startValue, endValue, duration);
			}
		},
		{
			rootMargin: `0px 0px 100% 0px`, // Настройка для отслеживания нижней границы
		}
	);

	// Наблюдаем за блоком
	observer.observe(counterSection);
}
