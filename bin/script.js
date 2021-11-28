const carouselItems = document.getElementsByClassName("carousel-item");
let itemPosition = 0;
const totalItems = carouselItems.length;
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

btnPrev.addEventListener("click", function (event) {
	//move to previous slide
	hideSlides();

	if (itemPosition === 0) {
		itemPosition = totalItems - 1;
	} else {
		itemPosition--;
	}
	console.log(itemPosition);
	carouselItems[itemPosition].classList.add("visible");
});

btnNext.addEventListener("click", function (event) {
	//move to next slide
	hideSlides();

	if (itemPosition === totalItems - 1) {
		itemPosition = 0;
	} else {
		itemPosition++;
	}
	console.log(itemPosition);
	carouselItems[itemPosition].classList.add("visible");
});

function hideSlides() {
	for (let slide of carouselItems) {
		slide.classList.remove("visible");
		slide.classList.add("hidden");
	}
}

console.log("working...");
