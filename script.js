
var _gaq = _gaq || [];
var count = 0;

// Fake site functionality

var cleanUrl = function(url) {
    url = url.toString().replace(/^(?:https?|ftp)\:\/\//i, '');
    url = url.toString().replace(/^www\./i, '');
    url = url.toString().replace(/\/.*/, '');
    return url;
};

var updateFakesNewsIndicator = function(tabId, info) {
    chrome.tabs.getSelected(null, function(tab) {
        var url = tab.url;

        if(url) {
            url = cleanUrl(url);

            var isFake = fakeSites[url];

            var icon = {
                "16": "images/cornify_16.png",
                "32": "images/cornify_32.png",
                "48": "images/cornify_48.png",
                "128": "images/cornify_128.png"
            };
            if(isFake) {
                icon = {
                    "16": "images/cornify_black_16.png",
                    "32": "images/cornify_black_32.png",
                    "48": "images/cornify_black_48.png",
                    "128": "images/cornify_black_128.png"
                };
            }

            chrome.browserAction.setIcon({
                path: icon
            });
        }
    });
};

// Browser events

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file:"itsOnFire.js"}, function () {
        chrome.tabs.sendMessage(tab.id, 'douse_page');
    });
});

chrome.tabs.onActivated.addListener(function(tabId, info) {
    // console.log('onActivated', tabId, info);
    updateFakesNewsIndicator(tabId, info);
});

chrome.tabs.onUpdated.addListener(function(tabId, info) {
    // console.log('onUpdated', tabId, info);
    if(info.status == 'complete') {
        updateFakesNewsIndicator(tabId, info);
    }
});

chrome.tabs.onAttached.addListener(function(tabId, info) {
    // console.log('onAttached', tabId, info);
    updateFakesNewsIndicator(tabId, info);
});
