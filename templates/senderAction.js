/* senderAction function will display a typing indicator in the conversation via the Send API. 
This is helpful for letting message recipients known you have seen and are processing their message */

const request = require('request');
module.exports = function senderAction(recipientId){

    request({
        url: "https://graph.facebook.com/v7.0/me/messages",
        qs:{ access_token: process.env.PAGE_ACCESS_TOKEN},
        method:"POST",
        json:{
            recipient:{id: recipientId},
            "sender_action":"typing_on"
        }
    },function(error,response,body){
        if (error){
            console.log("Error sending message:" + response.error);
        }
    });
}