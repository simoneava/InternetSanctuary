chrome.runtime.onMessage.addListener(function(req, send, res) {
    chrome.tabs.executeScript({file: 'content.js'}, function() {
        console.log('background script injected content_script');
      });
});