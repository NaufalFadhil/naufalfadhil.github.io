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