function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchCertificate = function (keyword) {
    var filteredCertificates = Certificates.filter(function (certificate) {
        return certificate.title.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredCertificates.length) {
        this.onSuccess(filteredCertificates);
    } else {
        this.onFailed(keyword + " is not found");
    }
};