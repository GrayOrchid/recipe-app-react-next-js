import { Schema, model, models } from "mongoose";

const userInfoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

});


let UserInfo = models.userInfo || model('UserInfo', userInfoSchema)
export default UserInfo;
