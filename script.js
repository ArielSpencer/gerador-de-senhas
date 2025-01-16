document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyToClipboard);

function generatePassword() {
  const includeLetters = document.getElementById("includeLetters").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  const passwordLength = parseInt(document.getElementById("passwordLength").value, 10);

  if (passwordLength < 3 || passwordLength > 50) {
    alert("Por favor, insira um valor entre 3 e 50 para a quantidade de caracteres:");
    return;
  }

  if (!includeLetters && !includeNumbers && !includeSymbols) {
    alert("Selecione pelo menos uma opção (letras, números ou caracteres especiais)!");
    return;
  }

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/";

  let guaranteedCharacters = "";
  let remainingCharacters = "";
  let password = "";

  if (includeLetters) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    guaranteedCharacters += randomLetter;
    remainingCharacters += letters;
  }
  if (includeNumbers) {
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    guaranteedCharacters += randomNumber;
    remainingCharacters += numbers;
  }
  if (includeSymbols) {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    guaranteedCharacters += randomSymbol;
    remainingCharacters += symbols;
  }

  for (let i = guaranteedCharacters.length; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
    password += remainingCharacters[randomIndex];
  }

  password += guaranteedCharacters;
  password = shufflePassword(password);

  document.getElementById("passwordOutput").value = password;
}

function shufflePassword(password) {
  const array = password.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

function copyToClipboard() {
  const passwordField = document.getElementById("passwordOutput");
  if (passwordField.value === "") {
    alert("Gere uma senha antes de copiá-la!");
    return;
  }

  passwordField.select();
  passwordField.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordField.value)
    .then(() => alert("Senha copiada!"))
    .catch(() => alert("Falha ao copiar a senha."));
}