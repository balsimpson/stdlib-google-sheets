const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
/**
* let result = await lib.googlesheets.query['@0.3.0'].insert({
    spreadsheetId: spreadsheetId,
    range: range,
    fieldsets: [
      {
        'duration': duration,
        'readable': readable,
        'date': date
      }
    ]
  });
* An HTTP endpoint that acts as a webhook for HTTP or Webhook request event
* @returns {object} result The result of your workflow steps
*/
module.exports = async (fieldsets = [{}], range, spreadsheetId) => {

  console.log(`Running googlesheets.query[@0.3.0].insert()...`);

  let result = await lib.googlesheets.query['@0.3.0'].insert({
    spreadsheetId: spreadsheetId,
    range: range,
    fieldsets: fieldsets
  });
  return result;
};