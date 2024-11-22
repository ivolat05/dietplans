fsLightbox.props.onOpen = function () {
	const video = document.querySelector(".fslightbox-container video");
	if (video) {
		if (video.muted) {
			video.muted = false;
		}

		video.play();
	}
};
fsLightbox.props.onClose = function () {
	const video = document.querySelector(".fslightbox-container video");
	if (video) {
		video.pause();
	}
};
