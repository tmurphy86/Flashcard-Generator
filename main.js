var inquirer = require("inquirer");
var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');


inquirer.prompt([
  {
  	type: "list",
    name: "path",
    message: "Are you trying to Bid or Post?",
    choices: ["Basic", "Cloze"]
  }
]).then(function(action) {
	console.log(action.path);
	  if (action.path === 'Basic') {

		inquirer.prompt([

		  {
		    type: "input",
		    name: "front",
		    message: "What is on the front of the card?"
		  },
		  {
		    type: "input",
		    name: "back",
		    message: "What is on the back of the card?"
		  },

		]).then(function(input) {
			console.log(input);
			var card = new BasicCard(input.front, input.back);
			console.log(card.front);
			console.log(card.back);

		});

	  } else if (action.path ==='Cloze') {
		inquirer.prompt([

		  {
		    type: "input",
		    name: "text",
		    message: "What is the fact?"
		  },
		  {
		    type: "input",
		    name: "cloze",
		    message: "What should be Clozed?"
		  },

		]).then(function(input) {
			console.log(input);
			var card = new ClozeCard(input.text, input.cloze);
			console.log(card.cloze);
			console.log(card.partial);
			console.log(card.full);

		});

	  } else {
	  	console.log('ERROR');
	  	end();
	  }
});


