function fibonacci() {
    let a = 1;
    let b = 0;
    let k = 0;
    const numbers = document.getElementById('txt-box').value;
    const array = [];
    for (let i = 0; i < numbers; i++) {
        array.push(a);
        k = a;
        a = a + b;
        b = k;
    }
    for (let i = 0; i < array.length; i++) {
        document.getElementById('par').innerHTML += array[i] + ' ';
    }
}