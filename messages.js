

function loadMessages(conversationId, recieverId) {
    backendGetMessages(conversationId, function(result) {
      console.log(result)
      result.forEach(function(message) {
        let messageBox = document.createElement("P")
        messageBox.innerHTML = message.text
        document.querySelector("#list").appendChild(messageBox)
      })
      
      document.querySelector("#send").addEventListener("click", function(){
        send(conversationId, recieverId)
      })
      
    })
}




function send(conversationId, recieverId) {
  const text = document.querySelector("#text").value
  document.querySelector("#text").value = ""
  
  backendSendMessage(auth.currentUser.uid, recieverId, conversationId, text)
}