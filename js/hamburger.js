$(() => {
	let $cross = $('#cross').hide(),
		$menu = $('#menu').hide(),
		$hamburger = $('#hamburger');
	$hamburger.click(() => {
		$menu.slideToggle('slow', () => {
			$hamburger.hide();
			$cross.show();
		});
	});
	$cross.click(() => {
		$menu.slideToggle('slow', () => {	
			$hamburger.show(),
			$cross.hide();
		});
	});
});