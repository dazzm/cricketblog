import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

let isConnected

const connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection')
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  return mongoose.connect(process.env.DB)
    .then(db => { 
      isConnected = db.connections[0].readyState;
    });
};

export default connectToDatabase