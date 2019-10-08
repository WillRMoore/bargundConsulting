function validateName(name) {
  if (name == '') {
    return false;
  }
  return true;
}

function submitContactForm() {
  var name = document.querySelector('.contact-name').value;
  var email = document.querySelector('.contact-email').value;
  var message = document.querySelector('.contact-message').value;
  var error = document.querySelector('.contact-form-error');

  console.log('name:', name);
  console.log('email:', email);
  console.log('message:', message);

  if (name != '' && email != '' && message != '') {
    // no error occured
    console.log('form submitted');
    console.log('error :', error);
    if (!document.querySelector('.contact-form-error').classList.contains('contact-hide-error')) {
      error.classList.add('contact-hide-error');
    }
    document.querySelector('.contact-us-real-button').click();
  } else {
    // error occured
    console.log('Error: All fields must be filled out.');
    console.log('error :', error);
    if (document.querySelector('.contact-form-error').classList.contains('contact-hide-error')) {
      error.classList.remove('contact-hide-error');
    }
  }
}

function submitDiscoveryForm() {
  console.log('discovery form submitted');
  var name = document.querySelector('.discovery-form-name').value;
  var businessName = document.querySelector('.discovery-form-business-name').value;
  var email = document.querySelector('.discovery-form-email').value;
  var whatBroughtYou = document.querySelector('.discovery-form-what-brought-you').value;
  var topPriorities = document.querySelector('.discovery-form-top-priorities').value;
  var error = document.querySelector('.discovery-error');

  console.log('name:', name);
  console.log('businessName:', businessName);
  console.log('email:', email);
  console.log('whatBroughtYou:', whatBroughtYou);
  console.log('topPriorities:', topPriorities);

  if (name != '' && businessName != '' && email != '' && whatBroughtYou != '' && topPriorities != '') {
    // no error occured
    console.log('discovery form submitted');

    if (!error.classList.contains('discovery-hide-error')) {
      error.classList.add('discovery-hide-error');
    }
    document.querySelector(".discovery-real-button").click();
  } else {
    // error occured
    console.log('Error: All fields must be filled out.');
    if (error.classList.contains('discovery-hide-error')) {
      error.classList.remove('discovery-hide-error');
    }
  }

}


function closeStickyDiscovery() {
  var sticky = document.querySelector('.discovery-sticky');

  sticky.classList.remove('make-sticky');
  console.log('sticky discovery closed');
}


// check to see if there is a element fixed to the bottom of the page. If there is, remove the .normal-footer-padding class from the footer, and replace it with the .footer-with-fixed-message class.


// Selects the package plan in the 'select' form input.
function setPackage(package) {
  var packageSelected = document.querySelector('#package-plan');

  console.log(package, "package selected");

  packageSelected.value = package;
}


// Open and close off-canvas menu
function closeMenu() {
  var menu = document.querySelector('.slide-menu-container');
  var overlay = document.querySelector('.slide-menu-overlay');

  menu.classList.add('close-menu');
  overlay.classList.add('hide-overlay');
  console.log('menu closed');
}

function toggleMenu() {
  var menu = document.querySelector('.slide-menu-container');
  var overlay = document.querySelector('.slide-menu-overlay');

  menu.classList.toggle('close-menu');
  overlay.classList.toggle('hide-overlay');

  console.log('menu toggled');
}


function submitMaintenanceForm() {
  console.log('discovery form submitted');
  var name = document.querySelector('.maintenance-form-name').value;
  var businessName = document.querySelector('.maintenance-form-business-name').value;
  var email = document.querySelector('.maintenance-form-email').value;
  var questions = document.querySelector('.maintenance-form-questions').value;
  var error = document.querySelector('.maintenance-error');

  console.log('name:', name);
  console.log('businessName:', businessName);
  console.log('email:', email);
  console.log('whatBroughtYou:', questions);

  if (name != '' && businessName != '' && email != '' && questions != '') {
    // no error occured
    console.log('discovery form submitted');

    if (!error.classList.contains('discovery-hide-error')) {
      error.classList.add('discovery-hide-error');
    }
    document.querySelector("#maintenance-real-button").click();
  } else {
    // error occured
    console.log('Error: All fields must be filled out.');
    if (error.classList.contains('discovery-hide-error')) {
      error.classList.remove('discovery-hide-error');
    }
  }

}