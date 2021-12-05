/*
Open current page in Dissenter for discussion
By: Mark Noble (Twitter @MarkNoble)
Date created: 2021-12-04
*/

// Notify user of redirect
document.body.innerHTML = "Opening page in Dissenter…";

// Example newURL: https://dissenter.com/discussion/begin?url=https://marknoble.com/
var newURL = window.location.protocol + "//" + "dissenter.com/discussion/begin?url=" + window.location;

window.location = newURL;