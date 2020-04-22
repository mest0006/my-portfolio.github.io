
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
function sendMail (str) {
  var link = "borbala.m.m@gmail.com" + "&subject=" + escape("This is my subject") + "&body=" + escape(str);
  location.href = link;
}
function submit_comment () {
  var name = document.forms["contact_form"]["Name"].value;
  var Email = document.forms["contact_form"]["Email"].value;
  var Phone = document.forms["contact_form"]["Phone"].value;
  var Message = document.forms["contact_form"]["Message"].value;

  if ((name != "") && (Email != "") && (Phone != "") && (Message != "")) {
    sendMail("HELLO");
  }
}