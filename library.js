(function(module) {
    "use strict";

    var Gsheets = {},
        embed = '<iframe src="https://docs.google.com/spreadsheets/d/$1/edit?usp=sharing" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>',
        regularUrl = /<a href="(?:https?:\/\/)?(?:docs\.google\.com)\/spreadsheets\/d\/(.+)\/edit?.*>.+<\/a>/g;
    Gsheets.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(regularUrl)) {
            data.postData.content = data.postData.content.replace(regularUrl, embed);
        }
        callback(null, data);
    };
    module.exports = Gsheets;
}(module));
