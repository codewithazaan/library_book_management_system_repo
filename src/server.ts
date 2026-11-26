import app from "./app";
const PORT = process.env.PORT ||4000;
const startServer = () =>{
try {
    app.listen(PORT, ()=>{
    console.log(`Server Is Listening on the port ${PORT}`)
})
} catch (error) {
    console.error("Failed To Fetch Server!!", error)
}
}
startServer();