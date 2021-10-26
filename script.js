let radio = document.querySelector('input');
let number = document.querySelector('button');

radio.addEventListener('change', () => {
    if(number.value === '') button.style.checked = 'none' ;
    else radio.style.checked = null;

});