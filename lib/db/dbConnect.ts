import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI || "";
console.log(DB_URI);

let cashed = global.mongoose;

if(!cashed){
    cashed = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if(cashed.conn) return cashed.conn;

    if(!cashed.promise){
        cashed.promise = mongoose
            .set({ debug: true, strictQuery: false })
            .connect(`${DB_URI}`)
            .then((mongoose) => mongoose);
    }
    cashed.conn = await cashed.promise;
    return cashed.conn;
}

export default dbConnect;