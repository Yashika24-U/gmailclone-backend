import mongoose from 'mongoose'


const Connection = async ()=>{
    const DB_URI = `mongodb+srv://iamyashikau:yashi25062002@gmailclone.vrpx5l0.mongodb.net/`
    // const DB_URI = `mongodb://iamyashikau:yashi25062002@ac-zxq9zw9-shard-00-00.vrpx5l0.mongodb.net:27017,ac-zxq9zw9-shard-00-01.vrpx5l0.mongodb.net:27017,ac-zxq9zw9-shard-00-02.vrpx5l0.mongodb.net:27017/?ssl=true&replicaSet=atlas-o6u7g7-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       
       await mongoose.connect(DB_URI, {useNewUrlParser : true})
        console.log(`Database connected sucessfully`)

    }catch(error)
    {
        console.log(`Error while connecting with database`,error.message)
    }
    
}

export default Connection

















import {MongoClient} from 'mongodb'
// const { MongoClient } = require('mongodb');

//Replace these placeholders with your MongoDB Atlas credentials and cluster details
// const username = 'your-username';
// const password = 'your-password';
// const dbName = 'your-database-name';
// const clusterUrl = 'your-cluster-url';
// const username = encodeURIComponent("<username>");
// const password = encodeURIComponent('yashi25062002');

//Construct the connection string
// const uri = `mongodb+srv://iamyashikau:${password}@gmailclone.vrpx5l0.mongodb.net/`
// const uri = `mongodb://iamyashikau:yashi25062002@ac-zxq9zw9-shard-00-00.vrpx5l0.mongodb.net:27017,ac-zxq9zw9-shard-00-01.vrpx5l0.mongodb.net:27017,ac-zxq9zw9-shard-00-02.vrpx5l0.mongodb.net:27017/?ssl=true&replicaSet=atlas-o6u7g7-shard-0&authSource=admin&retryWrites=true&w=majority`
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//  function Connection() {
//     console.log("connection testing")
//   try {
//      client.connect();
//     console.log('Connected to MongoDB Atlas');

//     // Now you can work with your MongoDB Atlas cluster
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// export default Connection

// Call the function to connect
// connectToMongoDB();









