chrome.runtime.onInstalled.addListener(function(details) {
	if (details.reason == "update" || "install") {
		localStorage["extensionid"] = chrome.extension.getURL('/');
	}
	if (localStorage.getItem("version") != chrome.runtime.getManifest().version) {
		localStorage["version"] = chrome.runtime.getManifest().version;
	}
});
