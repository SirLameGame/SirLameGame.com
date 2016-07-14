//Show twitch embedded player if livestream is active
$.getJSON('https://api.twitch.tv/kraken/streams/sirlamegame', function(channel) {

    var stream_status = document.getElementById('twitch_stream_status')
    
    if (channel["stream"] == null) { 
        stream_status.innerHTML = 'Stream is offline'

    } else {
        stream_status.innerHTML = '<iframe \
        src="http://player.twitch.tv/?channel=sirlamegame" \
        height="300" \
        width="400" \
        frameborder="0" \
        scrolling="no" \
        autoplay="true" \
        allowfullscreen="true"> \
    </iframe> '
    
    }
});

//Show github activity
$.getJSON('https://api.github.com/users/sirlamegame/events', function(github_data) {

    gh = document.getElementById('github_activity')
    
    gh.innerHTML = 'last acitivty ' + moment(github_data[0].created_at).fromNow()
    
});
   

   