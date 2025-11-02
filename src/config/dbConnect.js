const mongoose = require('mongoose');

const dbConnect = async () => {
   try{
    const connect = await mongoose.connect(process.env.URL);
   console.log(`Project is connected to MongoDB: `);
   }
  catch (err){
    console.log(err);
    process.exit(1);
  } 
}
 
module.exports = dbConnect;
           //  OR
//console.log(`Project is connected to MongoDB: ${connect.connection.host}, ${connect.connection.name}`); 