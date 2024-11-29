/**
 * Обратный отсчет
 *
 * @param {idTimerElement} idTimerElement - id таймера
 * @param {minut} [minut] - количиство минут для обратного отсчета
 *  @param {string} [nameLocal] - имя для сохранения локальной истоприи

 */
function timer(minut, idTimerElement, nameLocal = "timerStart") {
	const TIMER_DURATION = minut * 60 * 1000; // 20 минут в миллисекундах
	const timerElement = document.getElementById(`${idTimerElement}`);

	if (timerElement) {
		startCountdown();
	}

	function startCountdown() {
		const now = Date.now();
		let startTime = localStorage.getItem(nameLocal);

		if (!startTime || now - startTime > TIMER_DURATION) {
			startTime = now;
			localStorage.setItem(nameLocal, startTime);
		}

		function updateTimer() {
			const timeElapsed = Date.now() - startTime;
			const timeRemaining = Math.max(0, TIMER_DURATION - timeElapsed);

			if (timeRemaining === 0) {
				clearInterval(timerInterval);
			}

			const minutes = Math.floor(timeRemaining / (60 * 1000));
			const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

			timerElement.textContent = `${String(minutes).padStart(
				2,
				"0"
			)}:${String(seconds).padStart(2, "0")}`;
		}

		updateTimer();
		const timerInterval = setInterval(updateTimer, 1000);
	}
}

timer(20, "timer", "timerStart");
timer(20, "timer-2", "timerStart-2");
