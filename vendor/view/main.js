var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var certificateListElement = document.querySelector("#certificateList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchCertificate(searchElement.value);
    };

    var renderResult = function (results) {
        certificateListElement.innerHTML = "";
        results.forEach(function (certificate) {
            var title = certificate.title;
            var image = certificate.image;
            var description = certificate.description;

            var certificateElement = document.createElement("div");
            certificateElement.setAttribute("class", "certificate");

            certificateElement.innerHTML = '<img class="image-certificate" src="' + image + '" alt="Image">\n' +
                '<div class="certificate-info">\n' +
                '<h2>' + title + '</h2>\n' +
                '<p>' + description + '</p>' +
                '</div>';
            certificateListElement.appendChild(certificateElement);
        })
    };

    var fallbackResult = function (message) {
        certificateListElement.innerHTML = "";
        certificateListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};