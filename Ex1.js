function onPlayerReady(event) {
    event.target.playVideo();
}
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

function createVideo(id) {
    var youtubeScriptId = "youtube-api";
    var youtubeScript = document.getElementById(youtubeScriptId);
    var videoId = id;

    if (youtubeScript === null) {
        var tag = document.createElement("script");
        var firstScript = document.getElementsByTagName("script")[0];

        tag.src = "https://www.youtube.com/iframe_api";
        tag.id = youtubeScriptId;
        firstScript.parentNode.insertBefore(tag, firstScript);
    }

    window.onYouTubeIframeAPIReady = function () {
        window.player = new window.YT.Player('player', {
            videoId: videoId,
            height: '195',
            width: '320',
            playerVars: {
                autoplay: 1,
                modestbranding: 1,
                rel: 0
            }
        });
    };
}



$(document).ready(function () {

    $.get("http://tomdo.mysoft.jce.ac.il/get_current_date.php",
        function (data, textStatus) {
            $("#date").text(data);
        },
    );
    $("#show-btn").on("click", function () {
        $("#table-1").fadeIn();
        return false;
    });

    $.ajax({
        type: "get",
        url: "http://tomdo.mysoft.jce.ac.il/music_list.php",
        dataType: "json",
        success: function (response) {
            if (response) {
                var i = 0
                response.forEach(element => {
                    i = i + 1;
                    var artist = element.artist_name;
                    var name = element.name;
                    var id = element.id;

                    var btn = "<button id='yt-btn' type='button'  class='play' video-id=" + id + "><i class='fa fa-youtube-play'></i></button>"
                    var finaltr = "<tr class='single-song'><th scope='row'>" + i + "</th><td>" + artist + "</td><td>" + name + "</td><td>" + btn + "</td></tr&gt;";
                    $("#table-1 tbody").append(finaltr);
                });
            }


        }
    });


    $(document).on("click", "#yt-btn", function () {
        var id = $(this).attr("video-id");
        if (player.g != undefined) {
            player.loadVideoById(id);
        } else {
            createVideo(id);
        }

    });

});