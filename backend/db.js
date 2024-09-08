const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://vviisshhaall29:vishal2903@cluster0.cgnr9dk.mongodb.net/Food_app_MERN?retryWrites=true&w=majority&appName=Cluster0'
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
