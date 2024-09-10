document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Взимаме стойностите от полетата за потребителско име и парола
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Примерна логика за успешен вход (може да бъде заменена с реална верификация)
  if (username === 'user' && password === 'password') {
      // Пренасочване към mainmenu.html след успешен вход
      window.location.href = "mainmenu.html";
  } else {
      alert('Invalid credentials. Please try again.');
  }
});
