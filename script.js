document.getElementById("form-orcamento").addEventListener("submit", function (e) {
  e.preventDefault();

  const cliente = document.getElementById("cliente").value;
  const servico = document.getElementById("servico").value;
  const peca = document.getElementById("peca").value;
  const valorPeca = parseFloat(document.getElementById("valorPeca").value);
  const valorMO = parseFloat(document.getElementById("valorMO").value);
  const total = valorPeca + valorMO;

  const resultado = `
    <h2>Resumo do Orçamento</h2>
    <p><strong>Cliente:</strong> ${cliente}</p>
    <p><strong>Serviço:</strong> ${servico}</p>
    <p><strong>Peça:</strong> ${peca}</p>
    <p><strong>Valor da Peça:</strong> R$ ${valorPeca.toFixed(2)}</p>
    <p><strong>Valor da Mão de Obra:</strong> R$ ${valorMO.toFixed(2)}</p>
    <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
});
document.getElementById("btn-limpar").addEventListener("click", function () {
  document.getElementById("form-orcamento").reset();
  document.getElementById("resultado").innerHTML = "";
});
document.getElementById("btn-salvar").addEventListener("click", function () {       
    const resultado = document.getElementById("resultado").innerHTML;
    if (resultado) {
        const blob = new Blob([resultado], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "orcamento.html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } else {
        alert("Por favor, gere um orçamento antes de salvar.");
    }
    });
document.getElementById("btn-imprimir").addEventListener("click", function () {         
    const resultado = document.getElementById("resultado").innerHTML;
    if (resultado) {
        const printWindow = window.open("", "_blank");
        printWindow.document.write(`
            <html>
            <head>
                <title>Orçamento</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    h2 { color: #333; }
                    p { margin: 5px 0; }
                </style>
            </head>
            <body>
                ${resultado}
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    } else {
        alert("Por favor, gere um orçamento antes de imprimir.");
    }
});
document.getElementById("btn-sair").addEventListener("click", function () {
  if (confirm("Você tem certeza que deseja sair?")) {
    window.close();
  }
});