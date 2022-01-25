$(document).ready(function () {

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    function timeColor() {
        var realTime = moment().hours()
        $(".time-block").each(function () {
            var rowTime = parseInt($(this).attr("id").split("-")[1]);
            console.log(rowTime, realTime);

            //if statement to compare realTime to rowTime
            // add past present future classes depending on the time
            if (rowTime < realTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (rowTime === realTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })

        timeColor()

        //click listener for save button to save data to localStorage

        //localStorage getItem to retreive localStorage data


    })