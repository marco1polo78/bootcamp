import mongoose from "mongoose";
const uri = "mongodb+srv://admin:75nVOEsvn6UW3f2i@myblog.wmdfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const password = '75nVOEsvn6UW3f2i';

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