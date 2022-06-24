;const whois = require("whois");
const util = require("util");
const parseraw = require("../parse-raw-data");
const promis = util.promisify(whois.lookup);

async function lookup(domain) {
  json = await promis(domain);
  result = await parseraw(json);
  return { status: 200, creator: "OnXDz", result };
}

module.exports = lookup.bind();
