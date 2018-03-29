
//functions to perform 2D transformations on front view
function funcfronttrans(value) {
document.getElementById("ftrans").value=value;
var x = value;
var y="translate("+x+"px,0px)";
document.getElementById("front").style.transform = y;
}
	
function funcfrontrot(value) {
var i=value+" deg";
document.getElementById("frot").value=i;
var x = value;
var y="rotate("+x+"deg)";
document.getElementById("front").style.transform = y;
//document.getElementById("front").style.transform = "rotate(20deg)";
}
	
function funcfrontscale(value) {
document.getElementById("fscale").value=value;
var x = value;
var y="scale("+x+","+x+")";
document.getElementById("front").style.transform = y;
}
	
function funcfrontshear(value) {
var i=value+" deg";
document.getElementById("fskew").value=i;
var x = value;
var y="skewX("+x+"deg)";
document.getElementById("front").style.transform = y;
}
	
//functions to perform 2D transformations on side view
function funcsidetrans(value) {
document.getElementById("strans").value=value;
var x = value;
var y="translate("+x+"px,0px)";
document.getElementById("side").style.transform = y;
}
	
function funcsiderot(value) {
var i=value+" deg";
document.getElementById("srot").value=i;
var x = value;
var y="rotate("+x+"deg)";
document.getElementById("side").style.transform = y;
}
	
function funcsidescale(value) {
document.getElementById("sscale").value=value;
var x = value;
var y="scale("+x+","+x+")";
document.getElementById("side").style.transform = y;
}
	
function funcsideshear(value) {
var i=value+" deg";
document.getElementById("sskew").value=i;
var x = value;
var y="skewX("+x+"deg)";
document.getElementById("side").style.transform = y;
}
	
//functions to perform 2D transformations on top view
	
function functoptrans(value) {
document.getElementById("ttrans").value=value;
var x = value;
var y="translate("+x+"px,0px)";
document.getElementById("top").style.transform = y;
}
	
function functoprot(value) {
var i=value+" deg";
document.getElementById("trot").value=i;
var x = value;
var y="rotate("+x+"deg)";
document.getElementById("top").style.transform = y;
}
	
function functopscale(value) {
document.getElementById("tscale").value=value;
var x = value;
var y="scale("+x+","+x+")";
document.getElementById("top").style.transform = y;
}
	
function functopshear(value) {
var i=value+" deg";
document.getElementById("tskew").value=i;
var x = value;
var y="skewX("+x+"deg)";
document.getElementById("top").style.transform = y;
}