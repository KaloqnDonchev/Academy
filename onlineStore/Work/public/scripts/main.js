/* eslint-disable no-undef */
const currency = document.querySelector('.currency');

currency.addEventListener('change', (event) => {
  const price = document.querySelector('.price').value;
  const convertedPrice = ((price / event.target.value) * 4.1);
  document.querySelector('.price').innerHTML = convertedPrice;
  document.querySelector('.price-currency').innerHTML = event.target.options[event.target.selectedIndex].text;
});
