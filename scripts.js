// challenges with site:
// - table layout
// - most elements doesn't have id
// - only way to identity one element from another is by looking at ancestors and siblings
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

    // movie / tv-show
    if (body.children().first().attr("id") === "fb-root") {
        body.attr("id", "video");
        $("#content").append(
            '<div id="left">' +
                '<div id="info"></div>' +
                '<div id="links"><div></div></div>' + 
            '</div>' +
            '<div id="right">' +
                '<div id="embed"><div></div></div>' +
            '</div>'
            );
        var left = $("#left");
        var right = $("#right");
        var h1 = content.find("h1");
        var info = content.find("h1 + table > tbody > tr > td:last-child > table");

        info.appendTo(left.children("#info"));
        h1.prependTo(right);
        var isTvShow = content.children().eq(1).hasClass("addthis_toolbox");
        if (isTvShow) {
            var started = false;
            content.children().each(function (index, value) {
                var ignoreLast = $(value).next().attr("id") === "MarketGidScriptRootC9737";
                if (ignoreLast) {
                    return false;
                }
                if(started) {
                    $(value).appendTo(left.children("#links").children("div"));
                }
                var ignoreFirst = $(value).hasClass("addthis_toolbox");
                if(ignoreFirst) {
                    started = true;
                }
            });
        } else {
            var embed = content.find("table:first-of-type + h2 + table iframe:first-of-type");
            var links_1 = content.find("#MarketGidScriptRootC9737 + h2 + table");
            var links_2 = content.find("#MarketGidScriptRootC9737 + h2 + table + table");

            embed.appendTo($("#embed > div"));
            $.getScript('https://code.jquery.com/ui/1.12.0/jquery-ui.js', function () {
                $("#embed > div").resizable();
            });
            links_1.appendTo(left.children("#links").children("div"));
            links_2.appendTo(left.children("#links").children("div"));
        }

        left.children("#links").find("table > tbody > tr > td:nth-child(2)").each(function () {
            var $this = $(this);
            var link = $this.children("a");
            var provider = "<span>" + $this.html().substring($this.html().lastIndexOf(";") + 1).trim() + "</span>";
            

            if (isTvShow) {
                var episode = "<span>" + link.text() + "</span>";
                link.html(episode + provider);
            } else {
                link.html(provider);
            }
            $this.html(link);
        });
    } else {
        body.attr("id", "browse");
        $(content).appendTo("#content");
    }
});