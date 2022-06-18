const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('nav');
menuBtn.addEventListener('click',()=>{
  menuBtn.classList.toggle('open');
  nav.classList.toggle('active');
})