alert("JavaScript works!");


// Curtis Tate
// SDI 1409
// Assignment 2


// My variables 


var wizard1 = "Laxus";
var wizard2 = "Warwick";
var magicSource1 = "Staff";
var magicSource2 = "Hands";
var spell1 = "Lighting Sky";
var spell2 = "Lighting fist strike";
var battlingHour = "1";


//OutPuts


console.log("Laxus and Warwick are battling it out to see who is stronger");
console.log("" ,wizard1, " charged up his magic and released a big shock of wave of electricity to try to paralyze. ",wizard2, " quickly use his light magic to and conjure a barrier of light to protect him.");
console.log("",wizard2, "had to choose between is staff magic or his hand magic.");


// Procedure

var hoursOfMatch = function(battlingHours){
	if (battlingHour > 1) {
		console.log("The wizard have" + battlingHours + " hours to fight before the next match!");
		}else{
			console.log("If time runs out and if no one wins go to round two.");
	}
};

hoursOfMatch(1);



// Prompt For Input


myPrompt = prompt("Have to choose the Staff as magic source");

if (myPrompt === "Staff") {
	console.log("The Staff is powerful for defending attacks and attacking but it take time for his staff to charge and the staff slows him down");
if (myPrompt === "Hands") {
	console.log("Warwick hand magic is strong but he would have to use a lot of magic energy that will leave him unable to fight"); 
} else {
 	console.log("",wizard2, "is ready to fight back");
}; 
} else {
	console.log("",wizard2," hopefully he can beat laxus so he's going to give it everything hes got");
};	


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


// Loop

var spell2 = 3;

while(spell2 > 0) {
	console.log(spell2 + "",wizard2," is confused while ",wizard1," keep hitting him from different angles of the battlefield.");
	spell2--;
};


console.log("He defeated Warwick leaving him paralyzed.");
