chrome.storage.sync.get(['isDarkMode'], function(result) {
    if(result.isDarkMode) {
        document.body.style.filter = 'invert(1)';
    } else {
        document.body.style.filter = 'invert(0)';
    }
    console.log(result);
});

chrome.storage.onChanged.addListener(function(changes) {
    if(changes["isDarkMode"]) {
        if(changes["isDarkMode"].newValue) {
            document.body.style.filter = 'invert(1)';
        } else {
            document.body.style.filter = 'invert(0)';
        }
    }
});