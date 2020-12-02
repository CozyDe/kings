var navTogg = document.querySelector("#burger-menu-icon");
var result = document.querySelector("#menu");
var searchMe = document.getElementById("search-me");
var search = document.getElementById("search");
var rmv = document.querySelector('.navCov');

rmv.addEventListener("click", function(){
  search.classList.remove('move');
});

  searchMe.addEventListener("click", function(){
     search.style.cssText = "color: white;";
     search.classList.toggle("move");
  }); 


navTogg.addEventListener("click", function toggNav() {
      result.classList.toggle("slide");
      navTogg.classList.toggle("times"); 
  });

   window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      document.getElementById("nav-scroll").style.height = "auto";
    } else {
      document.getElementById("nav-scroll").style.height = "17vh";
    }
  }