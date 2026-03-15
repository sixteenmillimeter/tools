function adjustExposureTime(exposure, stops) {
    return exposure * Math.pow(2, stops);
}
function calculateExposure() {
    var exposure = parseFloat(document.getElementById('exposure').value);
    var stops = parseFloat(document.getElementById('stops').value);
    var adjusted = adjustExposureTime(exposure, stops);
    (document.getElementById('adjusted')).innerText = adjusted.toFixed(2);
    (document.getElementById('adjustedContainer')).classList.remove('hide');
}
