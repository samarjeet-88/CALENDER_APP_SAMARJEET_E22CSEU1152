import { dayEvent } from "../models/dayevent.model.js";
import { Event } from "../models/event.model.js";

const addNewEvent = async (req, res) => {
  const { title, description,date } = req.body;
  console.log(date)
  try {
    const event = new Event({
      title: title,
      description: description,
    });
    const savedEvent = await event.save();


    let day = await dayEvent.findOne({ date: date });
    if (!day) {
      day = new dayEvent({
        date: date,
        allEvents: [savedEvent._id],
      });
    } else {
      day.allEvents.push(savedEvent._id);
    }
    await day.save();

    return res.json({ msg: "New event added successfully", event: event });
  } catch (error) {
    res.status(500).json({ msg: "Failed to add new event", error });
  }
};

const getSpecificEvents = async (req, res) => {
    const date = req.query.date
    
  try {
    const day = await dayEvent.findOne({date:date},{_id:0,date:0});
    
    if(!day){
        return res.status(200).json({msg:"You do not have any event on this day"})
    }
    const events=await Promise.all(day.allEvents.map(eventId=>Event.findById(eventId)))
    return res.status(200).json({ Events: events });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to fetch events", error });
  }
};

const getAllEvents=async(req,res)=>{
  try{
    const events=await Event.find()
    return res.status(200).json({Events:events})
  }catch(error){
    return res.status(500).json({msg:"Faile to fetch all events"})
  }
}

const updateEvents=async(req,res)=>{
    const {eventId}=req.body;
    const {title,description}=req.body
    try{
        const updateDate={}
        if(title!==undefined) updateDate.title=title;
        if(title!==undefined) updateDate.description=description;

        const updatedEvent=await Event.findByIdAndUpdate(
            eventId,
            updateDate,
            {new:true}
        );
        if(!updatedEvent){
            return res.status(404).json({msg:"Event not found"})
        }
        return res.status(200).json({ Event: updatedEvent });
    }catch(error){
        return res.status(500).json({msg:"Failed to update event",error})
    }
}

const deleteEvents=async(req,res)=>{
    const {eventId,date}=req.body;
    try{
        const deletedEvent=await Event.findByIdAndDelete(eventId);
        if(!deletedEvent){
            return res.status(404).json({msg:"Event not found"})
        }
        const updatedDay=await dayEvent.findOneAndUpdate(
            {date:date},
            {$pull:{allEvents:eventId}},
            {new:true}
        )
        console.log(updatedDay)
        if(updatedDay && updatedDay.allEvents.length===0){
            await dayEvent.deleteOne({_id:updatedDay._id})
        }
        return res.status(200).json({msg:"Event deleted successfully"})
    }catch(error){
        return res.status(500).json({msg:"Failed to delete event",error})
    }
}

export { addNewEvent ,getSpecificEvents,updateEvents,deleteEvents};
