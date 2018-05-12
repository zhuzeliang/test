var urlParams; 
(window.onpopstate = function() {
    var match,
    pl = /\+/g,
    search = /([^&=]+)=?([^&]*)/g,
    decode = function(s) {
        return decodeURIComponent(s.replace(pl, " "));
    },
    query = window.location.search.substring(1);
    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

　　//urlParams的结果
    urlParams = {
      param: "yes",
      article: "1"
    }

    console.log(urlParams["param"]);  // -> "yes"
    console.log("article" in urlParams);  // -> true
