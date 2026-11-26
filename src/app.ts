import express ,  {urlencoded, type Request, type Response}  from 'express';
import cors from "cors";

  

const app = express(); // app setup  -> 1st step
app.use(cors({origin: "http://localhost:4000" }))//middleware Create CORS -> 2nd step
app.use(express.json())//middle Ware For Request and Response By convert json
app.use(express.urlencoded({ extended: true }))//middle ware for uploading file, image for allowing In Our Website -> extended : true




//!Request Handler Function
app.get("/", (req: Request , res : Response)=>{

    res.send({message : "Hello World!!"});
    
 });


export default app;