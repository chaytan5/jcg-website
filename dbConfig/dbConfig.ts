import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI_NEW!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected succesfully");
    });

    connection.on("error", (error) => {
      console.log(
        "MongoDB connection error. Make sure MongoDB is running " + error,
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
