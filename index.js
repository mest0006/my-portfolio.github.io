$(document).ready(function () {
  $('.btn btn-default submit').click(function (event) {
    event.preventDefult()
    console.log('click')
  })
})




let $skills = document.querySelector('.skillscontainer')

let skillslist = ['Javascript', 'React', 'Vue', 'NodeJS', 'JQuery', 'Python', 'Ruby', 'Php', 'Wordpress', 'Drupal', 'Shopify', 'HTML', 'CSS']
let empty = []

for (let skills of skillslist) {
  empty.push(` <li class=" skillslist"> ${skills} </li>`)
}
$skills.innerHTML = empty.join('');
window.onload = function () {

  document.getElementById('button').onclick = function () {

    document.getElementById('modal').style.display = "none"

  };
};