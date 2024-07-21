function EmailSend(){
    const name = document.getElementById("name").value
    const userEmail = document.getElementById("email").value
    const message = document.getElementById("message").value
    const subject = document.getElementById("subject").value

    const formBody = `
    name : ${name} </br>
    email : ${userEmail} </br>
    message: ${message}
    `

    Email.send({
        // SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        Host: "smtp.elasticemail.com",
        Username: "ns1660200@gmail.com",
        Password: "61A4686AA6B1C5AA0D74986FEAA595D32FE8",
        To : 'ns1660200@gmail.com',
        From :  "ns1660200@gmail.com",
        // From :  document.getElementById("email").value,
        Subject : "Portfolio Enquery form : "`${subject}`,
        Body : formBody,
       
    }).then(
    message => alert(message)
    );
    }
    