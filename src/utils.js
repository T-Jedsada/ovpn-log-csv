function convertToCSV(objArray) {
  const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
  if (!array[0]) {
    return "";
  }
  let str =
    `${Object.keys(array[0])
      .map(value => `"${value}"`)
      .join(",")}` + "\r\n";

  return array.reduce((str, next) => {
    str +=
      `${Object.values(next)
        .map(value => `"${value}"`)
        .join(",")}` + "\r\n";
    return str;
  }, str);
}

exports.convertToCSV = convertToCSV;
