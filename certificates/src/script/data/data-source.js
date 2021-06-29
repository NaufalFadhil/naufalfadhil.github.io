function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchCertificate = function (keyword) {
    var filteredCertificates = certificates.filter(function (certificate) {
        return certificate.title.toUpperCase().includes(keyword.toUpperCase()) || 
        certificate.type.toUpperCase().includes(keyword.toUpperCase()) ||
        certificate.media.toUpperCase().includes(keyword.toUpperCase()) ||
        certificate.issuer.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredCertificates.length) {
        this.onSuccess(filteredCertificates);
    } else {
        this.onFailed(keyword + " is not found");
    }
};