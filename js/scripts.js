//Modal-feedback

var feedbackLink = document.querySelector(".contacts-button-lost");
var feedbackPopup = document.querySelector(".modal-feedback");
if(feedbackPopup!=null){
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackName = feedbackPopup.querySelector("[name=user]");
var feedbackEmail = feedbackPopup.querySelector("[name=email]");
var feedbackMessage = feedbackPopup.querySelector("[name=message]");

var isStorageSupport = true;
var storageUser = "";
var storageEmail = "";

try {
  storageUser = localStorage.getItem("user");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    if (storageUser ||  storageEmail) {
      feedbackName.value = storageUser ;
      feedbackEmail.focus();
      if (storageUser ||  storageEmail){
      feedbackEmail.value = storageEmail;
      feedbackMessage.focus();
      }
    }else {
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
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
    
    } else {
        if (isStorageSupport) {
            localStorage.setItem("user", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
            feedbackPopup.classList.remove("modal-show");
        }
    }
    evt.preventDefault();    
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

};

//Modal-map
var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
if(mapPopup!=null){
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
    mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
};


//Modal-notification
var buyButtons = document.querySelectorAll(".catalog-item-buy");
var noticePopup = document.querySelector(".modal-notification");
var noticeClose = noticePopup.querySelector(".modal-close");
var headerCart = document.querySelector(".header-cart");
var continueBtn = document.querySelector(".modal-continue-button");

let counterCart = 0
headerCart.textContent = "Корзина: " + counterCart;

function showNotice (){
  
  noticePopup.classList.add("modal-show");  
  counterCart++
  headerCart.textContent = "Корзина: " + counterCart;
  headerCart.classList.add("header-counter");  
}
  for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", showNotice);
};



noticeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    noticePopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (noticePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      noticePopup.classList.remove("modal-show");
    }
  }
});
continueBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  noticePopup.classList.remove("modal-show");
});

//Bookmark counter
const bookmarkButtons = document.querySelectorAll(".catalog-item-bookmarks");
const headerBookmarks = document.querySelector(".header-bookmarks");

let counterBookmark = 0
headerBookmarks.textContent = "Закладки: " + counterBookmark;
function bookmarkCounter (){
  counterBookmark++
  headerBookmarks.textContent = "Закладки: " + counterBookmark;
  headerBookmarks.classList.add("header-counter");  
}
  for (let bookmarkButton of bookmarkButtons) {
    bookmarkButton.addEventListener("click", bookmarkCounter);
};