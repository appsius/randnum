'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		document.querySelector('.message').textContent = '🚫 No Number!';
	} else if (guess === secretNumber) {
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.message').textContent =
			'🏆🏆 Number is CORRECT 🏆🏆';
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent =
				'⚡⚡ Guess is TOO HIGH ⚡⚡';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent =
				'💥 You LOST the game! 💥';
			document.querySelector('.score').textContent = 0;
		}
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent =
				'👇👇 Guess is TOO LOW 👇👇';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent =
				'💥 You LOST the game! 💥';
			document.querySelector('.score').textContent = 0;
		}
	}
});
