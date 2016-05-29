var extensionid = chrome.runtime.id;

$(document).ready(function(){

	/** Light Theme Check & Apply **/
	if ($('link[title=light]').length) {
		$('link[title=light]').remove();
		$('head').append( '<link rel="stylesheet" href="' + extensionid + 'css/app-light.css" title="light">' );
		console.log("[MaterialDeck] Light theme successfully loaded.");
	} else {
		console.log("[MaterialDeck] Light theme stylesheet not found. Skipping Overwrite.");
	}

	/** Dark Theme Check & Apply **/
	if ($('link[title=dark]').length) {
		$('link[title=dark]').remove();
		$('head').append( '<link rel="stylesheet" href="' + extensionid + 'css/app-dark.css" title="dark">' );
		console.log("[MaterialDeck] Dark theme successfully loaded");
	} else {
		console.log("[MaterialDeck] Dark theme stylesheet not found. Skipping Overwrite.");
	}
});
