function arraysMedian() {
    const stringText = document.getElementById("txt-box").value;
    let array = stringText.split(",");
    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i], 10);
    }
    const arraySum = [];
    let diff = 0;
    for (let i = 0; i < array.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j < i; j++) {
            sumLeft += array[j];
        }
        for (let k = j + 1; k < array.length; k++) {
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
    let index = 0;
    let lowestValue = arraySum[0];
    for (let i = 0; i < arraySum.length; i++) {
        if (arraySum[i] < lowestValue) {
            lowestValue = arraySum[i];
            index = i;
        }
    }
   document.getElementById("par").innerHTML += index;
})