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

// Uploads file to s3
// export const uploadFile = async () => {
//     const fileStream = fs.createReadStream(file.path);
//     const command = new PutObjectCommand({
//         Bucket: bucketName,
// 		Body: fileStream,
// 		Key: file.filename,
//     });

//     try {
//       const response = await client.send(command);
//       console.log(response);
//     } catch (err) {
//       console.error(err);
//     }
//   };
export const uploadFile = async (file) => {
  const uploadParams = {
    Bucket: bucketName,
    Body: file,
    Key: file.filename,
  };
  return await s3.upload(uploadParams).promise();
};

export const deletePhoto = async (key) => {
  const deleteParams = {
    Bucket: bucketName,
    Key: key,
  };
};
