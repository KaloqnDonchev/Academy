var button = document.getElementById('button');
button.addEventListener('click', function () {
    const stringText = document.getElementById("txt-box").value;
    const array = stringText.split(",");
    for (var i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i], 10);
    }
    var arraySum = [];
    let diff = 0;
    for (var i = 0; i < array.length; i++) {
        var sumLeft = 0;
        var sumRight = 0;
        for (var j = 0; j < i; j++) {
            sumLeft += array[j];
        }
        for (var k = j + 1; k < array.length; k++) {
            sumRight += array[k];
        }
        if (sumLeft < sumRight) {
            diff = sumRight - sumLeft;
            arraySum.push(diff);
        } else {
            diff = sumLeft - sumRight;
            arraySum.push(diff);
        }
    }
    var index = 0;
    var lowestValue = arraySum[0];
    for (var i = 0; i < arraySum.length; i++) {
        if (arraySum[i] < lowestValue) {
            lowestValue = arraySum[i];
            index = i;
        }
    }
   document.getElementById("par").innerHTML += index;
})