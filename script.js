function checkOkrs(){
	input = document.getElementById("okrValue").value.trim();
	
	
	goalsResult = document.getElementById("1").innerHTML = input[0] === 'x' ? "<b>Did</b> set goals today" : "<b>Did not</b> set goals today"; 
	journalResult = document.getElementById("2").innerHTML = input[1] === 'x' ? "<b>Did</b> journal today" : "<b>Did not</b> journal today";
	trackResult = document.getElementById("3").innerHTML =  input[2] === 'x' ? "<b>Did</b> track one debugging skill, development trick, BT code nuance, lesson learned, question asked, or struggle today" : "<b>Did not</b> track one debugging skill, development trick, BT code nuance, lesson learned, question asked, or struggle today";
	hackosResult = document.getElementById("4").innerHTML = "Earned <b>" + parseInt(input.substring(3, 6)) + "</b> Hackos today";
	flowResult = document.getElementById("5").innerHTML = input[6] === 'x' ? "<b>Did</b> enter Flow State today" : "<b>Could not</b> enter Flow State today";
	expectResult = document.getElementById("6").innerHTML = input[7] === 'x' ? "<b>Did</b> go above expectations today" : "<b>Did not</b> go above expectations today";
	hoursResult = document.getElementById("7").innerHTML = "Accounted for <b>" + parseInt(input.substring(8, 11)) + "</b> hours today";
	spinResult = document.getElementById("8").innerHTML = input[11] === 'x' ? "<b>Did</b> spin for more than 60 minutes today" : "<b>Did not</b> spin for more than 60 minutes today";
	passbackResult = document.getElementById("9").innerHTML = "Had <b>" + parseInt(input.substring(12, 15)) + "</b> Passbacks today";

}