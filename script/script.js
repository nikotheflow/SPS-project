//tabbar
let tabbar = document.querySelector('.tabbar');
let tabbarList = document.querySelectorAll('.tabbar_item');

tabbarList.forEach((link) => link.addEventListener("click", listActive));

function listActive() {
  tabbarList.forEach((link) => 
  link.classList.remove("tabbar_item_active"));
  this.classList.add("tabbar_item_active");
};

//test-page
let answerField = document.querySelector('.answer-field');
let answerButton = document.querySelector('.answer-button');

answerField.addEventListener('input', activatePrimaryButton);

function activatePrimaryButton() {
  answerButton.classList.remove('primary-button_disable');
  if (answerField.value == "") {
    answerButton.classList.add('primary-button_disable');
  };
};