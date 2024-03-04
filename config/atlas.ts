import mongoose from 'mongoose';
import env from './env';

const connectAtlas = async () => {
  try {
    await mongoose.connect(env.mongoURI);
    mongoose.set('autoCreate', true);
    console.log('TC DB connected!');
  } catch (err: any) {
    throw Error('F700001');
  }
};

export default connectAtlas;
