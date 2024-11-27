const scrollToBlock = () => {
	const btn = document.querySelectorAll(".--scroll");
	if (btn) {
		btn.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				let id = item.getAttribute("href").substring(1);
				let block = document.getElementById(id);

				if (block) {
					// Высчитываем координату, чтобы блок оказался по центру экрана
					let coordinaY =
						block.getBoundingClientRect().top +
						window.pageYOffset -
						100;

					// GSAP плавный скролл
					gsap.to(window, {
						scrollTo: coordinaY,
						duration: 2,
						ease: "power2.inOut",
					});
				}
			});
		});
	}
};

scrollToBlock();
