window.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById("year").innerText = year;
});

function sendMail() {
    var link = "mailto:hello.naufalfadhil@gmail.com"
        + "?subject=" + encodeURIComponent("Contact Naufal Fadhil Athallah")
        + "&body=" + encodeURIComponent(document.getElementById('yourMessage').value);
    window.location.href = link;
}

function redirectToNGL() {
    let checkbox = document.getElementById('anonymCheck');
    checkbox.checked = false;
    window.location.href = "https://ngl.link/nf_athallah";
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