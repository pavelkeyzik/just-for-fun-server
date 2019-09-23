console.log(process.env.MONGODB_URI);

module.exports = {
  port: process.env.PORT || 3500,
  database: process.env.MONGODB_URI,
};
