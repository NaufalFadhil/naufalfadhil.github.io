var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var itemListElement = document.querySelector("#itemList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchItem(searchElement.value);
    };

    var renderResult = function (results) {
        console.log("Berhasil");
        itemListElement.innerHTML = "";
        results.forEach(function (item) {
            var title = item.title;
            var image = item.image;
            var publisher = item.publisher;
            var published = item.published;
            var expiresOn = item.expiresOn;
            var type = item.type;
            var link = item.link;
            var disabledButton = item.disabledButton;


            var itemElement = document.createElement("div");
            itemElement.setAttribute("class", "card mb-3 bg-dark text-white");

            itemElement.innerHTML = '<div class="row no-gutters">'+
                '<div class="col-md-12">'+
                    '<div class="card-body">'+
                        '<a href="' + link + '">' +
                            '<h3 class="card-title">' + title + '</h3>'+
                        '</a>'+
                            '<p class="card-text"> Published on <strong>' + publisher + '</strong> at <strong>' + published + '</strong></p>' +
                    '</div>'+
                '</div>';
            itemListElement.appendChild(itemElement);
        })
    };

    var fallbackResult = function (message) {
        itemListElement.innerHTML = "";
        itemListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};