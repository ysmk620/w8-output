const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

document.addEventListener("DOMContentLoaded", () => {
  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  if (savedEmail) {
    emailInput.value = savedEmail;
  }
  if (savedPassword) {
    passwordInput.value = savedPassword;
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // フォームのデフォルトの送信を防ぐ

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email && password) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("ログイン情報を保存しました！");
  }
});
