import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: process.env.PORT,
  mongoURI:
    process.env.NODE_ENV === 'development'
      ? (process.env.MONGODB_DEV_URL as string)
      : (process.env.MONGODB_PROD_URL as string),
  nodeWhiteList:
    process.env.NODE_ENV === 'development'
      ? [process.env.DEV_ROOT_ORIGIN]
      : [process.env.PROD_WWW_ORIGIN, process.env.PROD_ROOT_ORIGIN],
};
