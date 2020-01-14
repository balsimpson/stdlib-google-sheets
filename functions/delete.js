const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
/**
Operator	Behavior
is	Finds all matching entries. Returns entryValue === queryValue (exact match, type included).
not	Finds all non-matching entries. Returns entryValue !== queryValue (exact match, type included).
gt	Finds all entries greater than specified value. Returns entryValue > queryValue.
gte	Finds all entries greater than or equal to specified value. Returns entryValue >= queryValue.
lt	Finds all entries less than specified value. Returns entryValue < queryValue.
lte	Finds all entries less than or equal to specified value. Returns entryValue <= queryValue.
contains	Finds all entries containing the exact provided value. Works when entryValue is a string or an array.
icontains	Finds all entries containing the provided value, case-insensitive. Works when entryValue is a string or an array.
startswith	Finds all entries starting with the exact provided value. Works when entryValue is a string.
istartswith	Finds all entries starting with the provided value, case-insensitive. Works when entryValue is a string.
endswith	Finds all entries ending with the exact provided value. Works when entryValue is a string.
iendswith	Finds all entries ending with the provided value, case-insensitive. Works when entryValue is a string.
is_null	Finds all entries where entryValue === null, queryValue is ignored.
is_true	Finds all entries where entryValue === true, queryValue is ignored.
is_false	Finds all entries where entryValue === false, queryValue is ignored.
not_null	Finds all entries where entryValue !== null, queryValue is ignored.
not_true	Finds all entries where entryValue !== true, queryValue is ignored.
not_false	Finds all entries where entryValue !== false, queryValue is ignored.
in	Finds all entries within the provided value, intended to match when queryValue is an array but works with string input.
not_in	Finds all entries not in the provided value, intended to match when queryValue is an array but works with string input.
recency_lt	Finds all entries where DATE(entryValue) is recent within less than queryValue in number of seconds. i.e. "field__recency__lt": 3600 would look for entries that have field as a date/timestamp within the past hour (exclusive). ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
recency_lte	Finds all entries where DATE(entryValue) is recent within less than or equal to queryValue in number of seconds. i.e. "field__recency__lte": 3600 would look for entries that have field as a date/timestamp within the past hour (inclusive). ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
recency_gt	Finds all entries where DATE(entryValue) has a recency greater than queryValue in number of seconds. i.e. "field__recency__gt": 3600 would look for entries that have field as a date/timestamp outside the past hour (exclusive). ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
recency_gte	Finds all entries where DATE(entryValue) has a recency greater than or equal to queryValue in number of seconds. i.e. "field__recency__gte": 3600 would look for entries that have field as a date/timestamp outside the past hour (inclusive). ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
upcoming_lt	Finds all entries where DATE(entryValue) is going to occur within less than queryValue in number of seconds. i.e. "field__upcoming_lt": 3600 would look for entries that have field as a date/timestamp within the next hour (exclusive). ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
upcoming_lte	Finds all entries where DATE(entryValue) is going to occur within less than or equal to queryValue in number of seconds. i.e. "field__upcoming_lte": 3600 would look for entries that have field as a date/timestamp within the next hour (inclusive). ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
upcoming_gt	Finds all entries where DATE(entryValue) is going to occur within greater than queryValue in number of seconds. i.e. "field__upcoming_gt": 3600 would look for entries that have field as a date/timestamp outside the next hour (exclusive). ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
upcoming_gte	Finds all entries where DATE(entryValue) is going to occur within greater than or equal to queryValue in number of seconds. i.e. "field__upcoming_gte": 3600 would look for entries that have field as a date/timestamp outside the next hour (inclusive). ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
date_lt	Finds all entries where DATE(entryValue) is less than DATE(queryValue), i.e. '12-06-1988' < '01-01-2019'. ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
date_lte	Finds all entries where DATE(entryValue) is less than or equal to DATE(queryValue), i.e. '12-06-1988' <= '12-06-1988'. ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
date_gt	Finds all entries where DATE(entryValue) is greater than DATE(queryValue), i.e. '12-06-1988' > '01-01-1980'. ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
date_gte	Finds all entries where DATE(entryValue) is greater than or equal to DATE(queryValue), i.e. '12-06-1988' >= '12-06-1988'. ISO8601 Timestamps suggested, if no timezone entered UTC will be assumed.
**/
module.exports = async (range= '', where = [{}], spreadsheetId) => {
  console.log(`Running googlesheets.query[@0.3.0].delete()...`);
  const query = lib.googlesheets.query['@0.3.0'];

  let result = await query.delete({
    spreadsheetId: spreadsheetId,
    range: range, // (required)
    where: where
  });
  return result;
}