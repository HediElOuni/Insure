function toggleNav() {
    const navLinks = document.getElementById("navLinks");
    const navButton = document.querySelector(".nav-btn");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
        navButton.innerHTML = "☰";
    } else {
        navLinks.style.display = "flex";
        navButton.innerHTML = "⨉";
    }
}