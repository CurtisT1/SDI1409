alert("JavaScript works!");

/* Curtis Tate
SDI 1409
Sept 18, 2014
Assignment 3 */


// variables


var character1 = "Laxus";
var character2 = "Warwick";
var weapon1 = "Staff";
var weapon2 = "Hands";
var spell1 = "Lighting Sky";
var spell2 = "Lighting Sky Strike";
var battlinghours = "1";


// Procedure

var hoursOfMatch = function(battlingHours){
	if (battlingHours > 1) {
		console.log("The wizard have" + battlingHours + " hours to fight before the next match!");
		}else{
			console.log("If time runs out and if no one wins go to round two.");
	}
};

hoursOfMatch(1);


// outputs of variables 


console.log("The biggest battle of the magically kingdom is about to take way. the Wizards arrives at the Pyramid of Pandemonium. ",character1," Vs. ",character2," ",character1," is a Thunder wizard and ",character2," is a Light wizard.");
console.log("When they arrive at the arena the battle automatic takes effect. So ",character1," charged up his magic and released a big shock wave of electricity to try to paralyzed ",character2," ",character2," quickly uses his light magic and conjures a barrier of light to protect him.");
console.log("",character2, "had to choose between is staff magic or his hand magic.");


// Prompt For Input


myPrompt = prompt("Warwick have to choose the Staff as Magic source to use");

if (myPrompt === "Staff") {
	console.log("His staff magic is powerful for defending attacks and attacking but it take time for his staff to charge and the staff slows him down");
if (myPrompt === "Hands") {
	console.log("His hand magic is strong but he would have to use a lot of magic energy that will leave him unable to fight");
} else {
 	console.log("",character2, "is ready to fight back");
}; 
} else {
console.log("",character2," hopefully he can beat laxus so he's going to give it everything hes got");

};


// outputs of variables 

console.log("Warwick chooses the staff for more powerful magic. Then laxus hurls the biggest ball of electricity at Warwick and he use light to dodge it and then he jump and smash his staff to the ground and send a beam of light through the ground at laxus and hit laxus and then he just shake it off like it was nothing.");


myprompt = prompt("Pick Lighting Fist Strike spell to use to defeat him");
    
if (myPrompt === "Lighting Sky") {
	console.log("If laxus chooses to use lighting sky he would make the sky darken with clouds and send a bolt of lighting down directly upon Warwick and fry him with one shot and use the last of his magic energy that would leave him unable to fight.");
if (myprompt === "Lighting Fist Strike") {
	console.log ("If he chooses to strike with a lighting fist then he would have to strike him two more times to defeat Warwick and use all his magic energy.");
	} else {
		console.log("It will take longer to defeat Warwick");
};
	} else {
console.log ("Then this spell might just work");
};



