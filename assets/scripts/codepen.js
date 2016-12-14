var JavaScript = {
    load: function(url, callback) {
        var script = document.createElement('script')
        script.type = 'text/javascript';

        if (script.readyState) { // IE
            script.onreadystatechange = function() {
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { // Others
            script.onload = function() {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
};

// @see https://highlightjs.org/
JavaScript.load('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js', function() {
    hljs.initHighlightingOnLoad();
});
