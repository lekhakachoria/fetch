// fetch("https://api.github.com/users/mulinater")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(` Muli has ${json.followers} followers`);
//   });

//   console.log(json.id, json.name));

// fetch("https://api.github.com/users/mulinater").then((response) =>
//   response.json().then((json) => {
//     json.forEach((project) => {
//       console.log(project.followers);
//     });
//   })
// );

// Task 1 Sample Github API

// Use fetch() to find out the followings:
// 1. The number of public git repos you have
fetch("https://api.github.com/users/mulinater")
  .then((response) => response.json())
  .then((json) => {
    console.log(json.public_repos);
  });
// Beginning of Task 2

// Question 3

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(`Total number of photos is ${json.length}`);
//   });

// Question 5

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     const completedTodos = json.filter((todo) => todo.completed);
//     console.log(`Total number of completed todos: ${completedTodos.length}`);
//   })
//   .catch((error) => console.error("Error fetching todos:", error));

//   question 6

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    console.log("Completed Todos:");
    for (let todo of json) {
      if (todo.completed) {
        console.log(`ID: ${todo.id}, Title: ${todo.title}`);
      }
    }
  })
  .catch((error) => console.error("Error fetching todos:", error));
