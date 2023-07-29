import mongoose, { Schema, models } from "mongoose";

export const CatSchema = new Schema({
    id: {            // 몽고에서 id++를 지원안해줌 => auto increament를 통해 id증감 할수있음
        type: Number,
    },
    name: {
        type: String,
        required: true, // 해당값이 존재해야함(null, undefined,""(빈문자열)같은 "falsy"가 될수없음)
    },
    age: {
        type: Number,
    },
    breed: {
        type: String,
    }
});

const Cats = models?.Cats || mongoose.model("Cats", CatSchema);

export default Cats;