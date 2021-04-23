'use strict';

{
  const openNav = document.getElementById('open-nav');
  const closeNav = document.getElementById('close-nav');
  const nav = document.getElementById('nav');

  openNav.addEventListener('click', ()=>{
    nav.classList.add('open');
  });
  closeNav.addEventListener('click', ()=>{
    nav.classList.remove('open');
  });

}