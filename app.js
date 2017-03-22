var Twitter = require('twitter');

module.exports = function(ctx, cb) {

  var client = new Twitter({
    consumer_key: ctx.secrets.consumer_key,
    consumer_secret: ctx.secrets.consumer_secret,
    access_token_key: ctx.secrets.access_token_key,
    access_token_secret: ctx.secrets.access_token_secret
  });

  var tweet = 'Just released v' + ctx.body.release.tag_name + ' of ' + ctx.body.repository.name + '. Check it out: ' + ctx.body.release.html_url;

	client.post('statuses/update', { status: tweet },  function(error, tweet, response) {
  	if(error) throw error;
    else return;
	});
};
