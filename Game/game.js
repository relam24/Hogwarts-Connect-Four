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
// create click rules for each column
// column 1 click rules
// changed clickedCircle from add class to append
	let click1 = 0;
	const columnOneClick = (event) => {
		click1++;
		if (click1 === 1) {
			$(event.currentTarget).append($circle1F) .addClass('clickedCircle');
		} else if (click1 === 2) {
			$(event.currentTarget).append($circle1E) .addClass('clickedCircle');
		} else if (click1 === 3) {
			$(event.currentTarget).append($circle1D) .addClass('clickedCircle');
		} else if (click1 === 4) {
			$(event.currentTarget).append($circle1C) .addClass('clickedCircle');
		} else if (click1 === 5) {
			$(event.currentTarget).append($circle1B) .addClass('clickedCircle');
		} else if (click1 === 6) {
			$(event.currentTarget).append($circle1A) .addClass('clickedCircle');
		}
	};
// column 2 click rules
// changed clickedCircle from add class to append
	let click2 = 0;
	const columnTwoClick = (event) => {
		click2++;
		if (click2 === 1) {
			$(event.currentTarget).append($circle2F) .addClass('clickedCircle');
		} else if (click2 === 2) {
			$(event.currentTarget).append($circle2E) .addClass('clickedCircle');
		} else if (click2 === 3) {
			$(event.currentTarget).append($circle2D) .addClass('clickedCircle');
		} else if (click2 === 4) {
			$(event.currentTarget).append($circle2C) .addClass('clickedCircle');
		} else if (click2 === 5) {
			$(event.currentTarget).append($circle2B) .addClass('clickedCircle');
		} else if (click2 === 6) {
			$(event.currentTarget).append($circle2A) .addClass('clickedCircle');
		}
	};
// column 3 click rules
// changed clickedCircle from add class to append
	let click3 = 0;
	const columnThreeClick = (event) => {
		click3++;
		if (click3 === 1) {
			$(event.currentTarget).append($circle3F) .addClass('clickedCircle');
		} else if (click3 === 2) {
			$(event.currentTarget).append($circle3E) .addClass('clickedCircle');
		} else if (click3 === 3) {
			$(event.currentTarget).append($circle3D) .addClass('clickedCircle');
		} else if (click3 === 4) {
			$(event.currentTarget).append($circle3C) .addClass('clickedCircle');
		} else if (click3 === 5) {
			$(event.currentTarget).append($circle3B) .addClass('clickedCircle');
		} else if (click3 === 6) {
			$(event.currentTarget).append($circle3A) .addClass('clickedCircle');
		}
	};
// column 4 click rules
// changed clickedCircle from add class to append
	let click4 = 0;
	const columnFourClick = (event) => {
		click4++;
		if (click4 === 1) {
			$(event.currentTarget).append($circle4F) .addClass('clickedCircle');
		} else if (click4 === 2) {
			$(event.currentTarget).append($circle4E) .addClass('clickedCircle');
		} else if (click4 === 3) {
			$(event.currentTarget).append($circle4D) .addClass('clickedCircle');
		} else if (click4 === 4) {
			$(event.currentTarget).append($circle4C) .addClass('clickedCircle');
		} else if (click4 === 5) {
			$(event.currentTarget).append($circle4B) .addClass('clickedCircle');
		} else if (click4 === 6) {
			$(event.currentTarget).append($circle4A) .addClass('clickedCircle');
		}
	};
// column 5 click rules
// changed clickedCircle from add class to append
	let click5 = 0;
	const columnFiveClick = (event) => {
		click5++;
		if (click5 === 1) {
			$(event.currentTarget).append($circle5F) .addClass('clickedCircle');
		} else if (click5 === 2) {
			$(event.currentTarget).append($circle5E) .addClass('clickedCircle');
		} else if (click5 === 3) {
			$(event.currentTarget).append($circle5D) .addClass('clickedCircle');
		} else if (click5 === 4) {
			$(event.currentTarget).append($circle5C) .addClass('clickedCircle');
		} else if (click5 === 5) {
			$(event.currentTarget).append($circle5B) .addClass('clickedCircle');
		} else if (click5 === 6) {
			$(event.currentTarget).append($circle5A) .addClass('clickedCircle');
		}
	};
// column 6 click rules
// changed clickedCircle from add class to append
	let click6 = 0;
	const columnSixClick = (event) => {
		click6++;
		if (click6 === 1) {
			$(event.currentTarget).append($circle6F) .addClass('clickedCircle');
		} else if (click6 === 2) {
			$(event.currentTarget).append($circle6E) .addClass('clickedCircle');
		} else if (click6 === 3) {
			$(event.currentTarget).append($circle6D) .addClass('clickedCircle');
		} else if (click6 === 4) {
			$(event.currentTarget).append($circle6C) .addClass('clickedCircle');
		} else if (click6 === 5) {
			$(event.currentTarget).append($circle6B)
			.addClass('clickedCircle');
		} else if (click6 === 6) {
			$(event.currentTarget).append($circle6A)
			.addClass('clickedCircle');
		}
	};

// ========================================//

	const $circle = (event) => {
		for (let turn = 1; turn <= 36; turn++) {
			$(event.currentTarget);
			if (turn % 2 === 0) {
				$(event.currentTarget);
				console.log(event.currentTarget);
				$circle
				.css('background-color', 'red');
			} else {
				$(event.currentTarget);
				console.log(event.currentTarget);
				$circle
				.css('background-color', 'black');
			}
		}
	};

// ==============================================//
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
// =========================================//
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
	// grab circle
	const $clickedCircle = $('.clickedCircle');
	$clickedCircle.on('click', $circle);
// ===========================================//

});
