let btn=document.querySelector('.btn');
let body=document.querySelector('body');
btn.onclick=function(){ 
    body.classList.toggle('on');
    audio.play();
}
btn.classList.toggle('on');