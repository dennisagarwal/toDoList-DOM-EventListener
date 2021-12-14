import "./styles.css";

// array of great tasks to append to the DOM
const tasks = [];

const taskList = document.querySelector(".taskList");

// function to loop through array and append to taskList
function appendTasksToDom(tasksArray) {
  // Go through the list of tasks
  for (let i = 0; i < tasksArray.length; i++) {
    // Create li element, add a class, change its inner text
    console.log(tasksArray[i]);
    let listElement = document.createElement("li");
    listElement.classList.add("taskList__task");
    listElement.innerHTML = tasksArray[i];

    // Add click listener for this li element
    // We're doing this in a loop because we want to listen for clicks on all li elements
    listElement.addEventListener("click", function (event) {
      // console.log(event.target.value);
      console.log(event.target.innerHTML);
      alert(`${event.target.innerText} is completed`);
      event.target.innerText = "Task Completed!";

      // We could even delete this element by doing this
      taskList.removeChild(event.target);
    });

    // Add li element to book list
    taskList.appendChild(listElement);
  }
}

// call/invoke the append tasks function
appendTasksToDom(tasks);

const addButton = document.querySelector(".add-btn");
// const completedButton = document.querySelector(".completed-btn");

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  const taskName = document.querySelector(".task-name");
  console.log(taskName.value);

  // Could clear the task list and add elements all over again OR just add the last element
  // taskList.innerHTML = '';
  // tasks.push(taskName.value);
  // appendTasksToDom(tasks);

  // const book = [];
  // task.push(taskName.value)
  // 👆🏼 is same as [taskName.value]
  appendTasksToDom([taskName.value]);
});

//prevent default is for preventing the default behaviour of the button
//in form or the submit buuton
//inner text is used to get the value of a div
//value is used to get the value of the input
//event.stoPropogation
