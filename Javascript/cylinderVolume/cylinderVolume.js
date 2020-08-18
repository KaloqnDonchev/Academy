function cylinderVolume() {
    let volume;
    const radiusElement = document.getElementById('radius');
    const heightElement = document.getElementById('height');
    const volumeElement = document.getElementById('volume');

    if (volumeElement && heightElement && radiusElement) {
        const radius = radiusElement.value;
        const height = heightElement.value;
        volume = (Math.PI * (radius * radius) * height).toFixed(4);
        volumeElement.value = volume;
    } else {
        const error = document.querySelector('.error');
        error.innerHTML = 'Wrong input';
        throw new Error('Wrong input');
    }
}