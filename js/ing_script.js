// Call this function when the page loads (the jQuery "ready" event)
/*
$(document).ready(function() {
	//initializePage();
	//addFunction();
	//output();
})*/

/*
function addFunction() {
	var x = document.getElementById("ing_input").value;
	document.getElementById("data").innerHTML = x;
}*/

document.getElementById("add").onclick = function () {
	var node = document.createElement("Li");
	var text = document.getElementById("ing_input").value;
	var textnode = document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById("list_item").appendChild(node);
}






	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
