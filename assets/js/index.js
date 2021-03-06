let mainNav = document.getElementById('uList');
let navBarToggle = document.querySelector("#checkboxLabel");
let checbox = document.querySelector("#checkbox");


// Checkbox unchecked when site width is over 960px
  var mq = window.matchMedia( "(max-width: 960px)" );
  if (mq.matches) {}
  else {
    checbox.checked = false
  }

// Give class active when you click on the Burger Menu
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle('active');
});

// Dropdown JAMSTACK, give flex-style when pressed and remove when pressed again.
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("activeJob");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}

let dropdwn = document.querySelector(".dropdown-container");

$(".gallery").magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
	  enabled: true
	}
  });