import Parkings from "../Models/ParkingModel.js";

const RegisterParkingArea = async (req, res) => {
  try {
    const {
      Name,
      pinCode,
      parkingImages,
      FourWheelerCapcity,
      TwoWheelerCapcity,
      TwoWheelerFilled,
      FourWheelerFilled,
      PricecarPerHour,
      PriceBikePerHour,
      address,
      district,
      state,
      latitude,
      longitude,
      totalBikeRows,
      totalCarRows,
      BikeCapacityPerRow,
      carCapacityPerRow
    } = req.body;

    const location = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    // Create a new business object using the schema
    const newParkingArea = new Parkings({
      Name,
      pinCode,
      parkingImages,
      FourWheelerCapcity,
      TwoWheelerCapcity,
      TwoWheelerFilled,
      FourWheelerFilled,
      PricecarPerHour,
      PriceBikePerHour,
      address,
      district,
      state,
      location,
      totalBikeRows,
      totalCarRows,
      BikeCapacityPerRow,
      carCapacityPerRow
    });
    await newParkingArea.save();

    res
      .status(201)
      .json({
        message: "Parking area registered successfully",
        data: newParkingArea,
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const FindallParkingAreas = async (req,res)=>{
  try {
    const { district, latitude, longitude } = req.body;
    if (!district || !latitude || !longitude) {
      return res
        .status(400)
        .json({ message: "Required parameters are missing" });
    }

    const baseQuery = {
      district: district,
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: 20000,
        },
      },
    };
    const nearbyparkings = await Parkings.find(baseQuery)
    res.status(200).json({ businesses: nearbyparkings });
  } catch (error) {
    console.error("Error finding nearby parkings:", error);
    res.status(500).json({ message: error.message });
  }
}
const FindParkingareasbyId =async (req,res)=>{
  console.log("i ma her")
  try {
    const {id} =req.query;

    const parkings = await Parkings.findById(id);
    if(!parkings){
      res.status(400).json({
        message:"No Parking available"
      })
    }
    res.status(200).json({
      parkings
    })
    
  } catch (error) {
    res.status(400).json({
      message:error.message
    })
    
  }
}
const Bookparking = async (req, res) => {
  try {
    const { index, startTime, endTime ,id} = req.body; 

    const parkingSpace = await Parkings.findById(id); 
    if (!parkingSpace) {
      return res.status(404).json({ message: "Parking space not found" });
    }
    if (parkingSpace.FourWheelerFilled.some(item => item.index === index)) {
      return res.status(400).json({ message: "Parking space is already booked" });
    }

    parkingSpace.FourWheelerFilled.push({ index, bookedAt: startTime, bookedUntil: endTime });
    await parkingSpace.save();

    res.status(200).json({ message: "Parking space booked successfully", parkingSpace });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { RegisterParkingArea,FindallParkingAreas,FindParkingareasbyId ,Bookparking};
