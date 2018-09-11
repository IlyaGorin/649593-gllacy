var link = document.querySelector('.feedback-form-btn');
var popup = document.querySelector('.feedback-form-section');
var overlay = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal-close');
var login = popup.querySelector('#user-name');
var form = popup.querySelector('.feedback-form-modal');
var email = popup.querySelector('#feedback-form-email');
var isStorageSupport = true;
var storage = '';

//  Открытие модального окна, фокус на поле ввода
link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  overlay.classList.add('overlay-show');
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

// Проверка на работоспособность localstorage
try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
};

// Запрет на отравку формы с незаполнеными полями
form.addEventListener('submit', function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});

// Закрытие модального окна
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  popup.classList.remove('modal-error');
});

// Закрытие модльного окна клавишей ESC
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
      overlay.classList.remove('overlay-show');
      popup.classList.remove('modal-error');
    }
  }
});
