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

    // Trigger the initial click to open the responsive navigation
    icon.click();
  }
});

