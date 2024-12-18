document.addEventListener("DOMContentLoaded", function() {
    var nomeSalvo = localStorage.getItem("nome");
    var passatempoSalvo = localStorage.getItem("passatempo");
    var perfilMsg = document.getElementById("msg");

    if (nomeSalvo) {
        perfilMsg.textContent = `${nomeSalvo}, veja as opções para o seu perfil`;
    }

    var carros = {
        cidade: [
            {img: "civic.jpg", info: {fabricante: "Honda", nome: "Civic", potencia: "150 cv", garantia: "3 anos", consumo: "9,7 km/l"}},
            {img: "corolla.jpg", info: {fabricante: "Toyota", nome: "Corolla", potencia: "144 cv", garantia: "3 anos", consumo: "10,6 km/l"}}
        ],
        natureza: [
            {img: "troller.jpg", info: {fabricante: "Ford", nome: "Troller", potencia: "200 cv", garantia: "3 anos", consumo: "7,7 km/l"}},
            {img: "wrangler.jpg", info: {fabricante: "Jeep", nome: "Wrangler", potencia: "199 cv", garantia: "2 anos", consumo: "3,1 km/l"}}
        ]
    };

    var vetCarros = carros[passatempoSalvo] || [];
    var slideAtual = 0;
    var slideShow = document.getElementById("slideShow");

    function atualizarInfosCarro(carro) {
        document.getElementById("fabricante").textContent = `Fabricante: ${carro.fabricante}`;
        document.getElementById("nome").textContent = `Nome: ${carro.nome}`;
        document.getElementById("potencia").textContent = `Potência do motor: ${carro.potencia}`;
        document.getElementById("garantia").textContent = `Garantia: ${carro.garantia}`;
        document.getElementById("consumo").textContent = `Consumo (cidade): ${carro.consumo}`;
    }
    
    function mostrarImg() {
        slideShow.src = `img/${vetCarros[slideAtual].img}`;
        atualizarInfosCarro(vetCarros[slideAtual].info);
        slideAtual = (slideAtual + 1) % vetCarros.length;
    }

    document.getElementById("mudarPerfil").addEventListener("click", function() {
        window.location.href = "index.html";
    });

    mostrarImg();
    var idCron = setInterval(mostrarImg, 2000);

    slideShow.addEventListener("mouseenter", function () {
        clearInterval(idCron);
    });

    slideShow.addEventListener("mouseleave", function () {
        idCron = setInterval(mostrarImg, 2000);
    });
});