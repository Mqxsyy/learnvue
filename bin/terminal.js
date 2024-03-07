import inquirer from "inquirer";

inquirer
	.prompt([
		{
			type: "input",
			name: "name",
			message: "What's your name?",
		},
		{
			type: "number",
			name: "age",
			message: "How old are you?",
		},
		{
			type: "confirm",
			name: "isHuman",
			message: "Are you a human?",
		},
		{
			type: "list",
			name: "food",
			message: "What's your favorite food?",
			choices: ["Pizza", "Burger", "Salad"],
		},
		{
			type: "rawlist",
			name: "favoriteFruit",
			message: "What's your favorite fruit?",
			choices: ["Apple", "Orange", "Banana"],
		},
		{
			type: "expand",
			name: "mealPreference",
			message: "What time of day do you prefer to eat?",
			choices: [
				{
					key: "m",
					name: "Morning",
					value: "morning",
				},
				{
					key: "a",
					name: "Afternoon",
					value: "afternoon",
				},
				{
					key: "e",
					name: "Evening",
					value: "evening",
				},
			],
		},
		{
			type: "checkbox",
			name: "hobbies",
			message: "What are your hobbies?",
			choices: ["Reading", "Coding", "Gaming"],
		},
		{
			type: "password",
			name: "password",
			message: "Enter your password",
		},
		{
			type: "editor",
			name: "bio",
			message: "Write your bio",
		},
	])
	.then((answers) => {
		console.log(answers);
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});
