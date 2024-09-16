async function gerarFakeUser() {
  var inputRadio = document.getElementsByTagName("input");
  var fakeuser = document.querySelector(".fakeuser");
  var gender = "";

  for (i = 0; i < inputRadio.length; i++) {
    if (inputRadio[i].checked) {
      gender = inputRadio[i].value;
    }
  }

  var resposta = await fetch(
    "https://randomuser.me/api/?results=1&gender=" + gender
  );

  var dados = await resposta.json();

  console.log(dados.results[0]);
  var user = dados.results[0];

  var img = document.getElementById("img");
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var idade = document.getElementById("idade");
  var endereco = document.getElementById("endereco");
  var telefone = document.getElementById("telefone");

  img.src = user.picture.large;
  nome.innerHTML = user.name.first + " " + user.name.last;
  email.innerHTML = user.email;
  idade.innerHTML = user.dob.age;
  endereco.innerHTML = user.location.city;
  telefone.innerHTML = user.phone;

  fakeuser.style.visibility = "visible";
}
