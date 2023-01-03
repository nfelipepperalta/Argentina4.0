window.onload = function(){
    
    document.getElementById('bcolor').onclick = function() {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        const main = document.getElementById('hojacv')
        main.style.backgroundColor = 'gray';
        document.getElementById('bcolor').setAttribute('disabled', true);
        document.getElementById('ncolor').removeAttribute('disabled');
    };
    document.getElementById('ncolor').onclick = function() {
        document.body.style.backgroundColor = '#F8F8FF';
        document.body.style.color = 'black';
        const main = document.getElementById('hojacv')
        main.style.backgroundColor = 'white';
        document.getElementById('bcolor').removeAttribute('disabled')
        document.getElementById('ncolor').setAttribute('disabled', true)
    };
};


