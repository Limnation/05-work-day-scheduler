const containerEl = $('.container');

//adds the moment timer to the top of the page in the format of day, month date
var today = moment();
var date = today.format("dddd, MMM Do");
var militaryTime = moment().format("H");
var militaryTime = parseInt(militaryTime);
$("#currentDay").text(date);
var cat = document.getElementById("bob")

// array that hold military time(time) and stardard time(stime) also the The ID and data for the text area (idT) and button (btn)
var hours = [
    {
        time: "9",
        stime: "9am",
        idT: "#t-1",
        tId: "t-1",
        btn: "b-1"
    },
    {
        time: "10",
        stime: "10am",
        idT: "#t-2",
        tId: "t-2",
        btn: "b-2"
    },
    {
        time: "11",
        stime: "11am",
        idT: "#t-3",
        tId: "t-3",
        btn: "b-3"
    },
    {
        time: "12",
        stime: "12am",
        idT: "#t-4",
        tId: "t-4",
        btn: "b-4"
    },
    {
        time: "13",
        stime: "1pm",
        idT: "#t-5",
        tId: "t-5",
        btn: "b-5"
    },
    {
        time: "14",
        stime: "2pm",
        idT: "#t-6",
        tId: "t-6",
        btn: "b-6"
    },
    {
        time: "15",
        stime: "3pm",
        idT: "#t-7",
        tId: "t-7",
        btn: "b-7"
    },
    {
        time: "16",
        stime: "4pm",
        idT: "#t-8",
        tId: "t-8",
        btn: "b-8"
    },
    {
        time: "17",
        stime: "5pm",
        idT: "#t-9",
        tId: "t-9",
        btn: "b-9"
    }
];

// for loop that is populating the html with the calendar textarea's with the time being pulled from the array
for (let i = 0; i < hours.length; i++) {
    var newRow = document.createElement("section")
    newRow.innerHTML=`<div class='input-group input-group-lg'>
    <div class='input-group-prepend'>
      <span class='input-group-text' id='inputGroup-sizing-default'>${hours[i].stime}</span>
    </div>
    <textarea id='${hours[i].tId}' data-hourB='${hours[i].btn}' data-hourT='${hours[i].idT}' type='text' class='form-control area' placeholder='Activities' aria-label='Recipient's username' aria-describedby='basic-addon2'></textarea>
    <button id='${hours[i].btn}' class='btns savedIcon' class='btn btn-outline-secondary' type='button'><img src='images/save.png' alt='save icon'></button>
  </div>`
    containerEl.append(newRow)
}

//changed the text box colors depending on the time
for (let i = 0; i < hours.length; i++) {
    let hoursTime = hours[i].time;
    hoursTime = parseInt(hoursTime);
    let idCssT = hours[i].idT;
    //changes backgound color to "red" for current time
    if (militaryTime === hoursTime) {  
        $(idCssT).addClass("present");
    }
    //changes backgound color to "green" for future time
    if (militaryTime < hoursTime) {
        $(idCssT).addClass("future");
    }
    //changes backgound color to "gray" for past time
    if (militaryTime > hoursTime) {
        $(idCssT).addClass("past");
    }
}

//makes the function available after the document is loaded
$(document).ready(function () {
    //targets the button class btn then returns the previous sibling element(textarea)a and its ID then returns the value of the textrea's id with .val()
    $('.btns').on("click", function () {
        localStorage.setItem($(this).prop("id"), $(this).prev().val());
    });
    //gets all the stored data from local storage
    function localStorageCall() {
        //makes an array of textarea tag
        var timeareas = $('.area').toArray();
        //List each "textarea tag" in the array 
        timeareas.forEach(element => {
            //grabs the data-* unique values from all textareas
            var arrb = $(element).attr('data-hourB');
            var arrt = $(element).attr('data-hourT');
            //uses the unique values names are the keys and gets the value and saves it as savedT
            var savedT = localStorage.getItem(arrb);
            //assigns the saved data in the textarea
            $(arrt).val(savedT);
        });
    }
    //invoked local sotrage funtion
    localStorageCall()
});
