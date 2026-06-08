import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://suryaenders:Surya12345@ac-1j6ldsn-shard-00-00.ndgxwea.mongodb.net:27017,ac-1j6ldsn-shard-00-01.ndgxwea.mongodb.net:27017,ac-1j6ldsn-shard-00-02.ndgxwea.mongodb.net:27017/Food-Delivery-website?ssl=true&replicaSet=atlas-oi897e-shard-0&authSource=admin&appName=Cluster0",
    );

    console.log("DB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
