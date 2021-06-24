function addUser()
{
name_kwitter_for_project = document.getElementById("user_name").value;
 localStorage.setItem("user_chat", name_kwitter_for_project);
 window.location = "main.html";
}