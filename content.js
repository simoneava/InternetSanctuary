console.log('i am the content scxript');
// document.getElementById("wrapper").style = "display:none;"

chrome.runtime.onMessage.addListener(function(details) {
  document.body.style = "display:none";
  console.log(details);
})
