document.getElementById("About").addEventListener("click", myFunction);

function myFunction(){
    chrome.tabs.onUpdated.addListener(function() {
        chrome.browserAction.setPopup({
        popup: 'new.html'
    });
    });
}