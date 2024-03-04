import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const tokenExpired = process.env.TOKEN_EXPIRED as string;
const serverEnv = process.env.SERVER_ENV as string;
const rootDomain = process.env.ROOT_DOMAIN as string;
const apiHost = process.env.API_HOST as string;
const originHost = process.env.ORIGIN_HOST as string;
const mongoURI = process.env.MONGODB_URL as string;
const rdsHostUrl = process.env.RDS_HOST_URL as string;
const rdsUser = process.env.RDS_USER as string;
const rdsPass = process.env.RDS_PASS as string;
const rdsDatabase = process.env.RDS_DATABASE as string;
const rdsTimeout = process.env.RDS_TIMEOUT as string;
const jwtSecretKey = process.env.JWT_SECRET_KEY as string;
const awsAccessKey = process.env.AWS_ACCESS_KEY as string;
const awsSecretKey = process.env.AWS_SECRET_KEY as string;
const cryptoKey = process.env.CRYPTO_SECRET_KEY as string;
const webHookErrorUrl = process.env.SLACK_WEB_HOOK_ERROR_URL as string;
const webHookSystemUrl = process.env.SLACK_WEB_HOOK_SYSTEM_URL as string;

export default {
  port,
  tokenExpired,
  serverEnv,
  rootDomain,
  apiHost,
  mongoURI,
  rdsHostUrl,
  rdsUser,
  rdsPass,
  rdsDatabase,
  rdsTimeout,
  originHost,
  jwtSecretKey,
  awsAccessKey,
  awsSecretKey,
  cryptoKey,
  webHookErrorUrl,
  webHookSystemUrl,
};
