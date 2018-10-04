function tplawesome(e, t) {
    res = e;
    for (var n = 0; n < t.length; n++) {
        res = res.replace(/\{\{(.*?)\}\}/g, function (e, r) {
            return t[n][r]
        })
    }
    return res
}

$(function () {
    <!--The below code gets executed once the submit button is pressed-->
    $("form").on("submit", function (e) {
        e.preventDefault();
        // prepare the request
        var req = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",

            q: $("#search").val(),
            //NO of videos retrieveed
            maxResults: 20,
            order: "relevance",
            //Only the videos published after the below date
            publishedAfter: "2012-01-01T00:00:00Z"
        });
        // execute the request
        req.execute(function (response) {
            var results = response.result;
            $("#results").html("");
            $.each(results.items, function (index, item) {
                $.get("tpl/item.html", function (data) {
                    //The title of the video is stored in the title and same for video id
                    $("#results").append(tplawesome(data, [{"title": item.snippet.title, "videoid": item.id.videoId}]));
                });
            });
            resetVideoHeight();
        });
    });

    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9 / 16);
}
<!--On initializing the window the API and other gets loaded-->
function initialize() {
    gapi.client.setApiKey("AIzaSyA6A3HSCa7DbFllkD2_OGpB2uDA4kqwvZ4");
    gapi.client.load("youtube", "v3", function () {
        // youtube api is ready
    });
}
