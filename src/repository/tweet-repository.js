const Tweet = require('../models/tweet')

class TweetRepository {
  

    async create(data){
        try {
            const response = await Tweet.create(data)
            return response
        } catch (error) {
            console.log(error)
        }
    }
    async update(tweetId,data){
        console.log(tweetId,data)
        try {
            const res = await Tweet.findByIdAndUpdate(tweetId,data,{new:true})
            return res
            
        } catch (error) {
            console.log(error)
        }
    }
    async destroy(tweetId){
        try {
            await Tweet.findByIdAndDelete(tweetId)
            return true
        } catch (error) {
            console.log(error)
        }
    }
    async get(tweetId){
        try {
            const response = await Tweet.findById(tweetId)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async getWithComments(tweetId){
        try {
            const response = await Tweet.findById(tweetId).populate({path:'comments'}).lean()
            return response
        } catch (error) {
            console.log(error)
        }
    }
    async getAll(offset,limit){
        try{
            const tweet = await Tweet.find().skip(offset).limit(limit)
            return tweet
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = TweetRepository