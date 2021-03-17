const containerEl = $('.container');

//adds the moment timer to the top of the page in the format of day, month date
var today = moment();
var date = today.format("dddd, MMM Do");
var militaryTime = moment().format("H");
$("#currentDay").text(date);

// array that hold military time(time) and stardard time(stime) also the The ID and data for the text area (idT) and button (btn)
var hours = [
    {
        time: "09",
        stime: "9AM",
        idT: "#t-1",
        tId: "t-1",
        btn: "#b-1"
    },
    {
        time: "10",
        stime: "10AM",
        idT: "#t-2",
        tId: "t-2",
        btn: "#b-2"
    },
    {
        time: "11",
        stime: "11AM",
        idT: "#t-3",
        tId: "t-3",
        btn: "#b-3"
    },
    {
        time: "12",
        stime: "12AM",
        idT: "#t-4",
        tId: "t-4",
        btn: "#b-4"
    },
    {
        time: "13",
        stime: "1pm",
        idT: "#t-5",
        tId: "t-5",
        btn: "#b-5"
    },
    {
        time: "14",
        stime: "2pm",
        idT: "#t-6",
        tId: "t-6",
        btn: "#b-6"
    },
    {
        time: "15",
        stime: "3pm",
        idT: "#t-7",
        tId: "t-7",
        btn: "#b-7"
    },
    {
        time: "16",
        stime: "4pm",
        idT: "#t-8",
        tId: "t-8",
        btn: "#b-8"
    },
    {
        time: "17",
        stime: "5pm",
        idT: "#t-9",
        tId: "t-9",
        btn: "#b-9"
    }
];

// for loop that is populating the html with the calendar textarea's with the time being pulled from the array
for (let i = 0; i < hours.length; i++) {

    var newRow = document.createElement("section")
    newRow.innerHTML=`<div class='input-group input-group-lg'>
    <div class='input-group-prepend'>
      <span class='input-group-text' id='inputGroup-sizing-default'>${hours[i].stime}</span>
    </div>
    <textarea id='${hours[i].tId}' data-hour='${hours[i].time}' type='text' class='form-control' placeholder='Activities' aria-label='Recipient's username' aria-describedby='basic-addon2'></textarea>
    <div class='input-group-append savedIcon'>
      <button id='${hours[i].btn}' class='btn btn-outline-secondary' type='button'><img src='/images/save.png' alt='saved icon'></button>
    </div>
  </div>`
   
    console.log(hours[i])
    containerEl.append(newRow)
}

//changed the text box colors depending on the time
for (let i = 0; i < hours.length; i++) {
    hours[i].time;
    idCssT = hours[i].idT;
    //changes backgound color to "red" for current time
    if (militaryTime === hours[i].time) {  
        $(idCssT).css("background-color", "#fc4a409c" );
    }
    //changes backgound color to "green" for current time
    if (militaryTime < hours[i].time) {
        $(idCssT).css("background-color", "#40fc6f9c");
    }
    //changes backgound color to "gray" for current time
    if (militaryTime > hours[i].time) {
        $(idCssT).css("background-color", "#5050509c");
    }
}

$(document).ready(function () {
    $('#t-1').on("click", function () {
        localStorage.setItem("timeOneText", $('#t-1').val());
        // var savedT1 = JSON.parse(localStorage.getItem("timeOneText"));
        // $('#t-1').val(savedT1);
            // if (t1 === JSON.parse(localStorage.getItem("t-1Text"))) {
            //     $('#t-1').css("color", "black");
            //     $('#t-1').css("font-weight", "bold");
            // }  
    });
});