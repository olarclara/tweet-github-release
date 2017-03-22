# tweet-github-release
Little project built with Auth0's webtask that posts on Twitter new repo releases.

1. Follow [this](https://webtask.io/cli) to get started with Webtask.io and install wt-cli
2. Create a app on Twitter and get the credentials to replace in `app.js`
3. `npm i -g webtask-bundle`
4. `wt-bundle --output ./tweet.js ./app.js`
5. `wt create tweet.js`

Then you should go to the settings of the repo of your choice, add the webhook
(`https://webtask.it.auth0.com/api/run/{you-container-id}/tweet`) and chose to have it triggered on release actions.

That's all. Now, whenever you publish a new release, a tweet will be published to your profile.
