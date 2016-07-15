$( document ).ready(function() {

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

        gh = document.getElementById('github_activity');

        gh.innerHTML = 'last acitivty ' + moment(github_data[0].created_at).fromNow();

    });
    
    
    var reddit_callback = function() {
                    console.log('lol2')
           var comments = data.data.children.slice(0,3);
           
        console.log('lol')
            var comment_elem = document.getElementById('reddit_comment_list')
            
            console.log(comment_elem)
            
           for (comment in comments) {
               
               li = "<li>" + comment.body + "</li>" + "\n"
               comment_elem.innerHTML = comment_elem.innerHTML + li
           }
    };
    
    
    //Show reddit comment
      reddit_comment_list = $("#reddit_comment_list")
      $.getJSON(
        "http://reddit.com/u/sirlamegame.json?limit=3&jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 3),
            function (i, post) {
                console.log(post.data)
                
                //holy shit this is bad and i'm ashamed, but it works so i'll clean it up later
                if ('title' in post.data) {
                    reddit_comment_list.append("<li>" + post.data.score +  " - <a target=\"_blank\" class=\"hide_url_color\" href=\"https://reddit.com" + post.data.permalink + "\">"  + post.data.title + "</a> <b>in</b> <a target=\"_blank\" href=\"https://reddit.com/r/" + post.data.subreddit+ "\">/r/" + post.data.subreddit + "</a> " + " " + moment.unix(post.data.created_utc).fromNow() +"</li>");
                } else {
                    //Must be a comment then
                    reddit_comment_list.append("<li>" + post.data.score + " - <a href=\"https://reddit.com/u/sirlamegame\" target=\"_blank\" class=\"hide_url_color\">" + post.data.body + "</a> <b>in</b> <a target=\"_blank\"  href=\"https://reddit.com/r/" + post.data.subreddit+ "\">/r/" + post.data.subreddit + "</a> " + " " + moment.unix(post.data.created_utc).fromNow() +"</li>");
                }
            }
          )
        }
      )
});

