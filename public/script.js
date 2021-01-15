  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCpPECaIbxjutnPE1EaCKNx8PCHNo0_Pm8",
//     authDomain: "bruce-no-middle-name-tieu.firebaseapp.com",
//     projectId: "bruce-no-middle-name-tieu",
//     storageBucket: "bruce-no-middle-name-tieu.appspot.com",
//     messagingSenderId: "804306288174",
//     appId: "1:804306288174:web:98ef58b4cbfd04488729bf",
//     measurementId: "G-HSE803YRRD"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// //   firebase.analytics();


//   // Reference contactInfo collections
//   let contactInfo = firebase.database().ref("infos");



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCpPECaIbxjutnPE1EaCKNx8PCHNo0_Pm8",
    authDomain: "bruce-no-middle-name-tieu.firebaseapp.com",
    projectId: "bruce-no-middle-name-tieu",
    storageBucket: "bruce-no-middle-name-tieu.appspot.com",
    messagingSenderId: "804306288174",
    appId: "1:804306288174:web:98ef58b4cbfd04488729bf",
    measurementId: "G-HSE803YRRD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
  let contactInfo = firebase.database().ref("infos");

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0})
    });

    // Typing animation
    var typed = new Typed(".typing", {
        strings: ["aspiring software engineer", "life long learner", "problem solver", "technology enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });

    var typed = new Typed(".typing-2", {
        strings: ["aspiring software engineer", "life long learner", "problem solver", "technology enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });


    // Toggle the menu / navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoeverPause: true,
        responsive: {
            0:{
                items: 1,
                nav:false
            },
            600:{
                items: 2,
                nav:false
            },
            1000:{
                items: 3,
                nav:false
            }
            
        }
    });

})

// Firebase setup
document.querySelector('.contact-form').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log(123)

    // Get input values.
    let name = document.querySelector('._name').value;
    let email = document.querySelector('._email').value;
    let subject = document.querySelector('._subject').value;
    let message = document.querySelector('._message').value;

    console.log(name, email, subject, message);

    saveContactInfo(name, email, subject, message);
    
    // Show alert
    document.querySelector('.alert').style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = "none";
    }, 3000)

    // Reset fields
    document.querySelector('.contact-form').reset()
}

// Save infos to Firebase.
function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}