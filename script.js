// const hamburger=document.getElementById("hamb");
// const navbar_menu=document.getElementById("navbar-menu");

// //Function for Hamburger navbar
// hamburger.addEventListener("click", (e)=>{
//     if(navbar_menu.style.display=="none"){
//         navbar_menu.style.display="block";
//     }else{
//         navbar_menu.style.display="none";
//     }
// })

// //Function for Resume to open on the next tab
// function resume(){
//     window.open("./Himanshu-jain-Resume.pdf.pdf","_blank")
//   }

// // Third-party library to disply GitHub Calender
// // GitHubCalendar(".calendar", "Himanshuj0311", {
// //     responsive: true,
// //     global_stats: true,
// //     tooltips: true
// //   });

// GitHubCalendar(".calendar", "Himanshuj0311");
//             // // or enable responsive functionality
//             GitHubCalendar(".calendar", "Himanshuj0311", { responsive: true });
//             fetch("https://api.github.com/users/Himanshuj0311/events")
//             .then((response) => response.json())
//             .then((data) => {
//                 const privateCommits = data.filter((event) => event.type === "PushEvent");

//                 // Convert the commit data to the required format for GitHubCalendar library
//                 const privateCommitData = privateCommits.map((commit) => ({
//                     date: commit.created_at,
//                     count: commit.payload.commits.length
//                 }));

//                 // Display the private repository commits on the calendar
//                 GitHubCalendar(".calendar", "Himanshuj0311", { data: privateCommitData });
//             })
//             .catch((error) => {
//                 console.error("Error fetching commit data:", error);
//             });

const hamburger = document.getElementById("hamb");
const navbar_menu = document.getElementById("navbar-menu");

//Function for Hamburger navbar
hamburger.addEventListener("click", (e) => {
  if (navbar_menu.style.display == "none") {
    navbar_menu.style.display = "block";
  } else {
    navbar_menu.style.display = "none";
  }
});

//Function for Resume to open on the next tab
function resume() {
  window.open(
    "https://drive.google.com/file/d/18MzeDODpMo8a6mnJsZD71V_tKndfGgnf/view?usp=sharing",
    "_blank"
  );
}

// Third-party library to disply GitHub Calender
// GitHubCalendar(".calendar", "shubhamthite09", {
//     responsive: true,
//     global_stats: true,
//     tooltips: true
// });
// GitHubCalendar(".calendar","shubhamthite09", {
//     proxy (username) {
//       return fetch(`https://your-proxy.com/github?user=${username}`)
//     }
//  }).then(r => r)
GitHubCalendar(".calendar", "Himanshuj0311");
