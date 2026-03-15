
function adjustExposureTime (exposure, stops) {
	return exposure * Math.pow(2, stops);
}

function calculateExposure () {
	const exposure : number = parseFloat((document.getElementById('exposure') as HTMLInputElement).value);
	const stops : number = parseFloat((document.getElementById('stops') as HTMLInputElement).value);
	const adjusted : number = adjustExposureTime(exposure, stops);

	(document.getElementById('adjusted')).innerText = adjusted.toFixed(2);
	(document.getElementById('adjustedContainer')).classList.remove('hide');
}