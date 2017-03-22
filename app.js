var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

module.exports = function(ctx, cb) {
	var tweet = 'Just released v' + ctx.body.release.tag_name + ' of ' + ctx.body.repository.name + '. Check it out: ' + ctx.body.release.html_url;

	client.post('statuses/update', { status: tweet },  function(error, tweet, response) {
  	if(error) throw error;
	});
};
