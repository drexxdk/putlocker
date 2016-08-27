$(function () {
    var body = $("body");
    var page =
        '<div id="main">' +
            '<div id="search-form">' +
                '<form method="GET" action="http://putlocker.is/search/index.php"></form>' +
            '</div>' +
            '<div id="menu">' +
            '</div>' +
            '<div id="content"></div>' +
        '</div>';
    $(page).appendTo(body);
   
    var searchTextbox = $("#search > form > table > tbody > tr > td > input[type=text]");
    var searchButton = $("#search > form > table > tbody > tr > td > input[type=submit]");

    searchTextbox.appendTo("#search-form > form");
    searchButton.appendTo("#search-form > form");
    var menu = $("#nav");
    menu.prependTo("#menu");

    var content = $("body > table:nth-of-type(2) > tbody > tr > td:first-child .content-box");

    // video
    if (body.children().first().attr("id") === "fb-root") {
        body.attr("id", "video");
        $("#content").append(
            '<div id="left">' +
                '<div id="info"></div>' +
                '<div id="links"></div>' + 
            '</div>' +
            '<div id="right"></div>'
            );
        var left = $("#left");
        var right = $("#right");
        var h1 = content.find("h1");
        var info = content.find("h1 + table > tbody > tr > td:last-child > table");

        var embed = content.find("h1 + table + h2 + table");
        var links_1 = content.find("#MarketGidScriptRootC9737 + h2 + table");
        var links_2 = content.find("#MarketGidScriptRootC9737 + h2 + table + table");

        h1.appendTo(right);
        info.appendTo(left.children("#info"));
        right.append('<div id="embed"></div>');
        embed.appendTo($("#embed"));

        links_1.appendTo(left.children("#links"));
        links_2.appendTo(left.children("#links"));

        left.children("#links").find("table > tbody > tr > td:nth-child(2)").each(function () {
            var $this = $(this);
            var link = $this.children("a");
            var provider = $this.html().substring($this.html().lastIndexOf(";") + 1).trim();
            link.text(provider);
            $this.html(link);
        });

    } else {
        body.attr("id", "browse");
        $(content).appendTo("#content");
    }
});