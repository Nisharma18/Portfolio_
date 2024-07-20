function EmailSend(){
    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'nishasharmacon@gmail.com',
        From :  document.getElementById("email").value,
        Subject : "This is the subject",
        Body : document.getElementById("name").value +
               document.getElementById("email").value +
               document.getElementById("Subject").value +
               document.getElementById("text").value,
        Attachments : [
        {
            name : "smtpjs.png",
            path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
        }]
    }).then(
    message => alert(message)
    );
    }
    