$(document).ready(function () {
    

    
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));





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
        
    
    
        
            for (let i = 8; i <= 17; i++) {
                // load saved items
                var savedText = localStorage.getItem("text-" + i);
                                                   
                $("#row-"+i+">textarea").val(savedText);
                
                    
                var targetBtn = $("#row-"+i+">button")
            
                targetBtn.on("click", function() {
                    var text = $("#row-"+i+">textarea").val();
            
                    localStorage.setItem("text-"+i,text);
                }); 
            }
})