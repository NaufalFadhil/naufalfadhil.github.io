var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var clubListElement = document.querySelector("#clubList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };

    var renderResult = function (results) {
        clubListElement.innerHTML = "";
        results.forEach(function (club) {
            var name = club.name;
            var fanArt = club.fanArt;
            var description = club.description;

            var clubElement = document.createElement("div");
            clubElement.setAttribute("class", "card mb-3");

            clubElement.innerHTML = '<div class="row no-gutters">'+
                '<div class="col-md-4">'+
                    '<a href="' + fanArt + '">'+
                        '<img src="' + fanArt + '" class="card-img-top" alt="...">'+
                    '</a>'+
                '</div>'+
                '<div class="col-md-8">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">' + name + '</h5>'+
                        '<p class="card-text">' + description + '</p>'+
                        '<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>'+
                    '</div>'+
                '</div>'+
            '</div>';
            clubListElement.appendChild(clubElement);
        })
    };

    var fallbackResult = function (message) {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};