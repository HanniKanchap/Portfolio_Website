function toggleNav(){
    var nav = document.getElementById("navComponent");
    var underline = document.getElementById("uline");
   if(nav.className === "navcomponent")
      {
        nav.className += "responsive";
       underline.className += "underline";
      }
    else
    {
      nav.className = "navcomponent";
       underline.classList.remove("underline");
    }
    
}
window.addEventListener("scroll", function() {
  var skillsSection = document.getElementById("skills");
  if (skillsSection.getBoundingClientRect().top <= window.innerHeight && skillsSection.getBoundingClientRect().bottom >= 0) {
      move();
      window.removeEventListener("scroll", arguments.callee);
  }
});
function move() {
  var htmlBar = document.getElementById("myBar_html");
  var cssBar = document.getElementById("myBar_css");
  var javascriptBar = document.getElementById("myBar_javascript");
  var htmlValue = htmlBar.getAttribute("value");
  var cssValue = cssBar.getAttribute("value");
  var javascriptValue = javascriptBar.getAttribute("value");
  var htmlWidth = 1;
  var cssWidth = 1;
  var javascriptWidth = 1;
  var htmlInterval = setInterval(function() {
      if (htmlWidth < htmlValue) {
          htmlWidth++;
          htmlBar.style.width = htmlWidth + "%";
          htmlBar.innerHTML = htmlWidth + "%";
      } else {
          clearInterval(htmlInterval);
      }
  }, 10);
  var cssInterval = setInterval(function() {
      if (cssWidth < cssValue) {
          cssWidth++;
          cssBar.style.width = cssWidth + "%";
          cssBar.innerHTML = cssWidth + "%";
      } else {
          clearInterval(cssInterval);
      }
  }, 10);
  var javascriptInterval = setInterval(function() {
      if (javascriptWidth < javascriptValue) {
          javascriptWidth++;
          javascriptBar.style.width = javascriptWidth + "%";
          javascriptBar.innerHTML = javascriptWidth + "%";
      } else {
          clearInterval(javascriptInterval);
      }
  }, 10);
}