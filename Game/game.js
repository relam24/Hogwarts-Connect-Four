$(() => {
// Modal
// grab the open button
	const $openButton = $ ('#openModal');
// grab modal element
	const $modal = $ ('#modal');
// grab the close button
	const $closeButton = $ ('#closeModal');
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
// column 1
	let click = 0;
	const columnOneClick = (event) => {
		click++;
	};





















// create 'filled' circles

















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



});
