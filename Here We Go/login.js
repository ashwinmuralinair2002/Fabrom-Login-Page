function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "ashwin007" && password === "007ashwin") {
    localStorage.setItem("isLoggedIn", "true");
    
    // Replace login page in history so back won't return here
    location.replace("index.html"); 
  } else {
    document.getElementById("error-msg").style.display = "block";
  }
}
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
}




