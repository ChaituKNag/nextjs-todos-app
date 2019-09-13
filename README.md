# Todo App

## Firebase Integration

Done using this [example](https://github.com/zeit/next.js/tree/canary/examples/with-firebase-authentication).

After starting, just go to [http://localhost:3000/login](http://localhost:3000/login)

This [Youtube playlist](https://www.youtube.com/watch?v=bgsuOm_pse4&list=PLqGj3iMvMa4K-QGq9uaF3BbPojp4xyoRw) from DevTips is also useful for this.

## Hack for adding environment variables.

Since I am putting this in Netlify, I don't wish to puth all api keys and stuff in my source code. So, I used dotenv to expose those as environment variables. Also, I used the hack from [here](https://pusher.com/tutorials/chat-sentiment-analysis-nextjs#setting-environment-variables) to make them available to React.

[Dotenv](https://www.npmjs.com/package/dotenv).

