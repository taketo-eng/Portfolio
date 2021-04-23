'use strict';

{
  document.addEventListener('DOMContentLoaded', ()=>{
    const targets = document.querySelectorAll('.obs-el');

    const options = {
      threshold: 0.5,
      rootMargin: "0px 0px -50px",
    }

    function callback(entries, obs){
      entries.forEach(entry => {
        if(!entry.isIntersecting){
          return;
        }
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      });
    }

    const observer = new IntersectionObserver(callback, options);
    targets.forEach(target=>{
      observer.observe(target);
    });
  });
}