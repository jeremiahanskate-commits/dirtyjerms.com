document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const id=link.getAttribute('href');
    if(id==='#home'){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});return;}
    const el=document.querySelector(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
