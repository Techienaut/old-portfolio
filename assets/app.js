let url =
  "https://docs.google.com/spreadsheets/d/1Aswi-SGbHQKjHJ_Pq9iRZTk9E7-WDkBNOweaJmtKlBk/edit#gid=0";
let id = "1DfAA8BO98XjX5GeqjctSKzKRZMktYXFHZGb8mR-fEQ0";

let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;
// let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

// ES6 - fetch

// fetch queries the url provided and requests that the data be sent to it
// it receives JSON => JS Object Notation
// we use .json() to parse the data from "{}" to an full blown {}
// var navlnks = $(".nav a");
// $(document).ready(function() {
//   $(document).on("click", ".nav-item a", function(e) {
//     $(this)
//       .parent()
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//   });
// });
smoothScroll();
fetch(source)
  .then(response => response.json()) // this parses the data from string back into an object
  .then(data => {
    console.log("data", data);
    // data.feed.entry is the array that stores our projects
    // the projects are stored as objects
    let projects = data.feed.entry.map(project => {
      // console.log('project', project.gsx$title.$t)
      return {
        title: project.gsx$title.$t,
        image: project.gsx$image.$t,
        description: project.gsx$description.$t,
        url: project.gsx$url.$t,
        github: project.gsx$github.$t
      };
    });
    app(projects);
    $("#projects-container").flickity();
  }) // this provides us access to the parse data
  .catch(err => console.log("err", err));

function app(projects) {
  projects.forEach(project => {
    console.log(project);
    let $projectsContainer = $("#projects-container");
    let $projectContent = $(`
      <div class="project-item slide">
        <a href="${project.url}" target="_blank" class="project-link">
          <h2 class="project-title">
            ${project.title}
          </h2>
        </a>
        <div class="project-img-container">
            <img src="./imgs/spaceship.png" alt="" class="project-spaceship" />
            <a href="${project.url}" target="_blank" class="project-link">
              <img src="${project.image}" alt="" class="project-img" />
            </a>
        </div>
        <a href="${project.github}" target="_blank">(Github)</a>
      </div>
    `);
    $projectsContainer.append($projectContent);
  });
  // the rest of your app goes here
}

//Code taken from: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link#answer-7717572
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}
