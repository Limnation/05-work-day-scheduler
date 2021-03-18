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
    console.log($(cssItems));
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

for (let i = 0; i < timer.length; i++) {
    timer[i];
    storageItems = timer[i].storage;
    btnItems = timer[i].btnItem;
}

//T1
renderLocastorageT1()

function renderLocastorageT1() {
    var savedT1 = JSON.parse(localStorage.getItem("t-1Text"));
    console.log(savedT1);
    $('#t-1').val(savedT1);
}

$("#b-1").on("click", function () {
    t1 = $('#t-1').val();
    localStorage.setItem("t-1Text", JSON.stringify(t1));
    if (t1 === JSON.parse(localStorage.getItem("t-1Text"))) {
        $('#t-1').css("color", "black");
        $('#t-1').css("font-weight", "bold");
    }   
});

//T2
renderLocastorageT2()

function renderLocastorageT2() {
    var savedT2 = JSON.parse(localStorage.getItem("t-2Text"));
    console.log(savedT2);
    $('#t-2').val(savedT2);
}

$("#b-2").on("click", function () {
    t2 = $('#t-2').val();
    localStorage.setItem("t-2Text", JSON.stringify(t2));
    if (t2 === JSON.parse(localStorage.getItem("t-2Text"))) {
        $('#t-2').css("color", "black");
        $('#t-2').css("font-weight", "bold");
    }   
});

//T3
renderLocastorageT3()

function renderLocastorageT3() {
    var savedT3 = JSON.parse(localStorage.getItem("t-3Text"));
    console.log(savedT3);
    $('#t-3').val(savedT3);
}

$("#b-3").on("click", function () {
    t3 = $('#t-3').val();
    localStorage.setItem("t-3Text", JSON.stringify(t3));
    if (t3 === JSON.parse(localStorage.getItem("t-3Text"))) {
        $('#t-3').css("color", "black");
        $('#t-3').css("font-weight", "bold");
    }   
});

//T4
renderLocastorageT4()

function renderLocastorageT4() {
    var savedT4 = JSON.parse(localStorage.getItem("t-4Text"));
    console.log(savedT4);
    $('#t-4').val(savedT4);
}

$("#b-4").on("click", function () {
    t4 = $('#t-4').val();
    localStorage.setItem("t-4Text", JSON.stringify(t4));
    if (t4 === JSON.parse(localStorage.getItem("t-4Text"))) {
        $('#t-4').css("color", "black");
        $('#t-4').css("font-weight", "bold");
    }   
});

//T5
renderLocastorageT5()

function renderLocastorageT5() {
    var savedT5 = JSON.parse(localStorage.getItem("t-5Text"));
    console.log(savedT5);
    $('#t-5').val(savedT5);
}

$("#b-5").on("click", function () {
    t5 = $('#t-5').val();
    localStorage.setItem("t-5Text", JSON.stringify(t5));
    if (t5 === JSON.parse(localStorage.getItem("t-5Text"))) {
        $('#t-5').css("color", "black");
        $('#t-5').css("font-weight", "bold");
    }   
});

//T6
renderLocastorageT6()

function renderLocastorageT6() {
    var savedT6 = JSON.parse(localStorage.getItem("t-6Text"));
    console.log(savedT6);
    $('#t-6').val(savedT6);
}

$("#b-6").on("click", function () {
    t6 = $('#t-6').val();
    localStorage.setItem("t-6Text", JSON.stringify(t6));
    if (t6 === JSON.parse(localStorage.getItem("t-6Text"))) {
        $('#t-6').css("color", "black");
        $('#t-6').css("font-weight", "bold");
    }   
});

//T7
renderLocastorageT7()

function renderLocastorageT7() {
    var savedT7 = JSON.parse(localStorage.getItem("t-7Text"));
    console.log(savedT7);
    $('#t-7').val(savedT7);
}

$("#b-7").on("click", function () {
    t7 = $('#t-7').val();
    localStorage.setItem("t-7Text", JSON.stringify(t7));
    if (t7 === JSON.parse(localStorage.getItem("t-7Text"))) {
        $('#t-7').css("color", "black");
        $('#t-7').css("font-weight", "bold");
    }   
});

//T8
renderLocastorageT8()

function renderLocastorageT8() {
    var savedT8 = JSON.parse(localStorage.getItem("t-8Text"));
    console.log(savedT8);
    $('#t-8').val(savedT8);
}

$("#b-8").on("click", function () {
    t8 = $('#t-8').val();
    localStorage.setItem("t-8Text", JSON.stringify(t8));
    if (t8 === JSON.parse(localStorage.getItem("t-8Text"))) {
        $('#t-8').css("color", "black");
        $('#t-8').css("font-weight", "bold");
    }   
});

//T9
renderLocastorageT9()

function renderLocastorageT9() {
    var savedT9 = JSON.parse(localStorage.getItem("t-9Text"));
    console.log(savedT9);
    $('#t-9').val(savedT9);
}

$("#b-9").on("click", function () {
    t9 = $('#t-9').val();
    localStorage.setItem("t-9Text", JSON.stringify(t9));
    if (t9 === JSON.parse(localStorage.getItem("t-9Text"))) {
        $('#t-9').css("color", "black");
        $('#t-9').css("font-weight", "bold");
    }   
});