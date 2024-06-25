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
        skill: "./index.html",
        skills: "./index.html",
        gallery: "./gallery.html",
        about: "./about.html",
        resume: "./about.html",
        contact: "./contact.html",
        "html projects": "./html-css-projects.html",
        "css projects": "./html-css-projects.html",
        html: "./html-css-projects.html",
        css: "./html-css-projects.html",
        "html and css projects": "./html-css-projects.html",
        "html css projects": "./html-css-projects.html",
        "html-css projects": "./html-css-projects.html",
        "html/css projects": "./html-css-projects.html",
        certificate: "./certificate.html",
        certificates: "./certificate.html",
        "reactjs projects": "./reactjs-projects.html",
        "react projects": "./reactjs-projects.html",
        reactjs: "./reactjs-projects.html",
        react: "./reactjs-projects.html",
        "nodejs projects": "./nodejs-projects.html",
        nodejs: "./nodejs-projects.html",
        painting: "./painting.html",
        paintings: "./painting.html",
        "javascript projects": "./javascript-projects.html",
        javascript: "./javascript-projects.html",
        "programmer vs Coder": "./introduction-to-programmer-vs-coder.html",
        "what does a coder do": "./what-does-a-coder-do.html",
        "coders who changed the world": "./coders-who-changed-the-world.html",
        "the life of a programmer": "./the-life-of-a-programmer.html",
        signup: "./signup.html",
        login: "./login.html",
        "edyoda survey form": "./html-css-projects.html",
        "survey form": "./html-css-projects.html",
        nuuk: "./html-css-projects.html",
        "nuuk static website": "./html-css-projects.html",
        "stunning landing page": "./html-css-projects.html",
        "shree krishna padawali": "./html-css-projects.html",
        "krishna padawali": "./html-css-projects.html",
        padawali: "./html-css-projects.html",
        "edyoda stories": "./html-css-projects.html",
        "beautiful landing page": "./html-css-projects.html",
        "hospital patient records": "./javascript-projects.html",
        "marksheet generator": "./javascript-projects.html",
        "ipl team": "./javascript-projects.html",
        javascript: "./javascript-projects.html",
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
        chatroom: "./nodejs-projects.html",
        "chat web app": "./nodejs-projects.html",
        "creative projects": "./creative-projects.html",
        magazine: "./creative-projects.html",
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

        // If no matching page is found, redirect to 404Error.html
        window.location.href = "./404Error.html";
      }
    }
  });
});

function showImages(category) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const images =
    category === "life"
      ? [
          "https://media.istockphoto.com/id/1202312179/photo/hands-cup-holding-a-clock-and-high-noon-concept-time-to-global-changes-elements-of-this-image.jpg?s=612x612&w=0&k=20&c=i4AIWe3ej5X4YyHNHKa-GJ8ld-GhoUb96lfhodCn4xE=",
          "https://media.istockphoto.com/id/1473578427/photo/man-practicing-football-on-grass.jpg?s=612x612&w=0&k=20&c=7exLYAktSw_0teSSZ0EA05-nrMqeqBLIZnQ2Snt_lEM=",
          "https://media.istockphoto.com/id/1134255601/photo/handsome-hispanic-man-wearing-casual-t-shirt-at-home-smiling-in-love-showing-heart-symbol-and.jpg?s=612x612&w=0&k=20&c=nFtss1CgiyzGKH9OE2aXztg-4BigMMzF-8sDpjw-6Wg=",
          "https://media.istockphoto.com/id/540861476/photo/total-relaxation.jpg?s=612x612&w=0&k=20&c=LtGAz30Yt8xBfW3J8gAmCTaHL88yaV660nuK17SoXbc=",
          "https://media.istockphoto.com/id/698788086/photo/indian-young-couple-celebrating-diwali.jpg?s=612x612&w=0&k=20&c=b0mj2nQfiqvm4uXIYjfciZ9FbAq6PrVKOPiiOVNFuUw=",
        ]
      : [
          "https://media.istockphoto.com/id/1321486723/photo/japanese-man-spending-weekend-morning-painting-in-his-bedroom-at-home.jpg?s=612x612&w=0&k=20&c=vQNWXbNJ6xteAa33XmgBY4Uow0blGgCSl8gvRxuxSi4=",
          "https://media.istockphoto.com/id/1342191952/photo/young-boy-preparing-for-exam-studying-at-home.jpg?s=612x612&w=0&k=20&c=WIDgjJgjP6xeziY6Pocoauu1a_pM3vQ8CSV_qr9FUYs=",
          "https://media.istockphoto.com/id/1390285717/photo/asian-programmer-writing-code-on-a-laptop.jpg?s=612x612&w=0&k=20&c=mRD30S9Dlqws614cEzJ1Hieipf_O8HXv9Cppw1eXdjs=",
          "https://media.istockphoto.com/id/172438443/photo/vintage-poetry-and-eyeglasses.jpg?s=612x612&w=0&k=20&c=FwbQPAL0MT33J5AGifmrsGG1V66KIT7j4SYrJWzTDRA=",
          "https://media.istockphoto.com/id/1369836486/photo/adult-bearded-man-indoors-in-cafe-lifestyle-concept-photo-with-copy-space-picture-of-guy-who.jpg?s=612x612&w=0&k=20&c=KgtDm2-TI5tEM1xc0DD67RIUtsYBbC8AiriaGip1FX8=",
        ];

  images.forEach((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "life-interest-image-container";

    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = image;

    imageContainer.appendChild(imgElement);
    gallery.appendChild(imageContainer);
  });

  // Remove active class from all boxes
  document.getElementById("life").classList.remove("active");
  document.getElementById("interest").classList.remove("active");

  // Add active class to the clicked box
  document.getElementById(category).classList.add("active");
}

// Show 'Life' images by default when the page loads
document.addEventListener("DOMContentLoaded", function () {
  showImages("life");
});

window.addEventListener("load", () => {
  const loaderWrapper = document.getElementById("loader-wrapper");
  const content = document.getElementById("content");

  setTimeout(() => {
    loaderWrapper.style.opacity = "0";
    loaderWrapper.style.visibility = "hidden";
    content.style.display = "block";
    setTimeout(() => {
      content.classList.add("loaded");
      content.style.opacity = "1"; // Ensure content is fully visible
    }, 100); // Slight delay to trigger the CSS transition
  }, 3000); 
});
