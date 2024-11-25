const preload = document.querySelector(".preload");
if (preload) {
	const body = document.querySelector("body");
	body.classList.add("preload_fixed");
	window.onload = function () {
		preload.classList.add("--active");
		body.classList.remove("preload_fixed");
		setTimeout(() => {
			preload.style.display = "none";
		}, 3000);
	};
}