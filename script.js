document.getElementById("formContato").addEventListener("submit", e => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("mensagem").value.trim();
    const res = document.getElementById("res");

    if (!nome || !email || !msg) {
        alert("Preencha todos os campos!");
        return;
    }

    res.style.display = "block";
    res.innerHTML = `
        Obrigado, <strong>${nome}</strong>!<br>
        Sua mensagem foi enviada com sucesso.<br>
        Em breve entraremos em contato pelo e-mail <strong>${email}</strong>.
    `;

    document.getElementById("formContato").reset();
});
let itensCarrinho = 0;
let totalCompra = 0;

document.querySelectorAll(".btn-comprar").forEach(btn => {
    btn.addEventListener("click", (e) => {
        
        // Pega o nome e o valor do produto
        const textoProduto = e.target.parentElement.querySelector("p").innerText;

        // Extrair somente o valor (Ex: "Colar Dourado - R$ 45")
        const valor = Number(textoProduto.split("R$")[1].trim());

        // Adicionar contador
        itensCarrinho++;
        document.getElementById("contador").innerText = itensCarrinho;

        // Adicionar na lista do carrinho
        const lista = document.getElementById("lista-carrinho");
        const li = document.createElement("li");
        li.innerText = textoProduto;
        lista.appendChild(li);

        // SOMAR AO TOTAL
        totalCompra += valor;

        // Atualizar total no HTML
        document.getElementById("total").innerHTML =
            `<strong>Total: R$ ${totalCompra.toFixed(2)}</strong>`;
    });
});

// Abrir/fechar carrinho
document.getElementById("carrinho").addEventListener("click", () => {
    const caixa = document.getElementById("caixa-carrinho");
    caixa.style.display = caixa.style.display === "block" ? "none" : "block";
});
