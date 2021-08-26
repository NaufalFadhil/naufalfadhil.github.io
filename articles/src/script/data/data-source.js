function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchItem = function (keyword) {
    var filteredItems = items.filter(function (item) {
        return item.title.toUpperCase().includes(keyword.toUpperCase()) || 
        item.media.toUpperCase().includes(keyword.toUpperCase()) ||
        item.tag.toUpperCase().includes(keyword.toUpperCase()) ||
        item.publisher.toUpperCase().includes(keyword.toUpperCase());
        item.published.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredItems.length) {
        this.onSuccess(filteredItems);
    } else {
        this.onFailed(keyword + " is not found");
    }
};