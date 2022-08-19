import express from  "express"

const app  = express()
const port = 6000

app.get(("/") , (req,res)=>{
    res.send("hello world");
})

app.listen(port , ()=>{
    // tslint:disable-next-line:no-console
    console.log(`app listening on http://localhost:${port}` );
})