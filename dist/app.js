const ptext = document.querySelector('#text');
const container = document.querySelector('.container');
breathAnimation();

function breathAnimation() {
    ptext.textContent = `Breath In` ;
    container.className = 'container grow' ;

    setTimeout(() =>{
        ptext.textContent = `Hold` ;

        setTimeout(() => {
            ptext.textContent = `Breath Out` ;
            container.className = 'container shrink' ;
        },1500);
    },3000);

}

setInterval(breathAnimation, 7500);


