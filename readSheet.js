const fetch = require("node-fetch");

listMajors();

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {OAuth2Client} auth The authenticated Google OAuth client.
 */
function listMajors() {
  const apiKey = "AIzaSyAPSHly9LFw3KnukymLIOtJ58OUOJvh3fw";
  const apiURL = "https://content-sheets.googleapis.com/v4/spreadsheets";
  const spreadSheetId = "1CfARBdT8J4xZsH45YFkGQjKyvKTHhtIYYoNZWHtjXXk";
  const ranges = "Sheet1!A1%3AE";
  const URL = `${apiURL}/${spreadSheetId}/values/${ranges}?key=${apiKey}`;
  console.log("URL", URL);
  fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(body => {
      console.log(body);
      const rows = body.values;
      if (rows.length) {
        console.log("Name, Major:");
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map(row => {
          console.log(`${row[0]}, ${row[4]}`);
        });
      } else {
        console.log("No data found.");
      }
    });
  // sheets.spreadsheets.values.get(
  //   {
  //     spreadsheetId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  //     range: "Class Data!A2:E"
  //   },
  //   result => {
  //     console.log(result);
  //     let err,
  //       { data } = result;
  //     if (err) return console.log("The API returned an error: " + err);
  //     const rows = data.values;
  //     if (rows.length) {
  //       console.log("Name, Major:");
  //       // Print columns A and E, which correspond to indices 0 and 4.
  //       rows.map(row => {
  //         console.log(`${row[0]}, ${row[4]}`);
  //       });
  //     } else {
  //       console.log("No data found.");
  //     }
  //   }
  // );
}
