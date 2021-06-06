var userChoices = document.getElementsByTagName('input[type:button]');
var questions = [ {
    question: "Commonly used data type Do Not include:---",
    choices: ["strings","booleance","alerts", "numbers"],
    answer : 3 
},
{
    question: "The condition in an if/else statement is enclosed within:---",
    choices: ["quotes","Curly brackets","parentheses", "square brackets"],
    answer : 3   
},
{
    question: "Arrays in JavaScript can be used to store:---",
    choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
    answer : 4  
},
{
    question: "String values must be enclosed within --- when being assigned to variables ",
    choices: ["commas","curly brackets","quotes","parentheses"],
    answer : 3    
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:---",
    choices: ["JavaScript","terminal/bash","alerts", "console.log"],
    answer : 4    
},];



for ( var i = 0; i < questions.length; i++ ) {
    var question = questions[i].question;
    document.write ( question );
    var options = questions[i].choices;
    document.body.appendChild(document.createElement("br"));
     var name = "button"+i; 
    for ( var opt in options ) {
    
      var buttonEle = document.createElement("input");
      buttonEle.type = "button";          
      buttonEle.value = options[opt];
      document.body.appendChild(buttonEle);
      document.body.appendChild(document.createElement("br"));
    }
    
    document.body.appendChild(document.createElement("br"));
    
  }