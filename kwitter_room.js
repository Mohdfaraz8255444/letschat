var firebaseConfig = {
      apiKey: "AIzaSyDxJDecGEsjB1BXVSvkqGjWol6VWpL6cAE",
      authDomain: "fir-7d6aa.firebaseapp.com",
      projectId: "fir-7d6aa",
      storageBucket: "fir-7d6aa.appspot.com",
      messagingSenderId: "9553481765",
      appId: "1:9553481765:web:53275152f0e54e98a0afcc",
      measurementId: "G-TDYKM3WHDH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome  : "+user_name;
function add_room(){
      room_name=document.getElementById("Room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' ># "+Room_names+"</div></hr>";   
      document.getElementById("output").innerHTML+=row;
      });
      });
}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="login_page.html";
     

}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="login_page.html";



}




