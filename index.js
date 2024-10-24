import express from "express"
import {Filter} from "bad-words"

const PORT= 3000;
const app = express();


app.use(express.json())


app.post('/filter',(req,res)=>{
    const filter= new Filter();
    // en es punto filtar el comentario a ingles
    //pasa el comentario en ingles al metodo isProfane
    console.log(filter.isProfane(req.body.text));
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})