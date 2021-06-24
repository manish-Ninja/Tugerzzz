// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNEP3oR4Pq64ByqcGAj82lFQkYAdHs0SA",
    authDomain: "mainone-7dbad.firebaseapp.com",
    databaseURL: "https://mainone-7dbad-default-rtdb.firebaseio.com",
    projectId: "mainone-7dbad",
    storageBucket: "mainone-7dbad.appspot.com",
    messagingSenderId: "883323135106",
    appId: "1:883323135106:web:ea25771ca510b6a549c09b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() 
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
      });
      document.getElementById("msg").value = "";
  }
  function getData() { 
    firebase.database().ref("/"+room_name).on('value', 
    function(snapshot) { 
          document.getElementById("output").innerHTML = ""; 
          snapshot.forEach(function(childSnapshot) { 
          childKey  = childSnapshot.key; childData = childSnapshot.val(); 
          if(childKey != "purpose") 
          {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();