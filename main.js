const loader = document.querySelector('.loader');

function init(){
    setTimeout(()=>{
        loader.style.opacity = 0;
        loader.style.display = 'none';
    }, 1000);
}

init();