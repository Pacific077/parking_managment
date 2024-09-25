import express from "express";
import ConnectDb from "./Config/db.js";
import dotenv from "dotenv";
import cron from "node-cron";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import ParkingRoutes from "./Routes/ParkingRoutes.js";
import UserRoutes from "./Routes/UserRoutes.js";
import Parkings from "./Models/ParkingModel.js";

// import path from 'path'
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
const app = express();

//configurations
dotenv.config();
ConnectDb();

//middlewares
// app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
// app.use(cors(corsOptions));
app.use(cors(corsOptions));

//routes
app.use("/api/v1/Parkings", ParkingRoutes);
app.use("/api/v1/user", UserRoutes);

//crons
cron.schedule("0 * * * * *", async () => {
  try {
    const allParkingSpaces = await Parkings.find();
    allParkingSpaces.forEach(async (parkingSpace) => {
      parkingSpace.FourWheelerFilled = parkingSpace.FourWheelerFilled.filter(
        (booking) => {
          return new Date(booking.bookedUntil) > new Date();
        }
      );
      await parkingSpace.save();
    });
  } catch (error) {}
});

//deploymemt
//-------------------------------------------------------------------------
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const buildPath = path.join(__dirname, 'frontend', 'build');

// console.log("bpth",buildPath)
// app.use(express.static(buildPath));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

//-------------------------------------------------------------------------
const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
//change cors before hosting
