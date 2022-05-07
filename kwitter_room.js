const firebaseConfig = {
      apiKey: "AIzaSyDQkDdXFzm1x0huHFoTrzAB6j0zuIexOhM",
      authDomain: "kwitter-a5307.firebaseapp.com",
      databaseURL: "https://kwitter-a5307-default-rtdb.firebaseio.com",
      projectId: "kwitter-a5307",
      storageBucket: "kwitter-a5307.appspot.com",
      messagingSenderId: "609684442471",
      appId: "1:609684442471:web:ade9794977b114c1cfb3c2",
      measurementId: "G-ER6PF8GQ6L"
    };
firebase.initializeApp(config) ;
user_name = localStorage.getItem("user_name")    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
