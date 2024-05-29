document.getElementById('email-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    alert('Welcome to the team!');
  } else {
    alert('Email is invalid');
  }
});
