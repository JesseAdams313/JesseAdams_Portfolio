const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.site-nav');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});}
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('href').substring(1);const el=document.getElementById(id);
if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}})});
