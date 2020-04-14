let navs = [
  { buttons: 'contact', links: 'Contact' },
  { buttons: 'home', links: 'Home' },
  { buttons: 'about', links: 'About' },
  { buttons: 'skills', links: 'Skills' },
  { buttons: 'portoflio', links: 'Portoflio' }

]




let happy

let nav = []
let $header = document.querySelector('.header')


let $nav = document.querySelector('.topnav')

for (let i = 0; i < navs.length; i++) {

  nav.push(`
   
      <a href=" #/${navs[i].buttons}.html" class ="link"> ${navs[i].links} </a> 
     
     
      `)




}

$nav.innerHTML = nav.join('')



window.onload = function () {
  document.querySelector('.header').style.display = "none"
  document.getElementById('button').onclick = function () {
    document.getElementById('modal').style.display = "none"
    document.querySelector('.header').style.display = "block"
  };
};