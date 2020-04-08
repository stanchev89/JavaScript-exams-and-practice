function comments2(input) {
  let articles = {
    users: {},
    theme: new Set()
  };
  for (let line of input) {
    line = line.split(" ");

    if (line[0] == "user") {
      line.shift();
      let userName = line;
      if (!articles["users"].hasOwnProperty(userName)) {
        articles["users"][userName] = {};
      }
    } else if (line[0] == "article") {
      line.shift();
      let article = line[0];
      if (!articles["theme"].has(article)) {
        articles["theme"].add(article);
      }
    } else {
      let userName = line.shift();
      line = line.splice(2);
      line = String(line).split(",");
      for (const word of line) {
        if (word == "") {
          line.splice(line.indexOf(word), 1);
        }
      }
      let article = line.shift();
      article = article.split(":");
      article.pop();
      article = String(article);
      for (const item of articles["theme"]) {
      }

      if (
        articles["theme"].has(article) &&
        articles["users"].hasOwnProperty(userName)
      ) {
        articles["users"][userName][articles];
        console.log(line);
      }
    }
  }
}
comments2([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much"
]);
