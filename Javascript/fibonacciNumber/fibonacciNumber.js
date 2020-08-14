function fibonacci() {
    var a = 1;
    var b = 0;
    var k = 0;
    var numbers = document.getElementById('txt-box').value;
    var array = [];
    for (var i = 0; i < numbers; i++) {
        array.push(a);
        k = a;
        a = a + b;
        b = k;
    }
    for (var i = 0; i < array.length; i++) {
        document.getElementById('par').innerHTML += array[i] + ' ';
    }
}