// test-mongo-connection.js
const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
  console.log('🔗 Testing MongoDB Atlas connection...');
  
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in .env file');
    console.log('💡 Please add MONGODB_URI to your .env file');
    return;
  }
  
  const safeUri = process.env.MONGODB_URI.replace(/\/\/.*@/, '//*****@');
  console.log('📍 Connection URI:', safeUri);
  
  try {
    console.log('🔄 Connecting to MongoDB Atlas...');
    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('✅ Successfully connected to MongoDB Atlas!');
    console.log('🗄️  Database name:', mongoose.connection.name);
    console.log('🌐 Host:', mongoose.connection.host);
    
    // Test database operation
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📚 Collections:', collections.length ? collections.map(c => c.name).join(', ') : 'None yet');
    
    await mongoose.connection.close();
    console.log('✅ Test completed successfully!');
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    
    if (error.message.includes('authentication')) {
      console.log('🔧 Check your username/password in the connection string');
    }
    if (error.message.includes('IP')) {
      console.log('🔧 Add your IP to Atlas Network Access whitelist');
    }
  }
}

testConnection();
