const postsContainerElem = document.getElementById("postsContainer");
const searchInputElem = document.getElementById("searchInput");

let allPosts = [];

async function fetchPostsFromBackend() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      alert("Error fetching posts. Try again later!");
      return [];
    }

    const posts = await response.json();

    return posts;
  } catch (error) {
    return [];
  }
}

function displayPostsOnUI(posts) {
  const postsLength = posts.length;

  // Clear old posts from UI
  postsContainerElem.innerHTML = "";

  for (let index = 0; index < postsLength; index++) {
    const currentPost = posts[index];

    const postContainerElem = document.createElement("div");
    postContainerElem.classList.add("postContainer");

    postContainerElem.innerHTML = `
        <h1>${currentPost.id}</h1>
        <h2>${currentPost.title}</h2>
        <p>${currentPost.body}</p>
      `;

    postsContainerElem.appendChild(postContainerElem);
  }
}

// IIFE
(async function () {
  try {
    allPosts = await fetchPostsFromBackend();

    displayPostsOnUI(allPosts);
  } catch (e) {
    alert("Error in displaying posts");
    console.error(e.message);
  }
})();

searchInputElem.addEventListener("input", async function (e) {
  // Get the user's search text
  const searchText = searchInputElem.value.trim();

  // Filter all posts based on user's search text
  const filteredPosts = allPosts.filter(function (post) {
    const titleLowercase = post.title.toLowerCase();
    const bodyLowercase = post.body.toLowerCase();
    const searchTextLowercase = searchText.toLowerCase();

    const isFoundInTitle = titleLowercase.indexOf(searchTextLowercase) !== -1;
    const isFoundInBody = bodyLowercase.indexOf(searchTextLowercase) !== -1;

    return isFoundInTitle || isFoundInBody;
  });

  // Display the filtered posts
  displayPostsOnUI(filteredPosts);
})

// const users = [
//   { fn: "Bola", sn: "Tinubu" },
//   { fn: "Remi", sn: "Tinubu" },
//   { fn: "Bala", sn: "Mohammed" },
//   { fn: "Binta", sn: "Mohammed" },
//   { fn: "Chima", sn: "Okeke" },
//   { fn: "Joy", sn: "Okeke" }
// ];

// // Array methods: filter, find, foreach, map

// const usersWithTinubu = users.filter(function(user){
//   const isFound = user.sn.indexOf("Tinubu") !== -1;
//   return isFound;
// });

// const usersWithOkeke = users.filter(function(user){
//   const isFound = user.sn.indexOf("Okeke") !== -1;
//   return isFound;
// });

// const usersWithYemi = users.filter(function(user){
//   const isFound = user.sn.indexOf("Yemi") !== -1;
//   return isFound;
// });

// console.log({users});
// console.log({usersWithTinubu});
// console.log({usersWithOkeke});
// console.log({usersWithYemi});