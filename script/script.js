document.addEventListener('DOMContentLoaded', function() {
  //tabbar
  let tabbarList = document.querySelectorAll('.tabbar_item');

  tabbarList.forEach((link) => link.addEventListener('click', listActive));

  function listActive() {
    tabbarList.forEach((link) => 
    link.classList.remove("tabbar_item_active"));
    this.classList.add("tabbar_item_active");
  };

  //search page  
  let filterButton = document.querySelector('.search-panel_filter-button');
  let modalWindow = document.querySelector('.filter-window');
  let showResultsButton = document.querySelector('.show-results_button');
  let filterBackground = document.querySelector('.filter-window_background');

  if (filterButton) {
    filterButton.addEventListener('click', openModal);
    showResultsButton.addEventListener('click', closeModal);
    filterBackground.addEventListener('click', closeModal);
  };

  function openModal() {
    console.log('click!');
    modalWindow.classList.add('translate-up');
    console.log('click!');
    modalWindow.classList.remove('translate-down');
    filterBackground.classList.add('blackout-on');
    filterBackground.classList.remove('blackout-off');
  };

  function closeModal() {
    modalWindow.classList.add('translate-down');
    modalWindow.classList.remove('translate-up');
    filterBackground.classList.add('blackout-off');
    filterBackground.classList.remove('blackout-on');
  };

  //filters modal window
  let authorsList = document.querySelectorAll('.filter-authors_item');
  let favButtonsList = document.querySelectorAll('.fav-button');

  authorsList.forEach((author) => author.addEventListener('click', clickAuthorButton));
  favButtonsList.forEach((fav) => fav.addEventListener('click', clickFavButton));

  function clickAuthorButton() {
    if (this.classList.contains('filter-authors_item_active') == false) {
      this.classList.add("filter-authors_item_active");
    } else {
      this.classList.remove("filter-authors_item_active");
    };
  }

  function clickFavButton() {
    if (this.classList.contains('fav-button_active') == false) {
      this.classList.add("fav-button_active");
    } else {
      this.classList.remove("fav-button_active");
    };
  }

  //test page
  let answerInputField = document.querySelector('.answer-input-field');
  let nextQuestionButton = document.querySelector('.next-question-button');
  let radioButtonList = document.querySelectorAll('.radio-button');
  let completeTestButton = document.querySelector('.complete-test-button');

  if (answerInputField) {
    answerInputField.value = '';
    answerInputField.addEventListener('input', activatePrimaryButton);
    nextQuestionButton.addEventListener('click', nextQuestion);
  };

  if (completeTestButton) {
    completeTestButton.addEventListener('click', completeTest);
  };

  function activatePrimaryButton() {
    nextQuestionButton.classList.remove('primary-button_disable');
    if (answerInputField.value == '') {
      nextQuestionButton.classList.add('primary-button_disable');
    };
  };

  function nextQuestion() {
    if (this.classList.contains('primary-button_disable') == false) {
      document.location.href = 'test-last.html';
    };  
  };

  function completeTest() {
    if (this.classList.contains('primary-button_disable') == false) {
      document.location.href = 'map.html';
    };  
  }; 
  
  radioButtonList.forEach((radio) => radio.addEventListener('click', clickRadioButton));

  function clickRadioButton() {
    radioButtonList.forEach((radio) => 
    radio.classList.remove('radio-button_active'));
    this.classList.add("radio-button_active");
    completeTestButton.classList.remove('primary-button_disable');
  };
});