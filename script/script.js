let tabbar = document.querySelector('.tabbar');
let tabbarList = document.querySelectorAll('.tabbar_item');

tabbarList.forEach((link) => link.addEventListener("click", listActive));

function listActive() {
  tabbarList.forEach((link) => 
  link.classList.remove("tabbar_item_active"));
  this.classList.add("tabbar_item_active");
}