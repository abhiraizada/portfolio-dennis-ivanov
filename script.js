console.log("work");

let theme = localStorage.getItem("theme");
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}
let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("event : ,", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  } else {
    document.getElementById("theme-style").href = "blue.css";
  }
  localStorage.setItem("theme", mode);
}

 let from = 'contactraizada@gmail.com'
//  let to  = 'abhimanyu.raizada@tothenew.com'
 let to  = 'abhi.raizada21@gmail.com'
 let password = 'xrsefbshqsdzmlej'
 function sendEmail(name, subject, email, message) {
   console.log('trying to send mail',`Hey Raizada!,<br> You have a query from <br> Name: ${name}, Subject: ${subject}, email: ${email}, message:${message}`)
  Email.send({
    Host: "smtp.gmail.com",
    Username: from,
    Password: password,
    To: to,
    From: from,
    Subject: "YOU HAVE A QUERY!!!",
    Body: `Hey Raizada!,<br> You have a query from <br> Name: ${name}, Subject: ${subject}, email: ${email}, message:${message}`,
  })
    .then(function (message) {
      // console.log('message',message)
      alert("mail sent successfully")
    })
    .catch(function(err){
      console.log('error in sending mail , ',err)
    })
}
// sendEmail()

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.getElementById("name").value;
  console.log('name',name)
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  console.log(name, email, message);

  sendEmail(name, subject, email, message);

  document.querySelector(".contact-form").reset();
}
