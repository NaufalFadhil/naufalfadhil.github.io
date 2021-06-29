var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var certificateListElement = document.querySelector("#certificateList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchCertificate(searchElement.value);
    };

    var renderResult = function (results) {
        console.log("Berhasil");
        certificateListElement.innerHTML = "";
        results.forEach(function (certificate) {
            var title = certificate.title;
            var image = certificate.image;
            var issuer = certificate.issuer;
            var issuerOn = certificate.issuerOn;
            var expiresOn = certificate.expiresOn;
            var type = certificate.type;
            var link = certificate.link;
            var disabledButton = certificate.disabledButton;


            var certificateElement = document.createElement("div");
            certificateElement.setAttribute("class", "card mb-3");

            certificateElement.innerHTML = '<div class="row no-gutters">'+
                '<div class="col-md-5">'+
                    '<a href="' + image + '" target="_blank">'+
                        '<img src="' + image + '" class="card-img-top" alt="' + title + '\'s Sertificates" width="5000px">'+
                    '</a>'+
                '</div>'+
                '<div class="col-md-6">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">' + title + '</h5>'+
                        '<p class="card-text">' + type + ' certificates by ' + issuer + 
                        '<p class="card-text"><small class="text-muted">Issuer On: ' + issuerOn + '<br> Expires On: ' + expiresOn + '</small></p>'+
                        '<form action="'+ link +'">'+
                            '<button onclick="window.location.href=' + link +'" type="submit" class="btn btn-primary"' + disabledButton +'>Issuer Verification</button>'+
                        '</form>'
                    '</div>'+
                '</div>'+
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