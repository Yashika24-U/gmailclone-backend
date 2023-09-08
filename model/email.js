//this is  like schema
//Validation with the hepl of mongoose


import mongoose from 'mongoose'

const EmailSchema = new mongoose.Schema({
    to : {
        type : String,
        required : true
    },
    from: {
        type : String,
        required : true
    },
    subject: String,

   body : String,
    
    date:{
             type : Date,
           
         },
    
    name:{
        type: String,
        required : true,
    },
    starred:{
        type : Boolean,
        default:false,
        // required : true
    },
    type: {
        type: String,
        required: true,
    
    },
    bin:{
        type:Boolean,
        default:false,
        // required : true
    }
   
})

// Model-inside collection name(tablename)
const email = mongoose.model('emails',EmailSchema)

export default email;






    
