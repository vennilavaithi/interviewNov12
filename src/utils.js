const cLat = -103.771556;
const cLong = 44.967243;
export const findLocation = ({ lat, long }) => {
  let result = "";
  if (lat > cLat) {
    result += "North";
  } else {
    result += "South";
  }
  if (long > cLong) {
    result += "east";
  } else {
    result += "west";
  }
  return result;
};

export const colorCodes = {
  NorthWest: "#6A6c34"
};

export const data = {"result":{"input":{"address":{"address":"4600 silver hill Rd  washington  dc 20233"},"benchmark":{"isDefault":false,"benchmarkDescription":"Public Address Ranges - Census 2020 Benchmark","id":"2020","benchmarkName":"Public_AR_Census2020"}},"addressMatches":[{"tigerLine":{"side":"L","tigerLineId":"76355984"},"coordinates":{"x":-76.92743610939091,"y":38.84598652130676},"addressComponents":{"zip":"20233","streetName":"SILVER HILL","preType":"","city":"WASHINGTON","preDirection":"","suffixDirection":"","fromAddress":"4600","state":"DC","suffixType":"RD","toAddress":"4700","suffixQualifier":"","preQualifier":""},"matchedAddress":"4600 SILVER HILL RD, WASHINGTON, DC, 20233"}]}}
