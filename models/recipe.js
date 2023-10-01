import { Schema, model, models } from "mongoose";

const recipeSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    portions: {
        type: Bueffer,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    diete: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    cooking: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
});

let Recipe = models.Recipe || model('Recipe', recipeSchema)
export default Recipe;
