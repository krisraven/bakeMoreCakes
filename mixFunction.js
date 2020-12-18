const AWS = require('aws-sdk');

const mixTogether = async (ingredients) => {
  const Lambda = new AWS.Lambda();
  const functionName = 'my-mix-cake-function';
  const event = {
    FunctionName: functionName,
  };
  return Lambda.invoke(event).promise();
};

module.exports = {
  mixTogether,
};
