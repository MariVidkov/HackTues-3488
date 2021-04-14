window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    var element = document.getElementById("navbar");
    element.classList.add("background");       
  }
  else {
    var element = document.getElementById("navbar");    
    element.classList.remove("background");                 
  }
}

