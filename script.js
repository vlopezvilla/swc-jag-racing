/*
    This code controls the hamburger side menu animation
*/

/* Side Menu will be shown */
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')
      // Add show-icon to show and hide menu icon
      toggle.classList.toggle('show-icon')

  })
}

showMenu('nav-toggle','nav-menu')


/*
    This code will handle the contact page verification 
*/

//Function will check if user entered a valid email
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

//Function will check the length of the name 
function isValidName(name) {
  return name.length > 2;
}

//Function will check the length of the subject
function isValidSubject(subject) {
  return subject.length > 2;
}

function validateForm() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;

  if (!isValidEmail(email)) {
    displayErrorMessage("Invalid email address. Please enter a valid email.");
    return false;
  }

  if (!isValidName(name)) {
    displayErrorMessage("Please enter a valid name.");
    return false;
  }

  if (!isValidSubject(subject)) {
    displayErrorMessage("Please enter a valid subject.");
    return false;
  }

  // All required fields are valid
  clearErrorMessage();
  return true;
}

function displayErrorMessage(message) {
  var statusMessage = document.getElementById("statusMessage");
  statusMessage.textContent = message;
  statusMessage.style.color = "red";
}

function clearErrorMessage() {
  var statusMessage = document.getElementById("statusMessage");
  statusMessage.textContent = "";
}

// With the use of EmailJS we will send mail to the specified email
function sendEmail() {
  if (validateForm()) {

    // If all required fields are valid, send the email
    emailjs.init("NNeH935vhZZpBdqX_");
    emailjs.send("service_aamkl2j", "template_gwpzd6a", {

      //Specify the parameters that match the EmailJS template
        to: "vl1083809@swccd.edu",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        cellNum: document.getElementById("cellNum").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      })
      .then(
        function (response) {
          console.log("Email sent successfully", response);
          displaySuccessMessage("Email sent successfully!");
        },
        function (error) {
          console.log("Email failed to send", error);
          displayErrorMessage("Email failed to send. Please try again.");
        }
      );
  }
}

// Function to display a success message with specified content
function displaySuccessMessage(message) {
  var statusMessage = document.getElementById("statusMessage");
  statusMessage.textContent = message;
  statusMessage.style.color = "green";
}


//Accordion Menu in Sponosorship Page 
const accordionItems = document.querySelectorAll('.accordion__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')
        
        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
  
    const accordionContent = item.querySelector('.accordion__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}