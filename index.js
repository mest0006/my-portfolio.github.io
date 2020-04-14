

window.onload = function () {
  document.querySelector('.header').style.display = "block"
  document.getElementById('button').onclick = function () {
    document.getElementById('modal').style.display = "none"
    document.querySelector('.header').style.display = "block"
  };
};