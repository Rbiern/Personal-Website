// Insert header
fetch("includes/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;
    applyPreferences();
  })
  .catch(error => console.error("Error loading header:", error));


// Insert footer
fetch("includes/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch(error => console.error("Error loading footer:", error));


// Toggle Sidebar  
function toggleMenu() {
  const hamMenu = document.querySelector(".ham-menu");
  const sidebar = document.getElementById("sidebar");
  hamMenu.classList.toggle("active");
  sidebar.classList.toggle("open");
}


// Hnadle Sidebar Buttons 
function toggleSwitch(element) {
  element.classList.toggle("active");
  
  if (element.getAttribute("data-toggle") === "theme") {
    if (document.body.classList.contains("dark-mode")) {
      // Switch to light mode
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      // Switch to dark mode
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  } else {
    // Cookies preference
    if (localStorage.getItem("cookiesEnabled") === "true") {
      localStorage.setItem("cookiesEnabled", "false");
    } else {
      localStorage.setItem("cookiesEnabled", "true");
    }
  }
}


// Read & Apply Saved Preferences
function applyPreferences() {
  const savedTheme = localStorage.getItem("theme");
  const themeToggle = document.querySelector('[data-toggle="theme"]');
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle && !themeToggle.classList.contains("active")) {
      themeToggle.classList.add("active");
    }
  } else {
    document.body.classList.remove("dark-mode");
    if (themeToggle && themeToggle.classList.contains("active")) {
      themeToggle.classList.remove("active");
    }
  }

  let cookiesEnabled = localStorage.getItem("cookiesEnabled");
  if (cookiesEnabled === null) {
    localStorage.setItem("cookiesEnabled", "true");
    cookiesEnabled = "true";
  }

  const cookieToggle = document.querySelector('.toggle:not([data-toggle="theme"])');
  if (cookiesEnabled === "true") {
    if (cookieToggle && !cookieToggle.classList.contains("active")) {
      cookieToggle.classList.add("active");
    }
  } else {
    if (cookieToggle && cookieToggle.classList.contains("active")) {
      cookieToggle.classList.remove("active");
    }
  }
}


// Makes Sure Preferences are Applied
document.addEventListener("DOMContentLoaded", () => {
  applyPreferences();
});
