const bnt = document.getElementById("btn");

bnt.addEventListener("click", function () {
  cadastrar();
  mostrarElementos();
});

//Função para o botão principal
function cadastrar() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const linguagem = document.getElementById("linguagem").value;

  if (nome, idade, linguagem == "") {
    alert("Você dever preencher todos os campos para continuar!");
  } else {
    document.getElementById("mensagem").innerHTML = `Olá ${nome}! <br> Você tem ${idade} anos e está aprendendo ${linguagem}.`;

    document.getElementById("pergunta").innerHTML =
      `<label>Você está gostando de aprender ${linguagem}?</label>
      <div class="resposta__botao">
      <button id="btn__resposta__sim" class="formulario__botao resposta__botao" type="submit" >Sim</button>
      <button id="btn__resposta__nao" class="formulario__botao resposta__botao" type="submit" >Não</button>
      </div>`;
  }
};

//Resposta para o botão Sim
function sim() {
  mostrarAviso()
  document.getElementById("resposta").innerHTML =
    "<h2>Muito bom! <br> Continue estudando e você terá muito sucesso!</h2>";
};

//Resposta para o botão Não
function nao() {
  mostrarAviso()
  document.getElementById("resposta").innerHTML =
    "<h2>Ahh que pena... <br> Já tentou aprender outras linguagens?</h2>";
};

//Mostrar elementos com o atributo hide
function mostrarElementos() {
  document.getElementById("aparecer").classList.remove("hide");

  let btnSim = "";
  let btnNao = "";

  function btnRespostaSim() {
    btnSim = document.getElementById("btn__resposta__sim");
    btnSim.addEventListener("click", function () {
      sim();
    });
  };

  function btnRespostaNao() {
    btnNao = document.getElementById("btn__resposta__nao");
    btnNao.addEventListener("click", function () {
      nao();
    });
  };

  btnRespostaSim();
  btnRespostaNao();
}

function mostrarAviso() {
  document.getElementById("resposta").classList.remove("resposta__sim__nao__hide");
}