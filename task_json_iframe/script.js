const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
     "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
     "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"},
    };
    
    
    // write your code here
    // you need to display the list of work titles in a navigation panel
    // if a work title is clicked, the body section should display the work without reloading the page
    function loadNavigation() {
     const taskList = document.getElementById("task-list");
     for (let taskKey in works) {
     const listItem = document.createElement("li");
    const link = document.createElement("a");
 link.href = "#";
    link.textContent = works[taskKey].title;
   link.onclick = () => displayTask(taskKey);
 listItem.appendChild(link);
    taskList.appendChild(listItem);
    }
    }
    
    
    // Function to display the selected task's content
    function displayTask(taskKey) {
   const task = works[taskKey];
   const contentArea = document.querySelector(".content");

  contentArea.innerHTML = `<h2>${task.title}</h2>`;
 contentArea.style.backgroundColor = task.color;
    }
    
    
    // Initial setup
    loadNavigation();
    