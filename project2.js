const buttons=document.getElementById('inform');
const hamburger = document.getElementById('hamburger');
const background = document.getElementById('background');
hamburger.addEventListener('click',()=>{
    buttons.classList.toggle('active');
         buttons.style.display="block";

});
