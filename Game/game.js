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


























// grab container div
	const $container = $('.container');
// grab gameboard div
	const $gameboard = $('.gameboard');
// grab column1 div
	const $column1 = $('.column1');
// grab column2 div
	const $column2 = $('.column2');
// grab column3 div
	const $column3 = $('.column3');
// grab column4 div
	const $column4 = $('.column4');
// grab column5 div
	const $column5 = $('.column5');
// grab column 6 div
	const $column6 = $('.column6');



});
