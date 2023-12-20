const config = {
  port: process.env.PORT,
  host: process.env.HOST,
  tests: {
    mockDocument: process.env.MOCK_DOCUMENT,
  },
};

module.exports = config;
