// TASK 1
// Question 1
fetch("https://api.github.com/users/mulinater")
  .then((response) => response.json())
  .then((json) => {
    console.log(`Muli has ${json.public_repos} repos`);
  });

// Question 2
fetch("https://api.github.com/users/mulinater")
  .then((response) => response.json())
  .then((json) => {
    console.log(` Muli has ${json.followers} followers`);
  });

// Question 3; changed it to someone with followers
fetch("https://api.github.com/users/mulinater/followers")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((follower) => {
      console.log(`Muli's follower: ${follower.login}`);
    });
  });

// ----------------------------------------------------------------------------------------
// Beginning of Task 2
// Question 1
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => {
    console.log(`There are ${json.length} comments.`);
    // Logs the number of comments
  });
// Question 2
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => {
    console.log(`Total number of photos is ${json.length}`);
  });
// Question 3
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => {
    console.log(`Total number of photos is ${json.length}`);
  });

// Question 4
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((person) => {
      console.log(`Name: ${person.name}, City: ${person.address.city}`);
    });
  });

// Question 5
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const completedTodos = json.filter((todo) => todo.completed);
    console.log(`Total number of completed todos: ${completedTodos.length}`);
  })
  .catch((error) => console.error("Error fetching todos:", error));

// Question 6
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

// Question 7
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        todos.forEach((todo) => {
          if (todo.completed === false) {
            // Check if the todo is incomplete
            const user = users.find((user) => user.id === todo.userId);
            if (user) {
              console.log(`Incomplete Todo: ${todo.title}, User: ${user.name}`);
            }
          }
        });
      });
  });

// Question 8
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    let albumOwnerUserId = null;

    // Use forEach to find the album titled "quidem molestiae enim"
    albums.forEach((album) => {
      if (album.title === "quidem molestiae enim") {
        albumOwnerUserId = album.userId;
      }
    });

    if (albumOwnerUserId) {
      // Fetch the user who owns this album
      fetch(`https://jsonplaceholder.typicode.com/users/${albumOwnerUserId}`)
        .then((response) => response.json())
        .then((user) => {
          console.log(
            `User owning album "quidem molestiae enim": ${user.name}`
          );
        });
    } else {
      console.error("Album not found");
    }
  });
