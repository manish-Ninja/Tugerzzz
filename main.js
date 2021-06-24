
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
  function logOut()
  {
    window.location = "index.html";
    localStorage.removeItem("user_chat");
  }
  user_name = localStorage.getItem("user_chat");
  document.getElementById("user_name").innerHTML = "Bonjour " + user_name + "!!!"
  function addRoom()
  {
    user_name_VAR = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name_VAR).update({
        purpose:"Adding user"
    });
    window.location = "kwitter_main_page.html";
  }
function redirectToRoomName(name) 
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_main_page.html";
}
  function getData() {
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr style='width:100%'>";
document.getElementById("output").innerHTML += row; 
//End code
 });});}
getData();