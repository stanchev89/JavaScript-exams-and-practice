function movies(input) {
  let commands = input.slice();
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    let movieData = {};
    commands[i] = commands[i].split(" ");
    let currentLine = commands[i].slice();
    //console.log(currentLine);

    if (currentLine.includes("addMovie")) {
      currentLine.shift();
      let addMovieName = [...currentLine];
      addMovieName = addMovieName.join(" ");
      movieData.name = addMovieName;
      result.push(movieData);
    } else if (currentLine.includes("directedBy")) {
      let index = currentLine.indexOf("directedBy");
      let dirMovieName = currentLine.splice(0, index);
      dirMovieName = dirMovieName.join(" ");
      let director = currentLine.splice(1, currentLine.length);
      director = director.join(" ");

      if (isMovieExist(dirMovieName) >= 0) {
        result[isMovieExist(dirMovieName)].director = director;
      }
    } else if (currentLine.includes("onDate")) {
      let index = currentLine.indexOf("onDate");
      let dateMovieName = currentLine.splice(0, index);
      dateMovieName = dateMovieName.join(" ");
      let dateTime = currentLine.splice(1, index);
      dateTime = dateTime.join(".");
      if (isMovieExist(dateMovieName) >= 0) {
        result[isMovieExist(dateMovieName)].date = dateTime;
      }
    }
  }
  function isMovieExist(movieName) {
    let indexOf = -1;
    for (let i = 0; i < result.length; i++) {
      let currentObj = result[i];
      if (currentObj.name == movieName) {
        indexOf = i;
        break;
      }
    }
    return indexOf;
  }

  for (let i = 0; i < result.length; i++) {
    let objKeys = Object.keys(result[i]);
    if (objKeys.length === 3) {
      console.log(JSON.stringify(result[i]));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen"
]);
