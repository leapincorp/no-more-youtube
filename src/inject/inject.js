var readyStateCheckInterval = setInterval(function () {
    var $ = jQuery;
    if ($('body').length > 0) {
        clearInterval(readyStateCheckInterval);

        var $div = $('<div class="dwyt-main" ></div>')
            .append('<div class="dwyt-inner"></div>');
        $div.find('.dwyt-inner')
            .append('<h1>Get Back To Your Work!</h1>')
            .append('<p>Please don\'t waste your time on YouTube, FaceBook and so on.</p>')
            .append('<p>Please don\'t ruin your life because of spending so much time on the Internet.</p>')
            .append('<p>Focus on what you do now! Get back to your work, Idiot!</p>')
            .append('<blockquote><div class="phrase">Your time is limited, so don’t waste it living someone else’s life.</div><div class="by">Steve Jobs</div></blockquote>');

        $('body').empty().css('position', 'relative').prepend($div);

    }
}, 1);