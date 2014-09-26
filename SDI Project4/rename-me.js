// alert("JavaScript works!");

/*Curtis Tate
SDI 1409	
Project 4
My library */

var mylibrary = function(){

// 1. does a string follow a 123-456-7890 pattern like a phone number?

varnumCheck = function (number){
var total = number.length;
dash = "-";
adash = dash.indexof("-");
bdash = dash.lastIndexof("-");
	if (total === 12 || adash === 3 || bdash === 7) {
		return true;
	}else{
		return false; 
		}
}
}; // End of numCheck


// 2.) format a number to use a specific number of a decimal place, as for money 2.1 -> 2.10
var decimal = function (pi,afterdeci) {
return number (pi.tofixed(afterdeci));

};


// 3.) is the string a url /9does it start with http:// or https://)?
var urlCheck = function (u1, u2) {
	var address = "www.ign.com";
		if (u1 === "http://" + adress) {
			return true;
				}else {
				return false;
		}
};


var myNewlibrary = myNewLibrary();

console.log(myNewLibrary.numCheck("900-013-7435"));
console.log(myNewlibrary.decimal("4.32145456498,3"));