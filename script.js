const players = document.querySelectorAll(".player");
const wrongBuzzer = new Audio("./Sound-Effects/WrongBuzzer.mp3")
const correctBuzzer = new Audio("./Sound-Effects/CorrectBuzzer.mp3")

names = Array.from(players, (player) => player.children[0]);
names.forEach((name) => {
	name.addEventListener("click", (event) => {
		wrongBuzzer.currentTime = 1.4;
		wrongBuzzer.play().catch(error => console.error("Playback failed:", error));
		event.target.nextElementSibling.textContent =
			Number(event.target.nextElementSibling.textContent) - 100;
	});
	name.addEventListener("focusout", (event) => {
		event.target.readOnly = true;
	});
	name.addEventListener("mousedown", (event) => {
		if (event.detail > 1) {
			event.preventDefault();
		}
	});

	name.addEventListener("select", (event) => {
		event.target.selectionStart = event.target.selectionEnd;
	});
});

scores = Array.from(players, (player) => player.children[1]);

scores.forEach((score) => {
	score.addEventListener("click", (event) => {
		correctBuzzer.currentTime = 1;
		correctBuzzer.play().catch(error => console.error("Playback failed:", error));
		event.target.textContent = Number(event.target.textContent) + 100;
	});
});
console.log(players);
console.log("logging names");
console.log(names);
console.log("logging scores");
console.log(scores);
