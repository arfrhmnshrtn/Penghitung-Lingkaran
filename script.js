const input = document.querySelector('.input');
const hasil = document.querySelector('.hasil');
const button = document.querySelector('.button');
const check = document.querySelector('.check');
const select = document.getElementById('select');

let r = input.value;
button.addEventListener('click', function(){
    let r = Number(input.value);
    let strUser = select.options[select.selectedIndex].value;
    if (r == ''){
        check.style.display = 'block';
    }else{
        if (strUser === 'Luas Lingkaran'){
            hasil.value = Math.trunc(22/7 * r**2) + ' CM';
        }else{
            hasil.value = Math.trunc(2 * 22/7 * r) + ' CM';
        }
    }
});
