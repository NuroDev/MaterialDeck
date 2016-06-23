var extensionid;

chrome.runtime.sendMessage({method: "getLocalStorage", key: "extensionid"}, function(response) {
	extensionid = response.data;
});

$(document).ready(function(){

	console.log("[MaterialDeck] Starting MaterialDeck-" + chrome.runtime.getManifest().version + ".");

	/** Light Theme Check & Apply **/
	if ($('link[title=light]').length) {
		$('link[title=light]').remove();
		$('head').append( '<link rel="stylesheet" href="' + extensionid + 'css/app-light.min.css" title="light">' );
		console.log("[MaterialDeck] Light theme successfully loaded.");
	} else {
		console.log("[MaterialDeck] Light theme stylesheet not found. Skipping Overwrite.");
	}

	/** Dark Theme Check & Apply **/
	if ($('link[title=dark]').length) {
		$('link[title=dark]').remove();
		$('head').append( '<link rel="stylesheet" href="' + extensionid + 'css/app-dark.min.css" title="dark">' );
		console.log("[MaterialDeck] Dark theme successfully loaded");
	} else {
		console.log("[MaterialDeck] Dark theme stylesheet not found. Skipping Overwrite.");
	}
});
