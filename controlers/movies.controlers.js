const { update } = require('../chema/movie')
const movie = require('../chema/movie')
const Movie =require ('../chema/movie')

module.exports.HELLO =(req,res)=> {
    res.send('hello word')
}
module.exports.SEND_DATA =(req,res)=>{
    console.log (req.body)
    res.send('ok')
}
module.exports.ADD_MOVIE= (req,res)=> {
    console.log(req.body)
    const movie =new Movie(req.body)
    movie.save()
    .then (ok=> {res.send('ok')})
    .catch(err => {
        console.log(err)
        res.send('Not OK')
    })

}
module.exports.ALL_MOVIES= (req,res)=>{
    movie.find ()
    .then(movies=>
         { res.send (movies)
     })
     .catch (err=>{
         res.send('NOT OK')
     })


}
module.exports.EDIT_MOVIE =(req,res) => {
    console.log(req.body)
    const id = req.body._id
    Movie.findByIdAndUpdate(id, {
        title: req.body.title,
        description: req.body.description,
        rating:req.body.rating,
        poster:req.body.poster
    })
    .then(ok=> {res.send('ok')})
    .catch (err=> {res.send('not ok')})
}
module.exports.DELETE_MOVIE = (req,res) => {
    const id = req.body._id
    if(!id) return res.send('NO ID')
    Movie.findByIdAndDelete(id)
    .then(ok=> {
        res.send('ok')
})
    .catch (err=> {
        res.send('not ok')
})

}