function browserHistory(obj, commandsArr) {
  commandsArr.forEach(line => {
    let currentCommand = line.split(" ");
    switch (currentCommand[0]) {
      case "Open":
        obj["Open Tabs"].push(currentCommand[1]);
        obj["Browser Logs"].push(currentCommand.join(" "));
        break;
      case "Close":
        if (obj["Open Tabs"].includes(currentCommand[1])) {
          obj["Open Tabs"].splice(
            obj["Open Tabs"].indexOf(currentCommand[1]),
            1
          );
          obj["Recently Closed"].push(currentCommand[1]);
          obj["Browser Logs"].push(currentCommand.join(" "));
        }
        break;
      case "Clear":
        obj["Browser Logs"] = [];
        obj["Recently Closed"] = [];
        obj["Open Tabs"] = [];
        break;
    }
  });

  console.log(obj["Browser Name"]);
  console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);

  console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox"
    ]
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
