(function(module) {
    "use strict";

    var Gforms = {},
        embed = '<iframe src="https://docs.google.com/forms/d/$1/viewform?$2" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>',
        regularUrl = /<a href="(?:https?:\/\/)?(?:docs\.google\.com)\/forms\/d\/(.+)\/viewform\?*(.*)>.+<\/a>/g;
    Gforms.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(regularUrl)) {
            data.postData.content = data.postData.content.replace(regularUrl, embed);
        }
        callback(null, data);
    };
    module.exports = Gforms;
}(module));