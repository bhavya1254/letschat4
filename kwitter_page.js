//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBv4LMPjT3NNcIqzmr5yv1O_ZtGtH6f5qg",
      authDomain: "kwitter1-7d612.firebaseapp.com",
      databaseURL: "https://kwitter1-7d612-default-rtdb.firebaseio.com",
      projectId: "kwitter1-7d612",
      storageBucket: "kwitter1-7d612.appspot.com",
      messagingSenderId: "237039145410",
      appId: "1:237039145410:web:5fa3f04446e9d5e64f865b"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}











function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
