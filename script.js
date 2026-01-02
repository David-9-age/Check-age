// JavaScript validation for login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const message = document.getElementById("message");

  // Validate name
  if (name === "") {
    message.textContent = "Please enter your name.";
    message.style.color = "red";
    return;
  }

  // Validate age
  if (isNaN(age)) {
    message.textContent = "Please enter a valid age.";
    message.style.color = "red";
    return;
  }

  // Age check
  if (age >= 18) {
    message.textContent = `✅ Welcome, ${name}! You are eligible to log in.`;
    message.style.color = "green";
  } else {
    message.textContent = `❌ Sorry, ${name}. You must be at least 18 years old.`;
    message.style.color = "red";
  }
});
