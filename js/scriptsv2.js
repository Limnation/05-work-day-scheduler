var today = moment();
var date = today.format("dddd, MMM Do");
$("#currentDay").text(date);

let storageItems;
let cssItems;
let btnItems;

var militaryTime = moment().format("H");
let timer = [
    {
        time: "09",
        cssItem: "#t-1",
        btnItem: "#b-1",
        storage: "#t-1Text"
    },
    {
        time: "10",
        cssItem: "#t-2",
        btnItem: "#b-2",
        storage: "#t-2Text"
    },
    {
        time: "11",
        cssItem: "#t-3",
        btnItem: "#b-3",
        storage: "#t-3Text"
    },
    {
        time: "12",
        cssItem: "#t-4",
        btnItem: "#b-4",
        storage: "#t-4Text"
    },
    {
        time: "13",
        cssItem: "#t-5",
        btnItem: "#b-5",
        storage: "#t-5Text"
    },
    {
        time: "14",
        cssItem: "#t-6",
        btnItem: "#b-6",
        storage: "#t-6Text"
    },
    {
        time: "15",
        cssItem: "#t-7",
        btnItem: "#b-7",
        storage: "#t-7Text"
    },
    {
        time: "16",
        cssItem: "#t-8",
        btnItem: "#b-8",
        storage: "#t-8Text"
    },
    {
        time: "17",
        cssItem: "#t-9",
        btnItem: "#b-9",
        storage: "#t-9Text"
    }
];

// renderLocastorage()

for (let i = 0; i < timer.length; i++) {
    timer[i].time;
    cssItems = timer[i].cssItem;
    if (militaryTime === timer[i].time) {  
        $(cssItems).css("background-color", "red");
    }
    if (militaryTime < timer[i].time) {
        $(cssItems).css("background-color", "green");
    }
    if (militaryTime > timer[i].time) {
        $(cssItems).css("background-color", "gray");
    }
}


function storageItemsFun() {
    let storageItems = [];
    for (let i = 0; i < timer.length; i++) {
        storageItems.push(timer[i].storage);
    }
    return storageItems;
}
let storageItemsstuff = JSON.stringify(storageItemsFun());
console.log(storageItemsstuff);

function btnItemsFun() {
    let btnItems = [];
    for (let i = 0; i < timer.length; i++) {
        btnItems.push(timer[i].btnItem);
    }
    return btnItems;
}
let btnItemsstuff = JSON.stringify(btnItemsFun());
console.log(btnItemsstuff);


function cssItemsFun() {
    let cssItems = [];
    for (let i = 0; i < timer.length; i++) {
        cssItems.push(timer[i].cssItem);
        return cssItems[i];
    }
}
let cssItemsstuff = JSON.stringify(cssItemsFun());
console.log(cssItemsstuff);
 

function renderLocastorage(savedT1) {
    var savedT1 = JSON.parse(localStorage.getItem("t-1Text"));
    $(cssItemsFun()).val(savedT1);
}

$('#t-1').on("click", function () {
    t1 = $(cssItemsstuff).val();
    localStorage.setItem("t-1Text", JSON.stringify(t1));
    if (t1 === JSON.parse(localStorage.getItem("t-1Text"))) {
        $('#t-1').css("color", "black");
        $('#t-1').css("font-weight", "bold");
    }   
});



// for (let i = 0; i < timer.length; i++) {
//     timer[i];
//     storageItems = timer[i].storage;
//     btnItems = timer[i].btnItem;
// }

// //T1
// renderLocastorageT1()

// function renderLocastorageT1() {
//     var savedT1 = JSON.parse(localStorage.getItem("t-1Text"));
//     console.log(savedT1);
//     $('#t-1').val(savedT1);
// }

// $("#b-1").on("click", function () {
//     t1 = $('#t-1').val();
//     localStorage.setItem("t-1Text", JSON.stringify(t1));
//     if (t1 === JSON.parse(localStorage.getItem("t-1Text"))) {
//         $('#t-1').css("color", "black");
//         $('#t-1').css("font-weight", "bold");
//     }   
// });
