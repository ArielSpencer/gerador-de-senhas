document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyToClipboard);

function generatePassword() {
  const includeLetters = document.getElementById("includeLetters").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  const passwordLength = parseInt(document.getElementById("passwordLength").value, 10);

  if (!includeLetters && !includeNumbers && !includeSymbols) {
    alert("Selecione pelo menos uma opção (letras, números ou caracteres especiais)!");
    return;
  }

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/";

  let characterPool = "";
  if (includeLetters) characterPool += letters;
  if (includeNumbers) characterPool += numbers;
  if (includeSymbols) characterPool += symbols;

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  document.getElementById("passwordOutput").value = password;
}

function copyToClipboard() {
  const passwordField = document.getElementById("passwordOutput");
  if (passwordField.value === "") {
    alert("Gere uma senha antes de copiá-la!");
    return;
  }

  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // Para dispositivos móveis
  navigator.clipboard.writeText(passwordField.value)
    .then(() => alert("Senha copiada!"))
    .catch(() => alert("Falha ao copiar a senha."));
}