import { Schema, model, models } from "mongoose";

const commentarieSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    recipeId: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});


let Commentarie = models.Commentarie || model('Commentarie', commentarieSchema)
export default Commentarie;
