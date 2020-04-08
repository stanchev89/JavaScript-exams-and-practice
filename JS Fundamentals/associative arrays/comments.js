function comments(input) {
  let users = {};
  let articles = {};
  for (let line of input) {
    line = line.split(" ");
    let action = line.shift();
    if (action == "user") {
      if (!users.hasOwnProperty(line)) {
        users[line] = {};
      }
    } else if (action === "article") {
      if (!articles.hasOwnProperty(line)) {
        articles[line] = [];
      }
    } else {
      line.splice(0, 2);
      line = String(line)
        .split(":")
        .toString()
        .split(",");
      for (const key in line) {
        if (line[key] == "") {
          line.splice(key, 1);
        }
      }

      if (users.hasOwnProperty(action) && articles.hasOwnProperty(line[0])) {
        let comment = line.shift();
        let profile = action;
        articles[comment].push({ [profile]: [...line] });
      }
    }
  }
  let sortedArticles = Object.keys(articles)
    .sort((a, b) => articles[b].length - articles[a].length)
    .forEach(theme => {
      console.log(`Comments on ${theme}`);
      let sortUsers = [];
      for (const key of articles[theme]) {
        sortUsers.push(Object.keys(key));
      }
      sortUsers.sort();
      for (const key of articles[theme]) {
      }
    });
}
comments([
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
