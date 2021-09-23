import mongoose from "mongoose";

// const DATABASE_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/WhatsappClone'
const DATABASE_CONNECTION_STRING =
  "mongodb+srv://eshemuel:43wyxQtMK3Lmki2@cluster0.xxltr.mongodb.net/test?authSource=admin&replicaSet=atlas-h485xb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose
  .connect(DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log("Mongoose Error 2 : " + JSON.stringify(err));
  });

export default mongoose.connection;
