let pixelCount = 0;
let rCount = 0;
let gCount = 0;
let bCount = 0;

function getImageData() {
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	var img = document.getElementById('target-img');

	canvas.width = img.width;
	canvas.height = img.height;
	ctx.drawImage(img, 0, 0);

	// TODO: MAKE USE OF naturalWidth and naturalHeight

	for (let i = 0; i < canvas.width; i++) {
		for (let j = 0; j < canvas.height; j++) {
			const p = ctx.getImageData(i, j, 1, 1).data;
			pixelCount++;
			rCount += p[0];
			gCount += p[1];
			bCount += p[2];
		}
	}

	let r = Math.trunc(rCount / pixelCount);
	let g = Math.trunc(gCount / pixelCount);
	let b = Math.trunc(bCount / pixelCount);

	const avgColor = `rgb(${r} ${g} ${b})`;

	return avgColor;
}

window.addEventListener('DOMContentLoaded', () => {
	const imgData = getImageData();

	const avgColorDiv = document.querySelector('.avg-color');
	const avgColorText = document.querySelector('.avg-rgb');

	avgColorDiv.style.backgroundColor = imgData;
	avgColorText.innerText = imgData;
});
