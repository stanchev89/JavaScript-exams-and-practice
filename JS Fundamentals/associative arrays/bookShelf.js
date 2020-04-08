function bookSheld(input) {
  let shelfs = {};
  input.forEach(line => {
    if (line.includes("->")) {
      line = line.split(" -> ");
      let curId = line.shift();
      let curGenre = line.shift();
      if (!shelfs.hasOwnProperty(curId)) {
        shelfs[curId] = {
          genre: curGenre,
          books: []
        };
      }
    } else {
      let currentBook = {};
      line = line.split(": ");
      let bookTitle = line.shift();
      line = String(line).split(", ");
      let [bookAuthor, curGenre] = line;
      currentBook = { [bookTitle]: bookAuthor };
      for (const key in shelfs) {
        if (shelfs[key]["genre"] == curGenre) {
          shelfs[key]["books"].push(currentBook);
        }
      }
    }
  });
  let sort = Object.keys(shelfs)
    .sort((a, b) => shelfs[b]["books"].length - shelfs[a]["books"].length)
    .forEach(element => {
      console.log(
        `${element} ${shelfs[element]["genre"]}: ${shelfs[element]["books"].length}`
      );
      for (const book of shelfs[element]["books"]) {
        for (const title in book) {
          let author = book[title];
          console.log(`--> ${title}: ${author}`);
        }
      }
    });
}
bookSheld([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history"
]);
