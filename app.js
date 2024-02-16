ScrollReveal().reveal(".scroll", {delay: 100})
ScrollReveal().reveal(".scroll1", {delay: 250})
ScrollReveal().reveal(".scroll2", {delay: 300})
ScrollReveal().reveal(".scroll3", {delay: 350})
ScrollReveal().reveal(".scroll4", {delay: 400})
ScrollReveal().reveal(".scroll5", {delay: 250})
ScrollReveal().reveal(".scroll6", {delay: 300})
ScrollReveal().reveal(".scroll7", {delay: 350})
ScrollReveal().reveal(".scroll8", {delay: 400})
ScrollReveal().reveal(".scroll9", {delay: 450})
ScrollReveal().reveal(".scroll10", {delay: 500})
ScrollReveal().reveal(".scroll11", {delay: 550})
ScrollReveal().reveal(".scroll12", {delay: 600})
ScrollReveal().reveal(".fot", {delay: 300})
ScrollReveal().reveal(".fot1", {delay: 400})
ScrollReveal().reveal(".fot2", {delay: 500})
ScrollReveal().reveal(".fot3", {delay: 600})
ScrollReveal().reveal(".fot4", {delay: 700})
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}
    Accordion
    function myFunction(id) {
      var x = document.getElementById(id);
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
      } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
          x.previousElementSibling.className.replace(" w3-theme-d1", "");
      }
    }

    function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

