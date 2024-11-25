const scrollCenter = document.querySelectorAll(".scroll-center");
const scrollEnd = document.querySelectorAll(".scroll-end");
window.addEventListener("load", () => {
	if (scrollCenter) {
		scrollCenter.forEach((element) => {
			scrollCenterBlock(element);
		});
	}

	if (scrollEnd) {
		scrollEnd.forEach((element) => {
			scrollEdnBloc(element);
		});
	}
});
window.addEventListener("resize", () => {
	if (scrollCenter) {
		scrollCenter.forEach((element) => {
			scrollCenterBlock(element);
		});
	}

	if (scrollEnd) {
		scrollEnd.forEach((element) => {
			scrollEdnBloc(element);
		});
	}
});

function scrollCenterBlock(elementScroll) {
	const middlePosition =
		(elementScroll.scrollWidth - elementScroll.clientWidth) / 2;
	elementScroll.scrollLeft = middlePosition;
}

function scrollEdnBloc(container) {
	const endPosition = container.scrollWidth - container.clientWidth;
	container.scrollLeft = endPosition;
}
