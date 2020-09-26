var button = document.querySelector('.button');
button.addEventListener('click', function () {
    var stringText = document.getElementById('input').value;
    var stringArray = stringText.split(",");
    var array = stringArray.map((element) => {
        if (isNaN(element)) {
            document.getElementById('fill').innerHTML = "Wrong input";
            throw new Error();

        } else {
            return parseInt(element, 10)
        }
    })
    var max = Math.max.apply(null, array);
    array.splice(array.indexOf(max), 1);
    max = Math.max.apply(null, array);
    array.splice(array.indexOf(max), 1);
    max = Math.max.apply(null, array);
    document.getElementById('fill').innerHTML = max;
})