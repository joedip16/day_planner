$( document ).ready(function() {
    console.log( "ready!" );


var todaysDate = moment().format('ll');
$("#currentDay").html(todaysDate)

var currentHour = moment().hour()
console.log(currentHour)

$(".hours").each(function(index){
    console.log(index)
    var hourRow = $(this).attr("id")
    console.log(hourRow)
    if (currentHour > hourRow){
        console.log("In the past")
        $(this).addClass("past")
        
    }
    else if(currentHour < hourRow){
        console.log("In the future")
        $(this).addClass("future")
    }
    else{
        console.log("Right now!")
        $(this).addClass("present")
    }
})
    var retrievedInput = localStorage.getItem("woop")
    console.log(retrievedInput)
    $("#9").html(retrievedInput)
    $(".btn").on("click", function () {
    var storedInput = $(this).prev(".textarea").val(retrievedInput)
    var divKey = $(this).attr("id")
    console.log(divKey)
    console.log(storedInput)
    localStorage.setItem(divKey, storedInput)
    })







        //find a way to traverse the dom using jquery to grab textarea value next to button that is clicked
        //think .siblings .prev maybe there is another solution? resturcture html maybe a bettter method?


// var possibleTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17]



// function colorPicker(){
// for(var i = 0; i < possibleTimes.length; i++){
//     var hourRow = 21
//     console.log(hourRow)
    // if (currentHour > hourRow){
    //     console.log("In the past")
    //     $(".10am").addClass("past")
        
    // }
    // else if(currentHour < hourRow){
    //     console.log("In the future")
    //     $(".10am").addClass("future")
    // }
    // else{
    //     console.log("Right now!")
    //     $(".10am").addClass("present")
    // }
// }



// }

});