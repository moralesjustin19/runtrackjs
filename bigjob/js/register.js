document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    const passwordError = document.getElementById("passwordError");
  
    if (!email.endsWith("@laplateforme.io")) {
        alert("Seules les adresses @laplateforme.io sont acceptées.");
        return;
    }
  
    if (password !== passwordConfirm) {
        passwordError.style.display = "block";
        return;
    } else {
        passwordError.style.display = "none";
    }
    
    alert("Inscription réussie !");
    window.location.href = "login.html";
  });
  