
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCUmxGi3t6pJ9Sdqm5aDT0CQ31ud8qlN4w",
    authDomain: "kwitter-realtime-db.firebaseapp.com",
    databaseURL: "https://kwitter-realtime-db-default-rtdb.firebaseio.com",
    projectId: "kwitter-realtime-db",
    storageBucket: "kwitter-realtime-db.appspot.com",
    messagingSenderId: "562748409603",
    appId: "1:562748409603:web:68a560955c1f45905acb36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom() 
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding room name"
        });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
    }
  function getData() {
        
    firebase.database().ref("/").on('value', function(snapshot) 
    {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
    Room_names = childKey;
 console.log("Room_name:" + room_name);
 row = "<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row;     
});
});
}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}