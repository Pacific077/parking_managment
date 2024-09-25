import mongoose from "mongoose";

const ParkingSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    pinCode: {
      type: Number,
      required: true,
    },
    carCapacityPerRow:{
      type:Number,
    },
    BikeCapacityPerRow:{
      type:Number,
    },
    totalCarRows:{
      type:Number,
    },
    totalBikeRows:{
      type:Number,
    },

    parkingImages: [
      {
        type: String,
      },
    ],
    FourWheelerCapcity:{
        type: Number,
    },
TwoWheelerCapcity:{
        type: Number,
    },
    TwoWheelerFilled:[
      {
        index: { type: Number },
        bookedAt: { type: Date, default: Date.now },
        bookedUntil: { type: Date }
    },
    ],
    FourWheelerFilled:[
      {
        index: { type: Number },
        bookedAt: { type: Date, default: Date.now },
        bookedUntil: { type: Date }
    },
    ],
    PricecarPerHour:{
        type:Number
    },
    PriceBikePerHour:{
        type:Number
    },
    address: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    ratingCount: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

ParkingSchema.index({ location: "2dsphere" });



const Parkings = mongoose.model("Parkings", ParkingSchema);


export default Parkings;
