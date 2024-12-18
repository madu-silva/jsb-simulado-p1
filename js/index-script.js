var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var passatempo = document.getElementById("passatempo");
var btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function (event) {

    event.preventDefault();

    if ((nome.value).trim().length === 0)
        alert("Campo 'Nome' não pode ser vazio. Por favor, insira um valor válido."); 
    else if ((idade.value) < 1 || (idade.value) > 130)
        alert("Campo 'Idade' deve ser entre 1 e 130 anos. Por favor, insira um valor válido.");
    else if (!passatempo.value)
        alert("Campo referente ao passatempo não pode ser vazio. Por favor escolha uma opção válida.");
    else {
        localStorage.setItem("nome", nome.value);
        if (passatempo.value === "cidade") {
            localStorage.setItem("passatempo", "cidade");
        } else {
            localStorage.setItem("passatempo", "natureza");
        }
        localStorage.setItem("nome", nome.value);
        window.location.href = "aguarde.html";
    }
});

