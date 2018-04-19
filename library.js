(function(module) {
    "use strict";

    var Gsheets = {},
        embed = '<iframe src="https://docs.google.com/spreadsheets/d/$1/edit?usp=sharing" class="sheets-embed">Loading...</iframe>',
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
