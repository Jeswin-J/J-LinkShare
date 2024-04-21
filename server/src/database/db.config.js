import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-1',
   // endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const linkShareDB = new AWS.DynamoDB.DocumentClient();

const Table = 'linkShareDB'

export {
    linkShareDB,
    Table
}