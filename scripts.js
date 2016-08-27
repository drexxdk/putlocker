$(function () {
    var page =
        '<div id="main">' +
            '<div id="search-form">' +
                '<form method="GET" action="http://putlocker.is/search/index.php"></form>' +
            '</div>' +
            '<div id="menu">' +
            '</div>' +
            '<div id="content"></div>' +
        '</div>';
    $(page).appendTo("body");
   
    var searchTextbox = $("#search > form > table > tbody > tr > td > input[type=text]");
    var searchButton = $("#search > form > table > tbody > tr > td > input[type=submit]");

    searchTextbox.appendTo("#search-form > form");
    searchButton.appendTo("#search-form > form");
    var menu = $("#nav");
    menu.prependTo("#menu");

    var content = $("body > table:nth-of-type(2) > tbody > tr > td:first-child .content-box");

    // video
    if ($("iframe + #main").length === 1) {
        $("#content").append(
            '<div id="left">' +
                '<div id="info"></div>' +
            '</div>' +
            '<div id="right"></div>'
            );
        var left = $("#left");
        var right = $("#right");
        var h1 = content.find("h1");
        var info_img = content.find("h1 + table > tbody > tr > td:first-child > table > tbody > tr:first-child > td > img");
        var info_table = content.find("h1 + table > tbody > tr > td:last-child > table");

        var embed = content.find("h1 + table + h2 + table");
        var links_1 = content.find("#MarketGidScriptRootC9737 + h2 + table");
        var links_2 = content.find("#MarketGidScriptRootC9737 + h2 + table + table");

        h1.appendTo(right);
        info_img.appendTo(left.children("#info"));
        info_table.appendTo(left.children("#info"));
        right.append('<div id="embed"></div>');
        embed.appendTo($("#embed"));
        links_1.appendTo(left);
        links_2.appendTo(left);

    } else {
        $(content).appendTo("#content");
    }
});