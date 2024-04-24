const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
   // endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.SECRET_KEY
});

const linkShareDB = new AWS.DynamoDB.DocumentClient();

const Table = 'linkShareDB';

module.exports = {
    linkShareDB,
    Table
}