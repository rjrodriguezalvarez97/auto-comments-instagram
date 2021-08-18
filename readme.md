# PURPOSE
Little script to automate your entries to instagram giveaways that need just to tag a friend
# HOW TO USE
* Install dependencies with `npm install`.
* Create a new `config.js` file containing
```js
module.exports = {
  INSTAGRAM_POST: "https://www.instagram.com/p/xxxxxx/",
  INSTAGRAM_USER: "JhonDoe",
  INSTAGRAM_PASSWORD: "password",
  //these will get tag in the post
  USERS: ["apple", "twitter", "instagram"]
],
};

```
* `npm start`