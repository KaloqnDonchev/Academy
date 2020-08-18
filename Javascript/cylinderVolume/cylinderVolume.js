function cylinderVolume() {
    const pi = 3.14;
    var volume;
    var radius = document.getElementById('radius').value;
    var height = document.getElementById('height').value;
    volume = pi * (radius * radius) * height;
    document.getElementById('volume').value = volume;
}