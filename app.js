const express =require("express");

const router = express.Router();
const app =express();
app.use(express.json());
app.use(router);

const publisher =require("./publisher")

router.post("/create",async(req,res)=>{
    const {email}= req.body;
    //db ye kayıt
    //başka işlemler
await publisher({email,date:Date.now()})
res.send("Mail gitti")
  

})


app.listen(5000,()=>{
   
})
