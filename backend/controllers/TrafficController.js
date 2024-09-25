import Traffic from "../Models/TrafficModel";

const RegisterTrafficPoint= async (req, res) => {
  try {
    const {
      Name,
      latitude,
      longitude,
      videopath,
      pincode,
      length
    } = req.body;

    const location = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    // Create a new business object using the schema
    const newTrafficStreet = new Traffic({
        Name,
        latitude,
        longitude,
        videopath,
        pincode,
        length
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
const FindallTrafficStatus = async (req,res)=>{
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
          $maxDistance: 10000000,
        },
      },
    };
    const nearbyStreets = await Traffic.find(baseQuery)
    res.status(200).json({ businesses: nearbyStreets });
  } catch (error) {
    console.error("Error finding nearby streets:", error);
    res.status(500).json({ message: error.message });
  }
}
const FindTrafficBasedOnStreet =async (req,res)=>{
  try {
    const {id} =req.query;

    const traffic = await Traffic.findById(id);
    if(!traffic){
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

export {RegisterTrafficPoint,FindallTrafficStatus,FindTrafficBasedOnStreet};
