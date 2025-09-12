"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

const errorUsers = [
  { id: 11, name: "Boba Fett", age: 50 },                             
  { id: 12, name: "", age: 19 },
  { id: 13, age: 23 },       
];

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"

const userList = document.getElementById("names-list");

users.forEach(user => {
  console.log(user.name);
  const li = document.createElement("li");
  li.textContent = user.name;
  userList.appendChild(li);
});

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
const youngUserList = document.getElementById("young-characters-list");
const maxAge = 40;
const usersLessThanAge = users.filter(user => user.age < maxAge);

usersLessThanAge.forEach(user => {
  console.log(user.name);
  const li = document.createElement("li");
  li.textContent = user.name;
  youngUserList.appendChild(li);
});

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
renderUserList(users, "function-list");

function renderUserList(usersArray, listId, errorDivId) {
  const listElement = document.getElementById(listId);
  const errorDiv = errorDivId ? document.getElementById(errorDivId) : null;

  listElement.innerHTML = "";
  if (errorDiv) errorDiv.innerHTML = "";

  usersArray.forEach((user, id) => {
    const hasName =
      user &&
      typeof user.name === "string" &&
      user.name.trim().length > 0;
    if (hasName) {
      const li = document.createElement("li");
      li.textContent = user.name.trim();
      listElement.appendChild(li);
    } else {
      const errorMessage = `Warning: Object at ID# ${id} is missing name property `;
      console.error(errorMessage);

      if (errorDiv) {
        const el = document.createElement("div");
        el.className = "error-message";
        el.textContent = errorMessage;
        errorDiv.appendChild(el);
      }
    }
  });
}


// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

function usersUnderThirty (usersArray, ar, ageThreshold) {
  const listElement = document.getElementById(ar);
  listElement.innerHTML = "";
  const filtered = usersArray.filter(user => user.age < ageThreshold);

  filtered.forEach(user => {
    console.log(user.name);
    const li = document.createElement("li");
    li.textContent = user.name;
    listElement.appendChild(li);
  });
}
usersUnderThirty(users, "age-filter-list", 30);

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
renderUserList(users, "error-handling-list", "error-messages");

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

renderUserList(errorUsers, "broken-array-list", "broken-array-errors");
