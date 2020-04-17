(function() {

    const checkbox = document.getElementById('darkModeCheckbox');

    chrome.storage.sync.get(['isDarkMode'], function(result) {
        checkbox.checked = result.isDarkMode;
        if(result.isDarkMode) {
            document.body.style.filter = 'invert(1)';
        } else {
            document.body.style.filter = 'invert(0)';
        }
    });

    checkbox.addEventListener('change', (event) => {
        chrome.storage.sync.set({isDarkMode: event.target.checked});
        if(event.target.checked) {
            document.body.style.filter = 'invert(1)';
        } else {
            document.body.style.filter = 'invert(0)';
        }
    });

})();
