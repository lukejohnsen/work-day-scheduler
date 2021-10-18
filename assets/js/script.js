
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - done
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours - done
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future - done
// WHEN I click into a time block
// THEN I can enter an event - done
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage - done
// WHEN I refresh the page
// THEN the saved events persist - done

var saveButton = $(".saveBtn");

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var taskStorage = function() {
    var textBlock = $(this).siblings(".info").val();
    var time = $(this).siblings(".info").attr("id");
    storage = localStorage.setItem(time, JSON.stringify(textBlock));
};

saveButton.on("click", taskStorage);

var getTaskStorage = function() {
    var hourArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    var timeConfirm = moment().hour();

    for (var i = 0; i < hourArray.length; i++) {
        var hours = "#" + hourArray[i];

        $(hours).val(localStorage.getItem(hourArray[i]));

        if(hourArray[i] > timeConfirm) {
            $(hours).addClass("bg-success");
        }
        else if (hourArray[i] < timeConfirm) {
            $(hours).addClass("bg-secondary")
        }
    }
};

getTaskStorage();