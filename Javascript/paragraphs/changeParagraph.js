function changePar() {
    var par = document.querySelectorAll('p');
    par.forEach((element, index) => {
        if (index % 2 == 0) {
            element.style.color = "red";
        } else {
            element.style.backgroundColor = "green";
        }
    })
}