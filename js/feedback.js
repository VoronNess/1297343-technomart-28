var feedbackLink = document.querySelector(".contacts-button-lost");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackName = feedbackPopup.querySelector("[name=user]");
var feedbackEmail = feedbackPopup.querySelector("[name=email]");
var feedbackMessage = feedbackPopup.querySelector("[name=message]");


var isStorageSupport = true;
var storage = "";



try {
  storage = localStorage.getItem("user");
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    if (storage) {
        feedbackName.value = storage;
        feedbackEmail.focus();
    }else if (storage){
        feedbackEmail.value = storage;
        feedbackMessage.focus();
    } else {
        feedbackName.focus();
      }
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
  });

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("user", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
      }
    }
  });