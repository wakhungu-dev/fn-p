require('dotenv').config({ path: '.env' });

console.log('Environment Variables:', {
  MONGODB_URI: process.env.MONGODB_URI,
  GOOGLE_ID: process.env.GOOGLE_ID,
  GOOGLE_SECRET: process.env.GOOGLE_SECRET,
});
