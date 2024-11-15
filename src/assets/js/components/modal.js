function modalOpen(btnClick) {
	let dataAtr = btnClick.getAttribute("data-open-modal");
	let idBox = document.getElementById(dataAtr);
	idBox.classList.add("--active");
}

function htmlRootLock(htmlRoot) {
	htmlRoot.classList.add("_fixed");
}

function htmlRootUnlock(htmlRoot) {
	htmlRoot.classList.remove("_fixed");
}

function modalCloseWindow(modalBacground) {
	modalBacground.forEach((e) => {
		e.classList.remove("--active");
	});
}

// открытия модальных окон
function openModalWindow() {
	const btn = document.querySelectorAll("[data-open-modal]");
	const modalBacground = document.querySelectorAll(".modal-background");
	if (btn && modalBacground) {
		const htmlRoot = document.querySelector("html");
		const btnClose = document.querySelectorAll(".btn__modal--close");

		btn.forEach((item) => {
			item.addEventListener("click", () => {
				htmlRootLock(htmlRoot);
				modalCloseWindow(modalBacground);
				modalOpen(item);
			});
		});

		btnClose.forEach((button) => {
			button.addEventListener("click", () => {
				htmlRootUnlock(htmlRoot);
				modalCloseWindow(modalBacground);
			});
		});

		document.addEventListener("click", function (event) {
			if (
				!event.target.closest(".modal__container") &&
				!event.target.closest("[data-open-modal]")
			) {
				htmlRootUnlock(htmlRoot);
				modalCloseWindow(modalBacground);
			}
		});
	}
}
openModalWindow();
