document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyToClipboard);

function generatePassword() {
  const length = 10;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("passwordOutput").value = password;
}

function copyToClipboard() {
  const passwordField = document.getElementById("passwordOutput");
  passwordField.select();
  passwordField.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordField.value)
    .then(() => alert("Senha copiada!"))
    .catch(() => alert("Falha ao copiar a senha."));
}