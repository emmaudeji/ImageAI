import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDb from "./mongoose/connect.js";
import postRoutes from "./routes/postRoute.js";
import dalleRoutes from "./routes/dalleRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello, this is MyDall-E app");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server started running on port http://localhost:8080 ")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
