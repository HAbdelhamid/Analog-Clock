const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var hrPosition = 30;
var minPosition = 140;
var secPosition = 200;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)" ;
MINUTEHAND.style.transform = "rotate(" + minPosition  +"deg)" ;
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)" ;