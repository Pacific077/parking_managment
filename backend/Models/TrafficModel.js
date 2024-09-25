import mongoose from "mongoose";

const TrafficSchema=mongoose.Schema({

Name: { type: String, required: true },
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
  videoPath: { type: String, required: true },

Condition:{type:Number},
pinCode: {
    type: Number,
    required: true,
  },
  length:{type:Number,required:true}
});
TrafficSchema.index({ location: "2dsphere" });
const Traffic=mongoose.model("Traffic",TrafficSchema);

export default Traffic;