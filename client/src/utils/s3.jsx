import * as S3 from 'aws-sdk/clients/s3';
import * as fs from 'fs';

const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;
const region = import.meta.env.VITE_AWS_BUCKET_REGION;
const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
const secretAccessKey = import.meta.env.VITE_AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

export const uploadFile = async (file, productName, email) => {
  const uploadParams = {
    Bucket: bucketName,
    Body: file,
    Key: `${email}.${productName}`,
  };
  return await s3.upload(uploadParams).promise();
};

export const deletePhoto = async (key) => {
  const deleteParams = {
    Bucket: bucketName,
    Key: key,
  };
};
