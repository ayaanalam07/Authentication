import mongoose from "mongoose";

const UserSchema = new  mongoose.Schema({
    email : {
        type :String,
        require : [true, "email is required"],
        unique  : true
    },
    password : {
        type : String,
        require : [true, "password is required"],
    }
})

export default mongoose.model("Users", UserSchema)