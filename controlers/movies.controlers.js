module.exports.HELLO =(req,res)=> {
    res.send('hello word')
}
module.exports.SEND_DATA =(req,res)=>{
    console.log (req.body)
    res.send('ok')
}