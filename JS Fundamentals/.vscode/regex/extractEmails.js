function extractEmails(input) {
  let validation = /(?<=\s)([a-z]+|\d+)(\d+|\w+|\.+|-+)([a-z]+|\d+)\@[a-z]+\-?[a-z]+\.[a-z]+(\.[a-z]+)?/g;
  for (const line of input) {
    let emails = line.match(validation);
    if (emails !== null) {
      for (const mail of emails) {
        console.log(mail.trim());
      }
    }
  }
}
extractEmails([
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.",
  "end"
]);
