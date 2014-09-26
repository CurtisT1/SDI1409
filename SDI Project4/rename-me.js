alert("JavaScript works!");

/*Curtis Tate
SDI 1409	
Project 4
My library */

var mylibrary = function(){

//1.) does a string follow a 123-456-7890 pattern like a phone number?
varnumCheck = function (number){
var total = number.length;
dash = ".";
adash = dash.indexof(".");
bdash = dash.lastIndexof(".");
	if (total === 12 || adash === 3 || bdash === 7) {
	return true;
	}else{
		return false;
	}
}; // End of numCheck