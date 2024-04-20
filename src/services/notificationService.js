const axios = require('axios');

async function sendNotification(senderEmail, receiverEmail, value) {
    try {
     
      const response = await axios.post('https://run.mocky.io/v3/54dc2cf1-3add-45b5-b5a9-6bf7e7f1f4a6', {
        senderEmail,
        receiverEmail,
        value
      });
  
     
      if (response.status === 200) {
        console.log("Notification sent successfully.");
      } else {
        console.error("Error to send notification:", response.statusText);
      }
    } catch (error) {
      console.error("Error to send notification:", error.message);
      
      throw error;
    }
  }
  


  module.exports = { sendNotification };
