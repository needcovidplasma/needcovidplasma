var firebaseConfig = {
  apiKey: "AIzaSyC4E5MjaQmSe9wxWfBUBtha7aR7DUYbQ1c",
  authDomain: "needcovidplasma-data.firebaseapp.com",
  databaseURL: "https://needcovidplasma-data.firebaseio.com",
  projectId: "needcovidplasma-data",
  storageBucket: "needcovidplasma-data.appspot.com",
  messagingSenderId: "866919410680",
  appId: "1:866919410680:web:9e64b94372fa2dc1a1840d",
  measurementId: "G-GBLSQ8B5CW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  // Reference messages collection
  var messagesRef = firebase.database().ref('tweets');
  
  // Listen for form submit
  document.getElementById('contactForm_contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    
    var tweetmessage = getInputVal('tweet');
    
  
    // Save message
    saveMessage(tweetmessage);
  
    // Show alert
    document.querySelector('.contactForm_alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.contactForm_alert').style.display = 'none';
    },3000);
  
    //Redirecting you to the main page
    // location.replace("https://www.w3schools.com")
    // Clear form
    document.getElementById('contactForm_contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(tweetmessage){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      type:"Tweetmessage",
      tweetstatus:"0",
      message:tweetmessage
    });

    // volunteer_mail_Sending(name,email);

    console.log("tweeted")

  }
