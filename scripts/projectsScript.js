let projectsData = {};
let currentCategory = "group";
let currentIndex = 0;


// Dynamically update containers content based on selected category and page index 
function updateProjectContent() {
  const categoryProjects = projectsData[currentCategory];
  if (categoryProjects && categoryProjects.length > 0) {
    const project = categoryProjects[currentIndex];

    const titleText1 = document.querySelector('.gradient-text-box1');
    if (titleText1 ) {
      titleText1 .innerHTML = project.title1 ? project.title1 : "";
    }

    const titleText2 = document.querySelector('.gradient-text-box2');
    if (titleText2) {
      titleText2.innerHTML = project.title2 ? project.title2 : "";
    }

    const bodyText1 = document.querySelector('.white-box');
    if (bodyText1) {
      bodyText1.innerHTML = `<h2>${project.bodyTitle}</h2>
                            <p>${project.body1}</p>`;
    }

    const bodyText2 = document.querySelector('.white-box-2');
    if (bodyText2) {
      bodyText2.innerHTML = project.body2 ? project.body2 : "";
    }
    
    const imagePlaceholder = document.querySelector('.image-placeholder');
    if (imagePlaceholder) {
      imagePlaceholder.innerHTML = `<img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit: cover">`;
    }

    const pageIndicator = document.getElementById('pageIndicator');
    if (pageIndicator) {
      pageIndicator.textContent = `${currentIndex + 1} of ${categoryProjects.length}`;
    }
    
    // Save current category and index if cookies are enabled
    if (localStorage.getItem("cookiesEnabled") === "true") {
      localStorage.setItem("projectsCategory", currentCategory);
      localStorage.setItem("projectsIndex", currentIndex);
    }

    updateBanner();
  }
}


// Update the header of the container’s tabs to indicate page changes
function updateBanner() {
  // Uses light-header to indicate page changes through width changes 
  const banner = document.querySelector('.light-header');
  if (!banner) return;
  
  // Group Projects
  if (currentCategory === 'group') {
    if (currentIndex === 0) {
      banner.style.width = "490px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "none";
      document.querySelector('.circle5').style.display = "none";
      document.querySelector('.circle1').style.backgroundColor = "#FFFFFF";
      document.querySelector('.circle2').style.backgroundColor = "#000000";
      document.querySelector('.circle3').style.backgroundColor = "#000000";
    } else if (currentIndex === 1) {
      banner.style.width = "566px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "none";
      document.querySelector('.circle5').style.display = "none";
      document.querySelector('.circle1').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle2').style.backgroundColor = "#FFFFFF";
      document.querySelector('.circle3').style.backgroundColor = "#000000";
    } else if (currentIndex === 2) {
      banner.style.width = "648px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "none";
      document.querySelector('.circle5').style.display = "none";
      document.querySelector('.circle1').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle2').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle3').style.backgroundColor = "#FFFFFF";
    }
  }
  // Personal Projects
  else if (currentCategory === 'personal') {
      if (currentIndex === 0) {
      banner.style.width = "490px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "none";
      document.querySelector('.circle5').style.display = "none";
      document.querySelector('.circle1').style.backgroundColor = "#FFFFFF";
      document.querySelector('.circle2').style.backgroundColor = "#000000";
      document.querySelector('.circle3').style.backgroundColor = "#000000";
    } else if (currentIndex === 1) {
      banner.style.width = "566px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "none";
      document.querySelector('.circle5').style.display = "none";
      document.querySelector('.circle1').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle2').style.backgroundColor = "#FFFFFF";
      document.querySelector('.circle3').style.backgroundColor = "#000000";
    } else if (currentIndex === 2) {
      banner.style.width = "648px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "none";
      document.querySelector('.circle5').style.display = "none";
      document.querySelector('.circle1').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle2').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle3').style.backgroundColor = "#FFFFFF";
    }
  }
  // School Assignments
  else if (currentCategory === 'assignments') {
    if (currentIndex === 0) {
      banner.style.width = "342px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "block";
      document.querySelector('.circle5').style.display = "block";
      document.querySelector('.circle1').style.backgroundColor = "#000000";
      document.querySelector('.circle2').style.backgroundColor = "#000000";
      document.querySelector('.circle3').style.backgroundColor = "#000000";
      document.querySelector('.circle4').style.backgroundColor = "#000000";
      document.querySelector('.circle5').style.backgroundColor = "#FFFFFF";
    } else if (currentIndex === 1) {
      banner.style.width = "416px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "block";
      document.querySelector('.circle5').style.display = "block";
      document.querySelector('.circle1').style.backgroundColor = "#000000";
      document.querySelector('.circle2').style.backgroundColor = "#000000";
      document.querySelector('.circle3').style.backgroundColor = "#000000";
      document.querySelector('.circle4').style.backgroundColor = "#FFFFFF";
      document.querySelector('.circle5').style.backgroundColor = "#9D9D9D";
    } else if (currentIndex === 2) {
      banner.style.width = "490px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "block";
      document.querySelector('.circle5').style.display = "block";
      document.querySelector('.circle1').style.backgroundColor = "#FFFFFF";
      document.querySelector('.circle2').style.backgroundColor = "#000000";
      document.querySelector('.circle3').style.backgroundColor = "#000000";
      document.querySelector('.circle4').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle5').style.backgroundColor = "#9D9D9D";
    } else if (currentIndex === 3) {
      banner.style.width = "566px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "block";
      document.querySelector('.circle5').style.display = "block";
      document.querySelector('.circle1').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle2').style.backgroundColor = "#FFFFFF";
      document.querySelector('.circle3').style.backgroundColor = "#000000";
      document.querySelector('.circle4').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle5').style.backgroundColor = "#9D9D9D";
    } else if (currentIndex === 4) {
      banner.style.width = "648px";
      document.querySelector('.circle1').style.display = "block";
      document.querySelector('.circle2').style.display = "block";
      document.querySelector('.circle3').style.display = "block";
      document.querySelector('.circle4').style.display = "block";
      document.querySelector('.circle5').style.display = "block";
      document.querySelector('.circle1').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle2').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle3').style.backgroundColor = "#FFFFFF";
      document.querySelector('.circle4').style.backgroundColor = "#9D9D9D";
      document.querySelector('.circle5').style.backgroundColor = "#9D9D9D";
    }
  }
}


// Allow for Switching Categories 
function switchTab(category) {
  // Remove active status from all buttons
  document.querySelectorAll('.tab-button').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Add active status to selected button
  if (category === 'group') {
    document.querySelector('.group-tab').classList.add('active');
  } else if (category === 'personal') {
    document.querySelector('.personal-tab').classList.add('active');
  } else if (category === 'school') {
    document.querySelector('.school-tab').classList.add('active');
  }
  
  currentCategory = (category === 'school') ? 'assignments' : category;
  currentIndex = 0;
  updateProjectContent();
}


// Container Right Arrow button
function nextProject() {
  const categoryProjects = projectsData[currentCategory];
  if (categoryProjects) {
    currentIndex = (currentIndex + 1) % categoryProjects.length;
    updateProjectContent();
  }
}


// Container Left Arrow button
function prevProject() {
  const categoryProjects = projectsData[currentCategory];
  if (categoryProjects) {
    currentIndex = (currentIndex - 1 + categoryProjects.length) % categoryProjects.length;
    updateProjectContent();
  }
}


// Checks cookies if a past category and page index was saved and loads it when users reenetrs the webpage
document.addEventListener("DOMContentLoaded", () => {
  // Check cookies setting and retrieve saved state if cookies are enabled.
  if (localStorage.getItem("cookiesEnabled") === "true") {
    const savedCategory = localStorage.getItem("projectsCategory");
    const savedIndex = localStorage.getItem("projectsIndex");
    currentCategory = savedCategory ? savedCategory : "group";
    currentIndex = savedIndex ? parseInt(savedIndex, 10) : 0;
  } else {
    // If cookies are not enabled, always default to Group Projects
    currentCategory = "group";
    currentIndex = 0;
  }
  
  // Fetch the JSON file containing project data
  fetch('projectsData.json')
    .then(response => response.json())
    .then(data => {
      projectsData = data;
      
      // Remove active class from all tab buttons first
      document.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Set the active tab based on currentCategory
      if (currentCategory === "assignments") {
        document.querySelector('.school-tab').classList.add('active');
      } else if (currentCategory === "personal") {
        document.querySelector('.personal-tab').classList.add('active');
      } else if (currentCategory === "group") {
        document.querySelector('.group-tab').classList.add('active');
      }
      
      updateProjectContent();
      
      // Hook up arrow button event listeners
      const leftArrow = document.querySelector('.banner-button-left');
      const rightArrow = document.querySelector('.banner-button-right');
      if (leftArrow) leftArrow.addEventListener('click', prevProject);
      if (rightArrow) rightArrow.addEventListener('click', nextProject);
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
});
