const Message = require('../models/message');


// get the messages from the database
getAllMessages = async (req, res, next) => {
    try {
        let messages = await Message.find({});
        res.render('messages/index', {
            messages:messages
        })
        
    } catch (err) {
        console.log(err)
        res.status(500)
    } 
}

// add new message to the database
postMessage = async (req, res, next) => {
    try {
        let newMessage = new Message()
        newMessage.details = req.body

        newMessage.save((error)=>{
            if (error) {
                alert(error.message)
            } else {
                res.redirect('/')
            }
        })
    } catch (error){
        console.log(error.message)
        res.status(500)
    }
}

// gets message from the database from the unqiue identifier
getTheMessage = async (req, res, next) => {
    try {
        let id = req.params.identifier;
        let msg = await Message.findOneAndDelete({identifier:id})
        res.render('messages/detail', {
            msg: message
          });
    } catch (error) {
        console.log(error.message)
        res.status(500)
      }
}


module.exports= {
    getAllMessages,
    getTheMessage,
    postMessage
}