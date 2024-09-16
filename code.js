async function gerarFakeUser() {
  var inputRadio = document.getElementsByTagName("input");
  // var fakeuser = document.querySelector(".fakeuser");
  var allFakeUsers = document.querySelector(".allFakeUsers");
  var inputSelect = document.querySelector("select");
  var gender = "";

  for (i = 0; i < inputRadio.length; i++) {
    if (inputRadio[i].checked) {
      gender = inputRadio[i].value;
    }
  }

  var resposta = await fetch(
    "https://randomuser.me/api/?results=" +
      inputSelect.value +
      "&gender=" +
      gender
  );

  var dados = await resposta.json();

  console.log(dados.results[0]);
  // var user = dados.results[0];
  var allUsers = dados.results;

  allFakeUsers.innerHTML = "";

  for (i = 0; i < allUsers.length; i++) {
    var fakeuser = document.createElement("div");
    fakeuser.classList.add("fakeuser");

    let user = allUsers[i];

    fakeuser.innerHTML = `
      <div>
        <img src="${user.picture.large}" id="img" />
      </div>
      <div class="dados">
        <p><b>Nome:</b> <span>${
          user.name.first + " " + user.name.last
        }</span></p>
        <p><b>Email:</b> <span>${user.email}</span></p>
        <p><b>Nascimento:</b> <span>${user.dob.age}</span></p>
        <p><b>Endereço:</b> <span>${user.location.city}</span></p>
        <p><b>Telefone:</b> <span>${user.phone}</span></p>
      </div>
    `;

    allFakeUsers.appendChild(fakeuser);
  }

  // var img = document.getElementById("img");
  // var nome = document.getElementById("nome");
  // var email = document.getElementById("email");
  // var idade = document.getElementById("idade");
  // var endereco = document.getElementById("endereco");
  // var telefone = document.getElementById("telefone");

  // img.src = user.picture.large;
  // nome.innerHTML = user.name.first + " " + user.name.last;
  // email.innerHTML = user.email;
  // idade.innerHTML = user.dob.age;
  // endereco.innerHTML = user.location.city;
  // telefone.innerHTML = user.phone;

  // fakeuser.style.visibility = "visible";
}
