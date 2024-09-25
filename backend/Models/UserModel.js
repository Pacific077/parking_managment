import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    contact:{type:Number,unique:true},
    password: { type: String, required: true },
    ratedParkings: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Bussiness" },
    ],
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
