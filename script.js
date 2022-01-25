$(document).ready(function(){


$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

function timeColor(){
    var realTime = moment().hours()
    $(".time-block").each(function(){
        var rowTime = parseInt($(this).attr("id").split("-")[1])
        console.log("Row Time: ", rowTime)

        //if statement to compare realTime to rowTime
        // add past present future classes depending on the time


    })
}

timeColor()

//click listener for save button to save data to localStorage

//localStorage getItem to retreive localStorage data







































})