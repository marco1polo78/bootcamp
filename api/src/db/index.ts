import mongoose from "mongoose";
const uri = 'mongodb://localhost:27017/Blog';

export default async function () {
    await mongoose
        .connect(uri, {dbName: 'Blog'})
        .then(() => {
            console.log(`Conneection to database ${uri} successfully`)
        })
        .catch((err: any) => {
            console.log(err);
        })
}