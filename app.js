let url =
  "https://docs.google.com/spreadsheets/d/1Aswi-SGbHQKjHJ_Pq9iRZTk9E7-WDkBNOweaJmtKlBk/edit#gid=0";
let id = "1DfAA8BO98XjX5GeqjctSKzKRZMktYXFHZGb8mR-fEQ0";

let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;
// let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

// ES6 - fetch

// fetch queries the url provided and requests that the data be sent to it
// it receives JSON => JS Object Notation
// we use .json() to parse the data from "{}" to an full blown {}
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
  }) // this provides us access to the parse data
  .catch(err => console.log("err", err));

function app(projects) {
  projects.forEach(project => {
    console.log(project);
    let $projectsContainer = $(".projects-container");
    let $projectContent = $(`
      <div class="project-item">
        <a href="${project.url}" class="project-link">
          <h2 class="project-title">
            ${project.title}
          </h2>
        </a>
        <div class="project-img-container">
          <img src="./imgs/spaceship.png" alt="" class="project-spaceship" />
          <img src="${project.image}" alt="" class="project-img" />
        </div>
        <a href="${project.github}">(Github)</a>
      </div>
    `);
    $projectsContainer.append($projectContent);
  });
  projects.forEach(project => {
    console.log(project);
    let $projectsContainer = $(".projects-container");
    let $projectContent = $(`
      <div class="project-item">
        <a href="${project.url}" class="project-link">
          <h2 class="project-title">
            ${project.title}
          </h2>
        </a>
        <div class="project-img-container">
          <img src="./imgs/spaceship.png" alt="" class="project-spaceship" />
          <img src="${project.image}" alt="" class="project-img" />
        </div>
        <a href="${project.github}">(Github)</a>
      </div>
    `);
    $projectsContainer.append($projectContent);
  });
  // the rest of your app goes here
}
