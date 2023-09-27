import { Schema, model, models } from "mongoose";

const favoriteSchema = new Schema({
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    userAdd: String
});


let Favorite = models.Favorite || model('Favorite', favoriteSchema)
export default Favorite;
