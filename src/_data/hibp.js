const axios = require("axios");

module.exports = async () => {
  const res = await axios.get("https://haveibeenpwned.com/api/v3/breaches");
  return res.data;
};
