import express ,  {type Request, type Response}  from 'express';

  

const app = express(); // app setup  -> 1st step
//middleware Create CORS -> 2nd step
//middle Ware For Request and Response By convert json
//middle ware for uploading file, image for allowing In Our Website
//



//!Request Handler Function
app.get("/", (req: Request , res : Response)=>{

    res.send({message : "Hello World!!"});
    
 });


export default app;