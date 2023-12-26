/*
    This code controls the hamburger side menu animation
*/

document.addEventListener('DOMContentLoaded', function () {
    var toggleMenu = document.querySelector('.toggle-menu');
    var hamburger = document.querySelector('.hamburger');
    var sidebar = document.querySelector('.sidebar');

    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            // Hamburger to X animation
            hamburger.classList.add('open');
            // Show the sidebar
            sidebar.style.display = 'block';
        } else {
            // X to hamburger animation
            hamburger.classList.remove('open');
            // Hide the sidebar
            sidebar.style.display = 'none';
        }
    });

    // Add a click event listener to the hamburger icon for manual toggling
    hamburger.addEventListener('click', function () {
        toggleMenu.checked = !toggleMenu.checked;
        if (toggleMenu.checked) {
            // Hamburger to X animation
            hamburger.classList.add('open');
            // Show the sidebar
            sidebar.style.display = 'block';
        } else {
            // X to hamburger animation
            hamburger.classList.remove('open');
            // Hide the sidebar
            sidebar.style.display = 'none';
        }
    });
});

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