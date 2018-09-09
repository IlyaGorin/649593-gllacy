var link = document.querySelector('.feedback-form-btn');
var popup = document.querySelector('.feedback-form-section');
var overlay = document.querySelector('.modal-overlay');
var close =document.querySelector('.modal-close');


link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  overlay.classList.add('overlay-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
});
