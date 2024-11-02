const mongoose = require('mongoose');
const mongoURI = '****************************************************************************************8'
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI).then(async() => {
      console.log('Connected to MongoDB');
      const fetched_data = await mongoose.connection.db.collection('menu').find({}).toArray();
    global.Food_items = fetched_data;
    const foodCategory = await mongoose.connection.db.collection('categories').find({}).toArray(); 
    global.foodCategory = foodCategory;
    //console.log(global.Food_items)
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

};

module.exports = mongoDB; 
