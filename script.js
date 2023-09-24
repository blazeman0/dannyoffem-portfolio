document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the responsive class
  function toggleResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Attach the click event to the icon element
  var icon = document.querySelector(".icon");
  if (icon) {
    icon.addEventListener("click", toggleResponsive);
  }

  // Check if the page was refreshed
  if (performance.navigation.type === 1) {
    // Page was refreshed, set the initial class to "topnav"
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
  }
});
