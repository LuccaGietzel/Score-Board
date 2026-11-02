const players = document.querySelectorAll(".player");

names = Array.from(players, (player) => player.children[0]);

names.forEach((name) => {
	name.addEventListener("click", (event) => {
		event.target.nextElementSibling.textContent =
			Number(event.target.nextElementSibling.textContent) - 100;
	});
});

scores = Array.from(players, (player) => player.children[1]);

scores.forEach((score) => {
	score.addEventListener("click", (event) => {
		event.target.textContent = Number(event.target.textContent) + 100;
	});
});
console.log(players);
console.log("logging names");
console.log(names);
console.log("logging scores");
console.log(scores);
