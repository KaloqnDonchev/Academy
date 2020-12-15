/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */

// currency conversion
const currency = document.querySelector('.currency');

if (currency) {
  currency.addEventListener('change', (event) => {
    const price = document.querySelector('.price').value;
    const convertedPrice = ((price / event.target.value) * 4.1);
    document.querySelector('.price').innerHTML = convertedPrice.toFixed(2);
    document.querySelector('.price-currency').innerHTML = event.target.options[event.target.selectedIndex].text;
    if (event.target.options[event.target.selectedIndex].text === 'USD') {
      document.querySelector('.price').innerHTML = price;
    }
  });
}


// mobile filter button

const mobileFilter = document.querySelector('.mobile-filter');
const plpWrapper = document.querySelector('.plp-wrapper');
const filterButton = document.querySelector('.filter-button');
const loginBar = document.querySelector('.login-bar');
const mobileSearchFilterNav = document.querySelector('.mobile-search-filter-nav');


if (filterButton) {
  filterButton.addEventListener('click', () => {
    plpWrapper.style.display = 'none';
    loginBar.style.display = 'none';
    mobileSearchFilterNav.style.display = 'none';
    mobileFilter.style.display = 'block';
  });
}

// filter drowpdowns


const activityButton = document.querySelector('.activity-filter-btn');
const activityDropdown = document.querySelector('.activity-dropdown');
const priceButton = document.querySelector('.price-filter-btn');
const priceDropdown = document.querySelector('.price-dropdown');
const colorButton = document.querySelector('.color-filter-btn');
const colorDropdown = document.querySelector('.color-dropdown');
const sizeButton = document.querySelector('.size-filter-btn');
const sizeDropdown = document.querySelector('.size-dropdown');
const arrow = document.querySelectorAll('.arrow');


if (activityButton) {
  activityButton.addEventListener('click', () => {
    if (activityDropdown.style.display === 'none') {
      activityDropdown.style.display = 'block';
      arrow[1].classList.remove('arrow-down');
      arrow[1].classList.add('arrow-up');
    } else {
      activityDropdown.style.display = 'none';
      arrow[1].classList.add('arrow-down');
      arrow[1].classList.remove('arrow-up');
    }
  });
}

if (priceButton) {
  priceButton.addEventListener('click', () => {
    if (priceDropdown.style.display === 'none') {
      priceDropdown.style.display = 'block';
      arrow[4].classList.remove('arrow-down');
      arrow[4].classList.add('arrow-up');
    } else {
      priceDropdown.style.display = 'none';
      arrow[4].classList.add('arrow-down');
      arrow[4].classList.remove('arrow-up');
    }
  });
}

if (colorButton) {
  colorButton.addEventListener('click', () => {
    if (colorDropdown.style.display === 'none') {
      colorDropdown.style.display = 'block';
      arrow[5].classList.remove('arrow-down');
      arrow[5].classList.add('arrow-up');
    } else {
      colorDropdown.style.display = 'none';
      arrow[5].classList.add('arrow-down');
      arrow[5].classList.remove('arrow-up');
    }
  });
}

if (sizeButton) {
  sizeButton.addEventListener('click', () => {
    if (sizeDropdown.style.display === 'none') {
      sizeDropdown.style.display = 'block';
      arrow[6].classList.remove('arrow-down');
      arrow[6].classList.add('arrow-up');
    } else {
      sizeDropdown.style.display = 'none';
      arrow[6].classList.add('arrow-down');
      arrow[6].classList.remove('arrow-up');
    }
  });
}


$(document).ready(() => {
  $('#slider').slider({
    min: 0,
    max: 100,
    step: 1,
    values: [10, 90],
    slide(event, ui) {
      for (let i = 0; i < ui.values.length; ++i) {
        $(`input.sliderValue[data-index=${i}]`).val(ui.values[i]);
      }
    },
  });

  $('input.sliderValue').change(function () {
    const $this = $(this);
    $('#slider').slider('values', $this.data('index'), $this.val());
  });
});


// selected item with red border

function checkParentPDP(element) {
  const target = $(element);
  if (target.parents('.pdp-wrapper').length) return true;
}

const colorCubes = document.querySelectorAll('.color-cubes');


if (colorCubes) {
  colorCubes.forEach((colorCubeElement) => {
    for (const item of colorCubeElement.children) {
      item.addEventListener('click', () => {
        if (checkParentPDP(item)) {
          $(item).click(function () {
            $('.one-choice-color').removeClass('one-choice-color');
            $(this).addClass('one-choice-color');
          });
        } else if (item.style.border === '2px solid red') {
          item.style.border = '0';
          if (item.classList.contains('color-cube-white')) item.style.border = '1px solid grey';
        } else {
          item.style.border = '2px solid red';
        }
      });
    }
  });
}


const sizesBorder = document.querySelectorAll('.sizes');

if (sizesBorder) {
  sizesBorder.forEach((sizeElements) => {
    for (const item of sizeElements.children) {
      item.addEventListener('click', () => {
        if (checkParentPDP(item)) {
          $(item).click(function () {
            $('.one-choice-size').removeClass('one-choice-size');
            $(this).addClass('one-choice-size');
          });
        } else if (item.style.borderBottomColor === 'red' && item.style.borderColor === 'red') {
          item.style.border = '0';
        } else {
          item.style.border = '2px solid red';
          item.style.borderBottom = '5px solid red';
        }
      });
    }
  });
}


// previous page

const backButton = document.querySelector('.back-button');


if (backButton) {
  backButton.addEventListener('click', () => {
    mobileFilter.style.display = 'none';
    loginBar.style.display = 'flex';
    mobileSearchFilterNav.style.display = 'flex';
    plpWrapper.style.display = 'flex';
  });
}


// swiper js

const productImages = document.querySelectorAll('.product-image');

const mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<img src="${productImages[index].getAttribute('src')}" class="${className} side-image">`;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// quantity

const countItem = document.querySelector('.count');
let countItemNumber = parseInt(countItem.innerHTML, 10);
const countAdd = document.querySelector('.count-add');
const countSubtr = document.querySelector('.count-subtr');


countSubtr.addEventListener('click', () => {
  if (countItemNumber > 1) {
    countItemNumber -= 1;
    countItem.innerHTML = countItemNumber;
  }
});

countAdd.addEventListener('click', () => {
  countItemNumber += 1;
  countItem.innerHTML = countItemNumber;
});
