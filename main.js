const input = document.getElementById('pass');
const divMessage = document.querySelector('div');
console.log(divMessage);

const passwords = ["user", "wiosna", "Ania"];
const messages = ["Wyjechalam na zawsze", "moja ulubiona pora roku", "moja znajoma"];

input.addEventListener('input', function(e) {
  divMessage.textContent = "";

  passwords.forEach((password, index) => {
    if (this.value === password) {
      divMessage.textContent = messages[index];
    }
  })
})

input.addEventListener("focus", (e) => {
  e.target.classList.add('active');
})

input.addEventListener("blur", (e) => {
  e.target.classList.remove('active');
})
