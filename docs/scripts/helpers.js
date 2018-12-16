function getDate() {
    let today = new Date().toISOString().split('T')[0];
    document.getElementById("reserveDate").valueAsDate = new Date();
    document.getElementById("reserveDate").setAttribute('min', today);
}

// GetDate is used in Reservation.


function textLimiter() {
    let elements = document.getElementsByClassName("post-content");
    let elementLinks = document.getElementsByClassName("post-link");
    for (i = 0; i < elements.length; i++) {
        let length = elements[i].textContent.trim().length;
        if (length > 300) {
            elements[i].textContent = elements[i].textContent.substr(0, 300) + '...';
        } else {
            //Now hide Read More link if post not bigger than 300 characters.
            elementLinks[i].style.display = "none";
            elements[i].style.paddingBottom = "0";
        }
    }
}

// TextLimiter is used in News Feed.

function onDocumentLoad(titleOfDocument) {
    if (titleOfDocument === 'Berliner Republik - Reservation') {
        getDate();
    } else if (titleOfDocument === 'Berliner Republik - News'){
        textLimiter();
    }
}