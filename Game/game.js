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
// ============================================//
// playerOne playerTwo and who clicked function
	const playerOne = () => {
		// console.log('playerone');
	};
	const playerTwo = () => {
		// console.log('playertwo');
	};
	// ===========================//
	// checking column
	// clickCircle gives you the class of color.
	const verticalCheck = (clickCircle, color) => {
		const columnArray = clickCircle.parent().siblings().children();
		let arrColor = [];
		for (let column = 0; column < columnArray.length; column++) {
			if ($(columnArray[column]).hasClass('red') === true) {
				arrColor.push(columnArray[column]);
				// console.log('red');
			} else if ($(columnArray[column]).hasClass('gold') === true) {
				arrColor.push(columnArray[column]);
				// console.log('gold');
			}
		}
		fourTheWin(arrColor);
	};
// ==================================
// four the win
	// let countClick = 1;
	const fourTheWin = (arrColor) => {
		for (let arr = 1; arr < arrColor.length; arr++) {
// columnOneWinOne
			let countClick = 1;
			for (let arrColumn = 1; arrColumn < $columnOneWinOne.length; arrColumn++) {
				let winCircle = arrColor[arr];
				if ($columnOneWinOne[arrColumn].hasClass('red')) {
					countClick++;
				} else if ($columnOneWinOne[arrColumn].hasClass('gold')) {
					countClick++;
				}
			}
			if (countClick === 3 && 'red') {
				alert('RED YOU WIN');
			} else if (countClick === 3 && 'gold') {
				alert('GOLD YOU WIN');
			}
		};
	};

// ============================
// added event listener to check vertically.
// WhoClicked
	const whoClicked = (clickCircle) => {
		// console.log('who clicked');
		if (game % 2 === 0) {
			clickCircle.css('background-color', 'red');
			// console.log('red');
			clickCircle.addClass('red');
			verticalCheck(clickCircle, 'red');
		} else {
			clickCircle.css('background-color', 'gold');
			// console.log('gold');
			clickCircle.addClass('gold');
			verticalCheck(clickCircle, 'gold');
		}
	};
// ==========================================================//
// create click rules for each column
// column 1 click rules
// added gameClicks function
	let click1 = 0;
	const columnOneClick = (event) => {
		// console.log(click);
		click1++;
		if (click1 === 1) {
			$column1button.on('click', whoClicked($circle1F));
			gameClicks();
		} else if (click1 === 2) {
			$column1button.on('click', whoClicked($circle1E));
			gameClicks();
		} else if (click1 === 3) {
			$column1button.on('click', whoClicked($circle1D));
			gameClicks();
		} else if (click1 === 4) {
			$column1button.on('click', whoClicked($circle1C));
			gameClicks();
		} else if (click1 === 5) {
			$column1button.on('click', whoClicked($circle1B));
			gameClicks();
		} else if (click1 === 6) {
			$column1button.on('click', whoClicked($circle1A));
			gameClicks();
		}
	};
// column 2 click rules
// changed clickedCircle from add class to append
	let click2 = 0;
	const columnTwoClick = (event) => {
		// console.log('column2');
		click2++;
		if (click2 === 1) {
			$column2button.on('click', whoClicked($circle2F));
			gameClicks();
		} else if (click2 === 2) {
			$column2button.on('click', whoClicked($circle2E));
			gameClicks();
		} else if (click2 === 3) {
			$column2button.on('click', whoClicked($circle2D));
			gameClicks();
		} else if (click2 === 4) {
			$column2button.on('click', whoClicked($circle2C));
			gameClicks();
		} else if (click2 === 5) {
			$column2button.on('click', whoClicked($circle2B));
			gameClicks();
		} else if (click2 === 6) {
			$column2button.on('click', whoClicked($circle2A));
			gameClicks();
		}
	};
// column 3 click rules
// changed clickedCircle from add class to append
	let click3 = 0;
	const columnThreeClick = (event) => {
		// console.log('column3');
		click3++;
		if (click3 === 1) {
			$column3button.on('click', whoClicked($circle3F));
			gameClicks();
		} else if (click3 === 2) {
			$column3button.on('click', whoClicked($circle3E));
			gameClicks();
		} else if (click3 === 3) {
			$column3button.on('click', whoClicked($circle3D));
			gameClicks();
		} else if (click3 === 4) {
			$column3button.on('click', whoClicked($circle3C));
			gameClicks();
		} else if (click3 === 5) {
			$column3button.on('click', whoClicked($circle3B));
			gameClicks();
		} else if (click3 === 6) {
			$column3button.on('click', whoClicked($circle3A));
			gameClicks();
		}
	};
// column 4 click rules
// changed clickedCircle from add class to append
	let click4 = 0;
	const columnFourClick = (event) => {
		// console.log('column4');
		click4++;
		if (click4 === 1) {
			$column4button.on('click', whoClicked($circle4F));
			gameClicks();
		} else if (click4 === 2) {
			$column4button.on('click', whoClicked($circle4E));
			gameClicks();
		} else if (click4 === 3) {
			$column4button.on('click', whoClicked($circle4D));
			gameClicks();
		} else if (click4 === 4) {
			$column4button.on('click', whoClicked($circle4C));
			gameClicks();
		} else if (click4 === 5) {
			$column4button.on('click', whoClicked($circle4B));
			gameClicks();
		} else if (click4 === 6) {
			$column4button.on('click', whoClicked($circle4A));
			gameClicks();
		}
	};
// column 5 click rules
// changed clickedCircle from add class to append
	let click5 = 0;
	const columnFiveClick = (event) => {
		// console.log('column5');
		click5++;
		if (click5 === 1) {
			$column5button.on('click', whoClicked($circle5F));
			gameClicks();
		} else if (click5 === 2) {
			$column5button.on('click', whoClicked($circle5E));
			gameClicks();
		} else if (click5 === 3) {
			$column5button.on('click', whoClicked($circle5D));
			gameClicks();
		} else if (click5 === 4) {
			$column5button.on('click', whoClicked($circle5C));
			gameClicks();
		} else if (click5 === 5) {
			$column5button.on('click', whoClicked($circle5B));
			gameClicks();
		} else if (click5 === 6) {
			$column5button.on('click', whoClicked($circle5A));
			gameClicks();
		}
	};
// column 6 click rules
// changed clickedCircle from add class to append
	let click6 = 0;
	const columnSixClick = (event) => {
		// console.log('column6');
		click6++;
		if (click6 === 1) {
			$column6button.on('click', whoClicked($circle6F));
			gameClicks();
		} else if (click6 === 2) {
			$column6button.on('click', whoClicked($circle6E));
			gameClicks();
		} else if (click6 === 3) {
			$column6button.on('click', whoClicked($circle6D));
			gameClicks();
		} else if (click6 === 4) {
			$column6button.on('click', whoClicked($circle6C));
			gameClicks();
		} else if (click6 === 5) {
			$column6button.on('click', whoClicked($circle6B));
			gameClicks();
		} else if (click6 === 6) {
			$column6button.on('click', whoClicked($circle6A));
			gameClicks();
		}
	};
// ==============================================================//
// game click function each click goes between players checks on win
	let game = 0;
	const gameClicks = (event) => {
		// console.log('game clicks');
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
// play again/restart
// set click listener for first called function
	$('.reset').click(function () {
		document.location.reload(true);
	});
// ===============================================//
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
// reset/start
	const $reset = $('.reset');
	$reset.click(function () {
		document.location.reload(true);
	});
// =====================================//
// grab column1 div
// create click event
// send to function
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
// all possible win states- Vertical
// column one
	const $columnOneWinOne = [$circle1A, $circle1B, $circle1C, $circle1D];
	const $columnOneWinTwo = [$circle1B, $circle1C, $circle1D, $circle1E];
	const $columnOneWinThree = [$circle1C, $circle1D, $circle1E, $circle1F];
	// column two
	const $columnTwoWinOne = [$circle2A, $circle2B, $circle2C, $circle2D];
	const $columnTwoWinTwo = [$circle2B, $circle2C, $circle2D, $circle2E];
	const $columnTwoWinThree = [$circle2C, $circle2D, $circle2E, $circle2F];
	// column three
	const $columnThreeWinOne = [$circle3A, $circle3B, $circle3C, $circle3D];
	const $columnThreeWinTwo = [$circle3B, $circle3C, $circle3D, $circle3E];
	const $columnThreeWinThree = [$circle3C, $circle3D, $circle3E, $circle3F];
// column 4
	const $columnFourWinOne = [$circle4A, $circle4B, $circle4C, $circle4D];
	const $columnFourWinTwo = [$circle4B, $circle4C, $circle4D, $circle4E];
	const $columnFourWinThree = [$circle4C, $circle4D, $circle4E, $circle4F];
// column 5
	const $columnFiveWinOne = [$circle5A, $circle5B, $circle5C, $circle5D];
	const $columnFiveWinTwo = [$circle5B, $circle5C, $circle5D, $circle5E];
	const $columnFiveWinThree = [$circle5C, $circle5D, $circle5E, $circle5F];
// column 6
	const $columnSixWinOne = [$circle3A, $circle3B, $circle3C, $circle3D];
	const $columnSixWinTwo = [$circle3B, $circle3C, $circle3D, $circle3E];
	const $columnSixWinThree = [$circle3C, $circle3D, $circle3E, $circle3F];
});
