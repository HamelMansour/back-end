const mongoose = require ('mongoose')
const userShema= mongoose. Schema ({
    firstName:{
        type: String
    },    
    lastName :{
        type: String
    },
    email : {
        type: String
    },
    password: {
        type: String
    }
})
module.exports= mongoose.model('User', userShema)