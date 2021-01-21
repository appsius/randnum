'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

const displayScore = function (scoreMessage) {
	document.querySelector('.score').textContent = scoreMessage;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		displayMessage('🚫 No Number!');
	} else if (guess === secretNumber) {
		displayMessage('🏆🏆 Number is CORRECT 🏆🏆');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			guess > secretNumber
				? displayMessage('⚡⚡ Guess is TOO HIGH ⚡⚡')
				: displayMessage('👇👇 Guess is TOO LOW 👇👇');
			score--;
			displayScore(score);
		} else {
			displayMessage('💥 You LOST the game! 💥');
			displayScore(0);
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.floor(Math.random() * 20) + 1;

	document.querySelector('.guess').value = '';
	displayScore(score);
	displayMessage('Start guessing...');
	document.querySelector('.number').textContent = '?';

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
