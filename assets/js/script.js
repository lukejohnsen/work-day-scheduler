var saveButton = $(".saveBtn");

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var taskStorage = function() {
    var textBlock = $(this).siblings(".info").val();
    var time = $(this).siblings(".info").attr("id");
    storage = localStorage.setItem(time, textBlock);
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