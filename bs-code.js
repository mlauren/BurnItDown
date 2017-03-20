
var cleanUrl = function(url) {
    url = url.toString().replace(/^(?:https?|ftp)\:\/\//i, '');
    url = url.toString().replace(/^www\./i, '');
    url = url.toString().replace(/\/.*/, '');

    return url;
}