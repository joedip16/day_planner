$( document ).ready(function() {
    console.log( "ready!" );


var todaysDate = moment().format('ll');
$("#currentDay").html(todaysDate)

var currentHour = moment().hour()
console.log(currentHour)

var hourRow = 17
if (currentHour > hourRow){
    console.log("In the past")
    $(".9am").addClass("past")
}
else if(currentHour < hourRow){
    console.log("In the future")
    $(".9am").addClass("future")
}
else{
    console.log("Right now!")
    $(".9am").addClass("present")
}


});