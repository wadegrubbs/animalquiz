
$(document).ready(function(){
$("form#animalForm").submit(function(event){
var count = 0;

var q1 = $("input#q1").val();
var q2 = $("input#q2").val();
var q3 = $("input#q3").val();
var q4 = $("input#q4").val();
var q5 = $("input#q5").val();


if (q1 === "Extroverted") {
  count += 1;
} else if (q1 === "Introverted") {
    count += 2;
} else if (q1 === "Sociopathic"){
    count += 3;
  }else {
    console.log("error");
  }

if (q2 === "Totally") {
    count += 1;
  } else if (q2 === "Sorta") {
      count += 2;
    }else if(q2 === "Negativo"){
      count += 3;
    }else {
      console.log("error");
    }

    if (q3 === "Fur!") {
      count += 1;
    } else if (q3 === "Whatever") {
      count += 2;
    }else if(q3 === "Ewww"){
      count += 3;
    }else {
      console.log("error");
    }

    if (q4 === "No") {
      count += 1;
    } else if (q4=== "Kinda") {
      count += 2;
    }else if (q4 === "Yes"){
      count += 3;
    }else {
      console.log("error");
    }

    if (q5 === "Lots") {
      count += 1;
    } else if (q5 === "Some") {
      count += 2;
    }else if (q5 === "What?"){
      count += 3;
    }else {
      console.log("error");
    }

    if (count < 8) {
      alert("Get a dog!");
        $("div#animal").append("<p>Get a dog.</p>");
    }else if (7 < count < 12){
      alert("Get a cat!");
        $("div#animal").text("Get a cat.");
    }else if (count > 11){
      alert("Get a fish!");
        $("div#animal").text("Get a fish.");
    }else{
      $("span#animal").text("Oops, something not right.");
    }
    console.log(count);
    // $("form").hide();
  event.preventDefault();
});
});
