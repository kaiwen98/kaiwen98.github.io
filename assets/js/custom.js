var intoViewArr = Array(10)

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

window.onload = event => {
  // Do something
}

document.addEventListener("scroll", () => {
  const headings = document.getElementsByClassName("content-heading");
  [...headings].forEach(heading => {
    if (isScrolledIntoView(heading)) {
      console.log(heading)
    }
  })
  
})

document.addEventListener("DOMContentLoaded", function() {
  //The first argument are the elements to which the plugin shall be initialized
  //The second argument has to be at least a empty object or a object with your desired options
  OverlayScrollbars(document.querySelectorAll("body"), { });
});
