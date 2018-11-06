'use strict';
const ipsum = require("lorem-ipsum")
const dictionary = require("./dictionary")

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: ipsum({
      words: dictionary,
    }),
  };
callback(null, response);
};