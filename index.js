const app= require('./app')
const PORT=3000


// listen for requests
app.listen(PORT, (err)=>{
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});