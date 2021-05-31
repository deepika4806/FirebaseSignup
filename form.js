
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAOTrX4QfVMKJxriuduGkdXXNVUPIqkWj8",
    authDomain: "form-c902c.firebaseapp.com",
    projectId: "form-c902c",
    storageBucket: "form-c902c.appspot.com",
    messagingSenderId: "642392398364",
    appId: "1:642392398364:web:f619acce076a45e6a45dd9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
        alert("Signed In" + email.value);
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	
