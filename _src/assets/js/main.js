'use strict';

console.log('>> Ready :)');

function sortSelectOptions(selectElement) {
	var options = $(selectElement);

	options.sort(function(a,b) {
		if (a.text.toUpperCase() > b.text.toUpperCase()) return 1;
		else if (a.text.toUpperCase() < b.text.toUpperCase()) return -1;
		else return 0;
	});

	$(selectElement).empty().append( options );
}