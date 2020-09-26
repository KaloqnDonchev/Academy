const button = document.getElementById('button');
const container = document.getElementById("container");
button.addEventListener('click', function () {
    fetch('https://api.chucknorris.io/jokes/random?category=animal')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(function (myJson) {
            const listElement = document.createElement("li");
            const quote = document.createTextNode(myJson.value);
            listElement.appendChild(quote);
            container.appendChild(listElement);
            const lastAdded = document.querySelector('span');
            lastAdded.textContent = quote.textContent;
        })
        .catch(() => {
            throw new Error('Invalid');
        });
});
