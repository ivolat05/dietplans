function dataCollectionQuiz() {
	const btnAll = document.querySelectorAll(".step__parameters-btn");

	if (btnAll) {
		btnAll.forEach((btn) => {
			btn.addEventListener("click", () => {
				const wrapp = document.querySelector(".step__parameters");
				if (!wrapp) return;

				const allInput = wrapp.querySelectorAll("input");
				const urlParams = new URLSearchParams(window.location.search);
				const polValue = urlParams.get("pol");
				let dataQuiz = {};

				dataQuiz["pol"] = polValue ? polValue : "w";

				allInput.forEach((input) => {
					const name = input.name.trim();
					const value = input.value.trim();
					if (name && value) {
						dataQuiz[name] = value;
					}
				});
				localStorage.removeItem("quizData");
				localStorage.setItem("quizData", JSON.stringify(dataQuiz));
			});
		});
	}
}
dataCollectionQuiz();
