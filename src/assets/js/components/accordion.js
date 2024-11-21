// аккордион
const accordion = () => {
	const btn = document.querySelectorAll(".accordion-btn");
	if (btn) {
		btn.forEach((item) => {
			let accordionWrapp = item.closest(".accordion");

			if (item.classList.contains("--active")) {
				accordionActive(accordionWrapp);
			}
			item.addEventListener("click", () => {
				item.classList.toggle("--active");
				accordionActive(accordionWrapp);
			});
		});
	}
};
accordion();

function accordionActive(accordionWrapp) {
	if (accordionWrapp) {
		let panel = accordionWrapp.querySelector(".accordion__body");

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}
}
