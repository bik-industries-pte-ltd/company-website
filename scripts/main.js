/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMobileNavigationMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
 }
