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
    var retrievedInput = localStorage.getItem("9am")
    $("#9").text(retrievedInput)
    $(".saveBtn9").on("click", function () {
    var storedInput = $("#9").val()
    localStorage.setItem("9am", storedInput)
    })

    var retrievedInput10 = localStorage.getItem("10am")
    $("#10").text(retrievedInput10)
    $(".saveBtn10").on("click", function () {
    var storedInput10 = $("#10").val()
    localStorage.setItem("10am", storedInput10)
    })

    var retrievedInput11 = localStorage.getItem("11am")
    $("#11").text(retrievedInput11)
    $(".saveBtn11").on("click", function () {
    var storedInput11 = $("#11").val()
    localStorage.setItem("11am", storedInput11)
    })

    var retrievedInput12 = localStorage.getItem("12pm")
    $("#12").text(retrievedInput12)
    $(".saveBtn12").on("click", function () {
    var storedInput12 = $("#12").val()
    localStorage.setItem("12pm", storedInput12)
    })

    var retrievedInput13 = localStorage.getItem("13pm")
    $("#13").text(retrievedInput13)
    $(".saveBtn13").on("click", function () {
    var storedInput13 = $("#13").val()
    localStorage.setItem("13pm", storedInput13)
    })

    var retrievedInput14 = localStorage.getItem("14pm")
    $("#14").text(retrievedInput14)
    $(".saveBtn14").on("click", function () {
    var storedInput14 = $("#14").val()
    localStorage.setItem("14pm", storedInput14)
    })

    var retrievedInput15 = localStorage.getItem("15pm")
    $("#15").text(retrievedInput15)
    $(".saveBtn15").on("click", function () {
    var storedInput15 = $("#15").val()
    localStorage.setItem("15pm", storedInput15)
    })

    var retrievedInput16 = localStorage.getItem("16pm")
    $("#16").text(retrievedInput16)
    $(".saveBtn16").on("click", function () {
    var storedInput16 = $("#16").val()
    localStorage.setItem("16pm", storedInput16)
    })

    var retrievedInput17 = localStorage.getItem("17pm")
    $("#17").text(retrievedInput17)
    $(".saveBtn17").on("click", function () {
    var storedInput17 = $("#17").val()
    localStorage.setItem("17pm", storedInput17)
    })

});