
/*
Template Name: D8 Design
Author: D8 Design
Website: https://D8 Design.com/
Contact: D8 Design@gmail.com
File: Kanbanboard Init Js File
*/

dragula([
    document.getElementById("todo-task"), 
    document.getElementById("inprogress-task"),
    document.getElementById("hold-task"),
    document.getElementById("completed-task")
]);