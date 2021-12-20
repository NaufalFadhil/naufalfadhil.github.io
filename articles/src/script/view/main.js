var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var itemListElement = document.querySelector("#itemList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchItem(searchElement.value);
    };

    var renderResult = function (results) {
        itemListElement.innerHTML = "";
        results.forEach(function (item) {
            var title = item.title;
            var media = item.media;
            var published = item.published;
            var link = item.link;
            var tag = item.tag;


            var itemElement = document.createElement("div");
            itemElement.setAttribute("class", "text-index");

            itemElement.innerHTML = '<div class="row no-gutters">'+
                '<div class="col-md-12">'+
                    '<a href="' + link + '">' +
                        '<h3 class="title">' + title + '</h3>'+
                    '</a>'+
                        '<p class="text">'+
                            'Published on <strong>' + media + '</strong> at <strong>' + published + '</strong>' +
                            '</br>' +
                            '<strong>TAG:</strong> ' + tag +
                            '</br>' +
                            '<hr class="dashed"></hr>' +
                        '</p>' +
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