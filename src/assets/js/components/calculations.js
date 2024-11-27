// расчеты и отоброжения инорфмации на странице результатов

/**
 * расчет индекс массы тела
 *
 * @param {number} [weight] -  масса в кг
 * @param {number} [height] -  рост в сантиметрах
 */
function bodyMassIndex(weight, height) {
	const htmlBodyMassIndex = document.querySelector(".body-mass-index");
	const inputFormIMT = document.getElementById("body-mass-index");
	const meter = +height / 100;
	if (meter && height) {
		let numberBodyMassIndex = (+weight / (+meter * +meter)).toFixed(2);
		htmlBodyMassIndex.innerHTML = `${numberBodyMassIndex} (${getWeightCategory(
			numberBodyMassIndex
		)})`;
		if (inputFormIMT) {
			inputFormIMT.value = numberBodyMassIndex;
		}
	}
}
function getWeightCategory(bmi) {
	if (bmi <= 16) {
		return "Выраженный дефицит массы тела";
	} else if (bmi > 16 && bmi <= 18.5) {
		return "Недостаточная (дефицит) масса тела";
	} else if (bmi > 18.5 && bmi <= 24.99) {
		return "Норма";
	} else if (bmi > 24.99 && bmi <= 30) {
		return "Избыточная масса тела (предожирение)";
	} else if (bmi > 30 && bmi <= 35) {
		return "Ожирение";
	} else if (bmi > 35 && bmi <= 40) {
		return "Ожирение резкое";
	} else if (bmi > 40) {
		return "Очень резкое ожирение";
	} else {
		return "Некорректное значение";
	}
}

/**
 * расчет рекомендуемое количество калорий
 *
 * @param {number} [weight] - масса в кг
 *  @param {number} [height] -  рост в сантиметрах
 *  @param {number} [age] -  возрост в годах
 * @param {number} [amr] -  AMR (активный метаболизм).
 * @param {string} [poll="w"] - пол передется "w" или "m",
 */

function recommendedAmountCalories(weight, height, age, amr = 1.2, poll = "w") {
	let BMR;
	const htmlContainer = document.querySelector(
		".recommended-amount-calories"
	);
	const inputCalories = document.getElementById("calories");
	if (poll == "w") {
		BMR = 447.593 + 9.247 * +weight + 3.098 * +height - 4.33 * +age;
	}
	if (poll == "m") {
		BMR = 88.362 + 13.397 * +weight + 4.799 * +height - 5.677 * +age;
	}
	if (htmlContainer) {
		htmlContainer.innerHTML = `${Math.round(BMR * amr)} Ккал`;
	}
	if (inputCalories) {
		inputCalories.value = Math.round(BMR * amr);
	}
}

/**
 * Рекомендуемое количество воды
 *
 * @param {number} [weight] -  масса в кг
 *
 */

function recommendedAmountWater(weight) {
	const htmlBlock = document.querySelector(".recommenderd-water");
	const inputWater = document.getElementById("water");
	let volumeWater;
	if (weight <= 40) volumeWater = 1.2;
	if (weight >= 41 && weight <= 45) volumeWater = 1.4;
	if (weight >= 46 && weight <= 50) volumeWater = 1.5;
	if (weight >= 51 && weight <= 55) volumeWater = 1.7;
	if (weight >= 56 && weight <= 60) volumeWater = 1.8;
	if (weight >= 61 && weight <= 65) volumeWater = 2.0;
	if (weight >= 66 && weight <= 70) volumeWater = 2.1;
	if (weight >= 71 && weight <= 75) volumeWater = 2.3;
	if (weight >= 76 && weight <= 80) volumeWater = 2.4;
	if (weight >= 81 && weight <= 85) volumeWater = 2.6;
	if (weight >= 86 && weight <= 90) volumeWater = 2.7;
	if (weight >= 91 && weight <= 95) volumeWater = 2.9;
	if (weight >= 96 && weight <= 100) volumeWater = 3.0;
	if (weight >= 101 && weight <= 110) volumeWater = 3.3;
	if (weight >= 111 && weight <= 120) volumeWater = 3.5;
	if (weight >= 121 && weight <= 125) volumeWater = 3.8;
	if (weight >= 126 && weight <= 135) volumeWater = 4.0;
	if (weight >= 136 && weight <= 145) volumeWater = 4.3;
	if (weight >= 146 && weight <= 155) volumeWater = 4.5;
	if (weight >= 156) volumeWater = 5.0;
	if (htmlBlock) {
		htmlBlock.innerHTML = `${volumeWater} литра`;
	}
	if (inputWater) {
		inputWater.value = volumeWater;
	}
}

/**
 *  отоброжения веса на картинке
 *
 * @param {number} [currentWeight] -Текущий вес в кг
 * @param {number} [desiredWeight] -  Желаемый вес в кг
 */

function calculateFinalWeight(currentWeight, desiredWeight) {
	const weightInfo = document.querySelector(".weight-info");
	const reducedWeight = currentWeight - currentWeight * 0.08;
	const finalWeight =
		reducedWeight < desiredWeight ? desiredWeight : reducedWeight;

	const pointer = document.querySelector(".rotate");
	if (pointer) {
		pointer.style.transform = `rotate(${(finalWeight / 300) * 360}deg)`;
	}
	if (weightInfo) {
		weightInfo.innerHTML = finalWeight;
	}
}
// отоброжение расчетов на станице
function renderCalculations(quizData) {
	if (quizData) {
		try {
			const pol = quizData["pol"]; // пол
			const age = +quizData["age"]; // возраст
			const height = +quizData["height"]; // рост
			const currentWeight = quizData["current-weight"]; // текущий вес
			const desiredWeight = quizData["desired-weight"]; // желаемый вес

			const inputPol = document.getElementById("pol");
			const inputAge = document.getElementById("age");
			const inputHeight = document.getElementById("height");
			const inputWeight = document.getElementById("weight");
			const inputDesiredWeight =
				document.getElementById("desired-weight");

			inputPol.value = pol === "m" ? "man" : "woman";
			inputAge.value = age;
			inputWeight.value = currentWeight;
			inputDesiredWeight.value = desiredWeight;
			inputHeight.value = height;

			// расчет индекса массы тела
			bodyMassIndex(currentWeight, height);

			// расчет рекомендуемого количества калорий
			recommendedAmountCalories(currentWeight, height, age, 1.2, pol);

			// расчет рекомендуемого количества воды
			recommendedAmountWater(currentWeight);

			// отображение веса на картинке
			calculateFinalWeight(currentWeight, desiredWeight);
		} catch (error) {
			console.error(
				"Ошибка в функции renderCalculations:",
				error.message
			);
		}
	}
}
