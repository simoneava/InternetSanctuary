document.addEventListener("click", function() {
    console.log("popup");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // alert('hello! tab id: ' + tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, "some message");
    })
  });