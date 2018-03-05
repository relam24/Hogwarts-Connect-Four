$(() => {
// Modal
// grab the open button
	const $openButton = $('#openModal');
// grab modal element
	const $modal = $('#modal');
// grab the close button
	const $closeButton = $('#closeModal');
// put handler above event listener
// open Modal
// close Modal
	const openModal = () => {
		$modal.css('display', 'block');
	};
	const closeModal = () => {
		$modal.css('display', 'none');
	};
// make event listener
// open button
// close button
	$openButton.on('click', openModal);
	$closeButton.on('click', closeModal);
// set timeout for two seconds
 // setTimeout(openModal, 2000);
	// end of Modal
// ===============================================================//
// playerOne playerTwo and who clicked function
	const playerOne = () => {
		console.log('playerone');
	}
	const playerTwo = () => {
		console.log('playertwo');
	}
// ==================================================//
// Unsure of syntax for event handler to get sibling of Column // button (square) and its child (circle).
// variable of event listener
	const $squareParent = $(this > 'div.square');
	const $circleChild = $('div.square' > 'div circle');

// added event listener for win state
// WhoClicked
	const whoClicked = (event) => {
		console.log('who clicked');
		if (game % 2 === 0) {
			$circleChild.css('background-color', 'red');
			youWin();
		} else {
			$circleChild.css('background-color', 'gold');
			youWin();
		}
	};

// youWin
// make an array of rows and columns?
	const youWin = () => {
		const arrayRowColumn = [
			[$column1, $rowA], [$column2, $rowA], [$column3, $rowA], [$column4, $rowA], [$column5, $rowA], [$column6, $rowA],
			[$column1, $rowB], [$column2, $rowB], [$column3, $rowB], [$column4, $rowB], [$column5, $rowB], [$column6, $rowB],
			[$column1, $rowC], [$column2, $rowC], [$column3, $rowC], [$column4, $rowC], [$column5, $rowC], [$column6, $rowC],
			[$column1, $rowD], [$column2, $rowD], [$column3, $rowD], [$column4, $rowD], [$column5, $rowD], [$column6, $rowD],
			[$column1, $rowE], [$column2, $rowE], [$column3, $rowE], [$column4, $rowE], [$column5, $rowE], [$column6, $rowE],
			[$column1, $rowF], [$column2, $rowF], [$column3, $rowF], [$column4, $rowF], [$column5, $rowF], [$column6, $rowF]
		];
		// for (let i = 0; i <= arrayRowColumn.length; i++) {
		// 	console.log(arrayRowColumn[i]);
		// }
	};
// play again/restart
	const restart = () => {
		console.log('restart');
	};

// ==========================================================//
// create click rules for each column
// column 1 click rules
// added gameClicks function
	let click1 = 0;
	const columnOneClick = (event) => {
		console.log('column1');
		click1++;
		if (click1 === 1) {
			$(event.currentTarget).append($circle1F);
			$column1button.on('click', whoClicked);
			gameClicks();
		} else if (click1 === 2) {
			$(event.currentTarget).append($circle1E);
			$column1button.on('click', whoClicked);
			gameClicks();
		} else if (click1 === 3) {
			$(event.currentTarget).append($circle1D);
			$column1button.on('click', whoClicked);
			gameClicks();
		} else if (click1 === 4) {
			$(event.currentTarget).append($circle1C);
			$column1button.on('click', whoClicked);
			gameClicks();
		} else if (click1 === 5) {
			$(event.currentTarget).append($circle1B);
			$column1button.on('click', whoClicked);
			gameClicks();
		} else if (click1 === 6) {
			$(event.currentTarget).append($circle1A);
			$column1button.on('click', whoClicked);
			gameClicks();
		}
	};
// column 2 click rules
// changed clickedCircle from add class to append
	let click2 = 0;
	const columnTwoClick = (event) => {
		console.log('column2');
		click2++;
		if (click2 === 1) {
			$(event.currentTarget).append($circle2F);
			$column2button.on('click', whoClicked);
			gameClicks();
		} else if (click2 === 2) {
			$(event.currentTarget).append($circle2E);
			$column2button.on('click', whoClicked);
			gameClicks();
		} else if (click2 === 3) {
			$(event.currentTarget).append($circle2D);
			$column2button.on('click', whoClicked);
			gameClicks();
		} else if (click2 === 4) {
			$(event.currentTarget).append($circle2C);
			$column2button.on('click', whoClicked);
			gameClicks();
		} else if (click2 === 5) {
			$(event.currentTarget).append($circle2B);
			$column2button.on('click', whoClicked);
			gameClicks();
		} else if (click2 === 6) {
			$(event.currentTarget).append($circle2A);
			$column2button.on('click', whoClicked);
			gameClicks();
		}
	};
// column 3 click rules
// changed clickedCircle from add class to append
	let click3 = 0;
	const columnThreeClick = (event) => {
		console.log('column3');
		click3++;
		if (click3 === 1) {
			$(event.currentTarget).append($circle3F);
			$column3button.on('click', whoClicked);
			gameClicks();
		} else if (click3 === 2) {
			$(event.currentTarget).append($circle3E);
			$column3button.on('click', whoClicked);
			gameClicks();
		} else if (click3 === 3) {
			$(event.currentTarget).append($circle3D);
			$column3button.on('click', whoClicked);
			gameClicks();
		} else if (click3 === 4) {
			$(event.currentTarget).append($circle3C);
			$column3button.on('click', whoClicked);
			gameClicks();
		} else if (click3 === 5) {
			$(event.currentTarget).append($circle3B);
			$column3button.on('click', whoClicked);
			gameClicks();
		} else if (click3 === 6) {
			$(event.currentTarget).append($circle3A);
			$column3button.on('click', whoClicked);
			gameClicks();
		}
	};
// column 4 click rules
// changed clickedCircle from add class to append
	let click4 = 0;
	const columnFourClick = (event) => {
		console.log('column4');
		click4++;
		if (click4 === 1) {
			$(event.currentTarget).append($circle4F);
			$column4button.on('click', whoClicked);
			gameClicks();
		} else if (click4 === 2) {
			$(event.currentTarget).append($circle4E);
			$column4button.on('click', whoClicked);
			gameClicks();
		} else if (click4 === 3) {
			$(event.currentTarget).append($circle4D);
			$column4button.on('click', whoClicked);
			gameClicks();
		} else if (click4 === 4) {
			$(event.currentTarget).append($circle4C);
			$column4button.on('click', whoClicked);
			gameClicks();
		} else if (click4 === 5) {
			$(event.currentTarget).append($circle4B);
			$column4button.on('click', whoClicked);
			gameClicks();
		} else if (click4 === 6) {
			$(event.currentTarget).append($circle4A);
			$column4button.on('click', whoClicked);
			gameClicks();
		}
	};
// column 5 click rules
// changed clickedCircle from add class to append
	let click5 = 0;
	const columnFiveClick = (event) => {
		console.log('column5');
		click5++;
		if (click5 === 1) {
			$(event.currentTarget).append($circle5F);
			$column5button.on('click', whoClicked);
			gameClicks();
		} else if (click5 === 2) {
			$(event.currentTarget).append($circle5E);
			$column5button.on('click', whoClicked);
			gameClicks();
		} else if (click5 === 3) {
			$(event.currentTarget).append($circle5D);
			$column5button.on('click', whoClicked);
			gameClicks();
		} else if (click5 === 4) {
			$(event.currentTarget).append($circle5C);
			$column5button.on('click', whoClicked);
			gameClicks();
		} else if (click5 === 5) {
			$(event.currentTarget).append($circle5B);
			$column5button.on('click', whoClicked);
			gameClicks();
		} else if (click5 === 6) {
			$(event.currentTarget).append($circle5A);
			$column5button.on('click', whoClicked);
			gameClicks();
		}
	};
// column 6 click rules
// changed clickedCircle from add class to append
	let click6 = 0;
	const columnSixClick = (event) => {
		console.log('column6');
		click6++;
		if (click6 === 1) {
			$(event.currentTarget).append($circle6F);
			$column6button.on('click', whoClicked);
			gameClicks();
		} else if (click6 === 2) {
			$(event.currentTarget).append($circle6E);
			$column6button.on('click', whoClicked);
			gameClicks();
		} else if (click6 === 3) {
			$(event.currentTarget).append($circle6D);
			$column6button.on('click', whoClicked);
			gameClicks();
		} else if (click6 === 4) {
			$(event.currentTarget).append($circle6C);
			$column6button.on('click', whoClicked);
			gameClicks();
		} else if (click6 === 5) {
			$(event.currentTarget).append($circle6B);
			$column6button.on('click', whoClicked);
			gameClicks();
		} else if (click6 === 6) {
			$(event.currentTarget).append($circle6A);
			$column6button.on('click', whoClicked);
			gameClicks();
		}
	};
// ==============================================================//
// game click function each click goes between players checks on win
	let game = 0;
	const gameClicks = (event) => {
		console.log('game clicks');
		game++;
		if (game === 1) {
			playerOne();
		} else if (game === 2) {
			playerTwo();
		} else if (game === 3) {
			playerOne();
		} else if (game === 4) {
			playerTwo();
		} else if (game === 5) {
			playerOne();
		} else if (game === 6) {
			playerTwo();
		} else if (game === 7) {
			playerOne();
		} else if (game === 8) {
			playerTwo();
		} else if (game === 9) {
			playerOne();
		} else if (game === 10) {
			playerTwo();
		} else if (game === 11) {
			playerOne();
		} else if (game === 12) {
			playerTwo();
		} else if (game === 13) {
			playerOne();
		} else if (game === 14) {
			playerTwo();
		} else if (game === 15) {
			playerOne();
		} else if (game === 16) {
			playerTwo();
		} else if (game === 17) {
			playerOne();
		} else if (game === 18) {
			playerTwo();
		} else if (game === 19) {
			playerOne();
		} else if (game === 20) {
			playerTwo();
		} else if (game === 21) {
			playerOne();
		} else if (game === 22) {
			playerTwo();
		} else if (game === 23) {
			playerOne();
		} else if (game === 24) {
			playerTwo();
		} else if (game === 25) {
			playerOne();
		} else if (game === 26) {
			playerTwo();
		} else if (game === 27) {
			playerOne();
		} else if (game === 28) {
			playerTwo();
		} else if (game === 29) {
			playerOne();
		} else if (game === 30) {
			playerTwo();
		} else if (game === 31) {
			playerOne();
		} else if (game === 32) {
			playerTwo();
		} else if (game === 33) {
			playerOne();
		} else if (game === 34) {
			playerTwo();
		} else if (game === 35) {
			playerOne();
		} else if (game === 36) {
			playerTwo();
		}
	};
// ==============================================//
//grab rows
	const $rowA = $('.rowA');
	const $rowB = $('.rowB');
	const $rowC = $('.rowC');
	const $rowD = $('.rowD');
	const $rowE = $('.rowE');
	const $rowF = $('.rowF');
// grab squares
// column 1 squares
	const $square1A = $('#square1A').addClass('.rowA');
	const $square1B = $('#square1B').addClass('.rowB');
	const $square1C = $('#square1C').addClass('.rowC');
	const $square1D = $('#square1D').addClass('.rowD');
	const $square1E = $('#square1E').addClass('.rowE');
	const $square1F = $('#square1F').addClass('.rowF');
// column 2 squares
	const $square2A = $('#square2A').addClass('.rowA');
	const $square2B = $('#square2B').addClass('.rowB');
	const $square2C = $('#square2C').addClass('.rowC');
	const $square2D = $('#square2D').addClass('.rowD');
	const $square2E = $('#square2E').addClass('.rowE');
	const $square2F = $('#square2F').addClass('.rowF');
// column 3 squares
	const $square3A = $('#square3A').addClass('.rowA');
	const $square3B = $('#square3B').addClass('.rowB');
	const $square3C = $('#square3C').addClass('.rowC');
	const $square3D = $('#square3D').addClass('.rowD');
	const $square3E = $('#square3E').addClass('.rowE');
	const $square3F = $('#square3F').addClass('.rowF');
// column 4 squares
	const $square4A = $('#square4A').addClass('.rowA');
	const $square4B = $('#square4B').addClass('.rowB');
	const $square4C = $('#square4C').addClass('.rowC');
	const $square4D = $('#square4D').addClass('.rowD');
	const $square4E = $('#square4E').addClass('.rowE');
	const $square4F = $('#square4F').addClass('.rowF');
// column 5 squares
	const $square5A = $('#square5A').addClass('.rowA');
	const $square5B = $('#square5B').addClass('.rowB');
	const $square5C = $('#square5C').addClass('.rowC');
	const $square5D = $('#square5D').addClass('.rowD');
	const $square5E = $('#square5E').addClass('.rowE');
	const $square5F = $('#square5F').addClass('.rowF');
// column 6 squares
	const $square6A = $('#square6A').addClass('.rowA');
	const $square6B = $('#square6B').addClass('.rowB');
	const $square6C = $('#square6C').addClass('.rowC');
	const $square6D = $('#square6D').addClass('.rowD');
	const $square6E = $('#square6E').addClass('.rowE');
	const $square6F = $('#square6F').addClass('.rowF');

// column buttons
	const $column1button = $('.column1button');
	const $column2button = $('.column2button');
	const $column3button = $('.column3button');
	const $column4button = $('.column4button');
	const $column5button = $('.column5button');
	const $column6button = $('.column6button');
// create circles
// column 1
	const $circle1A = $('#circle1A');
	const $circle1B = $('#circle1B');
	const $circle1C = $('#circle1C');
	const $circle1D = $('#circle1D');
	const $circle1E = $('#circle1E');
	const $circle1F = $('#circle1F');
// column 2
	const $circle2A = $('#circle2A');
	const $circle2B = $('#circle2B');
	const $circle2C = $('#circle2C');
	const $circle2D = $('#circle2D');
	const $circle2E = $('#circle2E');
	const $circle2F = $('#circle2F');
// column 3
	const $circle3A = $('#circle3A');
	const $circle3B = $('#circle3B');
	const $circle3C = $('#circle3C');
	const $circle3D = $('#circle3D');
	const $circle3E = $('#circle3E');
	const $circle3F = $('#circle3F');
 // column 4
	const $circle4A = $('#circle4A');
	const $circle4B = $('#circle4B');
	const $circle4C = $('#circle4C');
	const $circle4D = $('#circle4D');
	const $circle4E = $('#circle4E');
	const $circle4F = $('#circle4F');
// column 5
	const $circle5A = $('#circle5A');
	const $circle5B = $('#circle5B');
	const $circle5C = $('#circle5C');
	const $circle5D = $('#circle5D');
	const $circle5E = $('#circle5E');
	const $circle5F = $('#circle5F');
// column 6
	const $circle6A = $('#circle6A');
	const $circle6B = $('#circle6B');
	const $circle6C = $('#circle6C');
	const $circle6D = $('#circle6D');
	const $circle6E = $('#circle6E');
	const $circle6F = $('#circle6F');
// =========================================//
// grab container div
	const $container = $('.container');
// grab gameboard div
	const $gameboard = $('.gameboard');
	// grab circle
	const $circle = $('.circle');
// =========================================//
// grab column1 div
// create click event
// send to function
// appended .clickedCircle to each column
	const $column1 = $('.column1');
	$column1.on('click', columnOneClick);
// grab column2 div
	const $column2 = $('.column2');
	$column2.on('click', columnTwoClick);
// grab column3 div
	const $column3 = $('.column3');
	$column3.on('click', columnThreeClick);
// grab column4 div
	const $column4 = $('.column4');
	$column4.on('click', columnFourClick);
// grab column5 div
	const $column5 = $('.column5');
	$column5.on('click', columnFiveClick);
// grab column 6 div
	const $column6 = $('.column6');
	$column6.on('click', columnSixClick);
// ===========================================//

});
