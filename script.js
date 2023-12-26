//search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".formNav");
  const searchInput = searchForm.querySelector("input");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm) {
      // Define an object that maps search terms to page URLs
      const searchMappings = {
        home: "./index.html",
        gallery: "./gallery.html",
        about: "./about.html",
        resume: "./about.html",
        contact: "./contact.html",
        "html projects": "./html-css-projects.html",
        "css projects": "./html-css-projects.html",
        "html": "./html-css-projects.html",
        "css": "./html-css-projects.html",
        "html and css projects": "./html-css-projects.html",
        "html css projects": "./html-css-projects.html",
        "html-css projects": "./html-css-projects.html",
        "html/css projects": "./html-css-projects.html",
        certificate: "./certificate.html",
        certificates: "./certificate.html",
        "reactjs projects": "./reactjs-projects.html",
        "react projects": "./reactjs-projects.html",
        "reactjs": "./reactjs-projects.html",
        "react": "./reactjs-projects.html",
        "nodejs projects": "./nodejs-projects.html",
        "nodejs": "./nodejs-projects.html",
        painting: "./painting.html",
        paintings: "./painting.html",
        "javascript projects": "./javascript-projects.html",
        "javascript": "./javascript-projects.html",
        "programmer vs Coder": "./home_info1.html",
        "what does a coder do": "./home_info2.html",
        "coders who changed the world": "./home_info3.html",
        "the life of a programmer": "./home_info4.html",
        signup: "./signup.html",
        login: "./login.html",
        "edyoda survey form": "./html-css-projects.html",
        "survey form": "./html-css-projects.html",
        "nuuk": "./html-css-projects.html",
        "nuuk static website": "./html-css-projects.html",
        "stunning landing page": "./html-css-projects.html",
        "shree krishna padawali": "./html-css-projects.html",
        "krishna padawali": "./html-css-projects.html",
        "padawali": "./html-css-projects.html",
        "edyoda stories": "./html-css-projects.html",
        "beautiful landing page": "./html-css-projects.html",
        "hospital patient records": "./javascript-projects.html",
        "marksheet generator": "./javascript-projects.html",
        "ipl team": "./javascript-projects.html",
        "javascript": "./javascript-projects.html",
        "student teacher records": "./javascript-projects.html",
        "set your journey": "./javascript-projects.html",
        "quiz app": "./javascript-projects.html",
        "responsive quiz app": "./javascript-projects.html",
        "my strength shree krishna": "./javascript-projects.html",
        "shoplane website": "./javascript-projects.html",
        "shopping website": "./javascript-projects.html",
        "grid design": "./reactjs-projects.html",
        "youtube inspired gallery": "./reactjs-projects.html",
        "admin panel": "./reactjs-projects.html",
        "movie search engine": "./reactjs-projects.html",
        "movie search": "./reactjs-projects.html",
        "vishal digital university": "./reactjs-projects.html",
        "college website": "./reactjs-projects.html",
        "kafene web app": "./reactjs-projects.html",
        "player app": "./nodejs-projects.html",
        "chat room": "./nodejs-projects.html",
        "chatroom": "./nodejs-projects.html",
        "chat web app": "./nodejs-projects.html",
      };

      // Check if a direct match exists
      if (searchMappings.hasOwnProperty(searchTerm)) {
        window.location.href = searchMappings[searchTerm];
      } else {
        // If no direct match is found, check for partial matches
        for (const key in searchMappings) {
          if (searchTerm.includes(key)) {
            window.location.href = searchMappings[key];
            return;
          }
        }

        // If no matching page is found, you can display an error message or handle it in your own way
        alert("No matching page found for your search.");
      }
    }
  });
});


let isHindi = false;
const button = document.getElementById("translateBtn");

function toggleLanguage() {
  const contentEnglish = document.getElementById("content-english");
  const contentHindi = document.getElementById("content-hindi");

  if (contentEnglish.style.display === "block") {
    contentEnglish.style.display = "none";
    contentHindi.style.display = "block";
    button.textContent = "Read in English";
  } else {
    contentEnglish.style.display = "block";
    contentHindi.style.display = "none";
    button.textContent = "हिंदी में पढ़ें";
  }
  isHindi = !isHindi;
}

const krishnaImage = document.getElementById("krishnaImage");
const imagePaths = [
  "./images/krishna-img1.jpg",
  "./images/krishna-img2.jpg",
  "./images/krishna-img3.jpg",
  "./images/krishna-img4.jpg",
];
let currentImageIndex = 0;

// Function to fade out the current image and change to the next image
function fadeOutAndChangeImage() {
  krishnaImage.classList.add("fade");
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    krishnaImage.src = imagePaths[currentImageIndex];
    krishnaImage.classList.remove("fade");
  }, 2000);
}

// Preload and start the fading effect after the first image is loaded
krishnaImage.onload = () => {
  setTimeout(() => {
    fadeOutAndChangeImage();
  }, 5000); // Add a delay to allow the first image to display
};
