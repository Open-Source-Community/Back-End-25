const express = require("express")
const fs = require("fs");
const { stringify } = require("querystring");
const data = fs.readFileSync("./OSC-System.json",'utf8',(e,data)=>{
    if(e)
        console.error(e);
    else 
        return data
})
let sData = JSON.parse(data)
console.log(sData.Committees.Technical)

const app = express()
app.use(express.json())
const PORT = 3000
const put = async (req,res)=>{
    const {CommitteeType,Committee,name} = req.body
    if(!sData.Committees.hasOwnProperty(CommitteeType))
        return res.status("404").send({
            status:404,
            error: "wrong committee type!"
        })
    if(!sData.Committees[CommitteeType].includes(Committee))
        return res.status("404").send({
            status:404,
            error: "committee is not found!",
            available_committees:sData.Committees[CommitteeType]
        })
    sData.Highboard.Heads[CommitteeType][Committee] = name
    res.status(203).send({
        status:203,
        data:sData.Highboard.Heads[CommitteeType] 
    })
}
app.put("/",put)
app.post("/",(req,res)=>{
    const {CommitteeType,Committee,name} = req.body
    if(sData.Committees.hasOwnProperty(CommitteeType)){
        if(sData.Committees[CommitteeType].includes(Committee)){
            put(req,res)
        }
        sData.Committees[CommitteeType].push(Committee);
        sData.Highboard.Heads[CommitteeType][Committee] = name;
        res.send(sData.Highboard.Heads)

    }
})
app.get("/",(req,res)=>{
    const q = req.query.filter
    console.log(q);
    if(q == 'Committees')
    return res.send({
        status:200,
        data:sData.Committees
    })    
    if(q == 'Heads'){
        return res.status(200).send({
            status:200,
            data:sData.Highboard.Heads
        })
    }
    if(q == 'Highboard'){
        return res.status(200).send({
            status:200,
            data:sData.Highboard
        })
    }
    return res.send({
        status:200,
        data:sData
    })
})
app.delete("/",(req,res)=>{
    sData = []
    res.send({
        data:sData,
        results:"data deleted successfully"
    })
})
app.listen(PORT,()=>console.log(`Server is listening on PORT ${PORT}`))