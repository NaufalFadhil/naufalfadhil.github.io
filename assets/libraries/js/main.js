function sendMail() {
    const checkbox = document.querySelector('#anonymCheck');
    if (checkbox.checked) {
        window.location.href = "https://secreto.site/en/20614123";
    } else {
        var link = "mailto:hello.naufalfadhil@gmail.com"
            + "?subject=" + encodeURIComponent("Contact Naufal Fadhil Athallah")
            + "&body=" + encodeURIComponent(document.getElementById('yourMessage').value);
        window.location.href = link;
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}