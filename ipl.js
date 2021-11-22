const firebaseConfig = {
    apiKey: "AIzaSyCh_lgRedjdhMjcqLwWdeakSFUvhDh_FfM",
    authDomain: "iplg-5a062.firebaseapp.com",
    databaseURL: "https://iplg-5a062-default-rtdb.firebaseio.com",
    projectId: "iplg-5a062",
    storageBucket: "iplg-5a062.appspot.com",
    messagingSenderId: "195411982425",
    appId: "1:195411982425:web:4e3a820dd1596f65d95948"
  };


  firebase.initializeApp(firebaseConfig);
 var UserInputsref = firebase.database().ref('user')
 document.getElementById('ipl') .addEventListener('submit',submitForm)



function submitForm(e){
  e.preventDefault();
  var ipl =getInputVal('year');
 
  

  
function getInputVal(id){
  return document.getElementById(id).value;
}
readResults(ipl)
}

function readResults(ipl){
  var ranks;
var  ref = firebase.database().ref(ipl);
ref.on('value',(data)=> {
var ranks = data.val();
document.getElementById(1).innerHTML ="<br> 1. " +ranks[1];
document.getElementById(2).innerHTML ="<br> 2. " +ranks[2];
document.getElementById(3).innerHTML ="<br> 3. " +ranks[3];
document.getElementById(4).innerHTML ="<br> 4. " +ranks[4];
document.getElementById(5).innerHTML ="<br> 5. " +ranks[5];
document.getElementById(6).innerHTML ="<br> 6. " +ranks[6];
document.getElementById(7).innerHTML ="<br> 7. " +ranks[7];
document.getElementById(8).innerHTML ="<br> 8. " +ranks[8];
}
)
}



