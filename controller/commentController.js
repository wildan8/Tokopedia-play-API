const mongoose = require('mongoose');
const comment = mongoose.model('Comment');

exports.getAllComment = async (req,res) =>{
    try {
        const comm = await comment.find({ thumbsID: req.params.thumbsID });
        res.json(comm);
    } catch (error) {
        res.status(500).json({message:'fail to GET comment data!', error:error})       
    }
}
exports.postComment = async (req,res) =>{
    const newComm = new comment(req.body);
    try {
        await newComm.save();
        res.json({message:'data POST success!'})
    } catch (error) {
        res.status(400).json({message:'fail to POST comment data!', error:error})       
    }
}