const firebaseConfig = {
  apiKey: "AIzaSyDQ6nGRq29lbAG_FiiSXbd1XozrnD2pcag",
  authDomain: "quiz-app-99268.firebaseapp.com",
  projectId: "quiz-app-99268",
  storageBucket: "quiz-app-99268.firebasestorage.app",
  messagingSenderId: "540083674301",
  appId: "1:540083674301:web:799343ec2850f2e0efebd4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//console.log(app);


  
  
  
  function login() {
  
    var email = document.getElementById("Email")
    var password = document.getElementById("Password")
  
  
    console.log(email.value);
    console.log(password.value);
  
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      window.location.href="./Quiz/quizindex.html"
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      
    });
  }
  
  
  
  
  