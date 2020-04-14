



window.onload = function () {

  document.querySelector('.header').style.display = "none"
  document.getElementById('button').onclick = function () {
    document.getElementById('modal').style.display = "none"
    document.querySelector('.header').style.display = "block"
  };
};