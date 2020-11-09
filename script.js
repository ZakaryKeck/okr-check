function checkOkrs(){
	input = document.getElementById("okrValue").value;
	
	goalsResult = document.getElementById("1").innerHTML = input[0] === 'x' ? "Set goals today" : "Did not set goals today"; 
	journalResult = document.getElementById("2").innerHTML = input[1] === 'x' ? "Journaled today" : "Did not journal today";
	trackResult = document.getElementById("3").innerHTML =  input[2] === 'x' ? "Tracked one debugging skill, development trick, BT code nuance, lesson learned, question asked, or struggle today" : "Did not rack one debugging skill, development trick, BT code nuance, lesson learned, question asked, or struggle today";
	hackosResult = document.getElementById("4").innerHTML = "Earned " + parseInt(input.substring(3, 6)) + " Hackos today";
	flowResult = document.getElementById("5").innerHTML = input[6] === 'x' ? "Entered Flow State today" : "Could not enter Flow State today";
	expectResult = document.getElementById("6").innerHTML = input[7] === 'x' ? "Went above expectations today" : "Did not go above expectations today";
	hoursResult = document.getElementById("7").innerHTML = "Accounted for " + parseInt(input.substring(8, 11)) + " hours today.";
	spinResult = document.getElementById("8").innerHTML = input[11] === 'x' ? "Spun for more than 60 minutes today" : "Did not spin for more than 60 minutes today";
	passbackResult = document.getElementById("9").innerHTML = "Had " + parseInt(input.substring(12, 15)) + " Passbacks today";

}