const express = require('express')
const app = express()
const connect = require('./config/database')
const PORT = 3000
const Tweet = require('./models/tweet')

const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comment')
const tweeto = new TweetRepository()
const startAndSetupServer =async () =>{

    app.listen(PORT, async ()=>{
        console.log('Server started on ',PORT)
        await connect()
        console.log('Mongo connected')
        /*
        const tweet = await Tweet.create({
            content:'Hello ritesh,how are you',
            userEmail:'ritesh2000.sinha@outlook.com' 
        })*/
        /*
        const res = await tweeto.create({
            content:'Hello comment ka baap',
            userEmail:'ritesh2000.sinha@outlook.com'
        })/
        //const res = await tweeto.destroy('63e13a1a94a9639a856703c4')
        /*const res = await tweeto.update(
            '63e12f4d1bca2524f52ed7c0',
            {content:'bye tweet'}
        )*/
        //const comment = await Comment.create({content:"Hello there from coomet"})
        //res.comments.push(comment)
        //await res.save()
        const res = await tweeto.get('63e293b8548cea253eaff31a')
        console.log(res)
    })

}
startAndSetupServer()