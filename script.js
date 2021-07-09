const input = document.querySelector('.input');
const button = document.querySelector('.button');
const check = document.querySelector('.check');
const option = document.getElementById('select');

function show(){
    var as = document.forms[0].select.value;
    var strUser = option.options[option.selectedIndex].value;
    console.log(as, strUser);
}
option.onchange=show;
show();

let r = input.value;
button.addEventListener('click', function(){
    let r = input.value;
    if (r == ''){
        check.style.display = 'block';
    }else{
        alert(`${22/7 * r**2} CM`);
        input.value = '';
    }
});


