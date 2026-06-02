
# 🔧 Sistema de Orçamento para Oficina Mecânica

Um sistema web simples e intuitivo desenvolvido de forma autônoma para automatizar e facilitar a criação de orçamentos em oficinas mecânicas. A aplicação consolida dados do cliente, veículo, descrição dos serviços e realiza o cálculo automatizado dos valores de peças e mão de obra.

## 🚀 Funcionalidades

* **Formulário Completo de Cadastro:** Captura dados do cliente, contato (e-mail/telefone) e informações cruciais do veículo (marca, modelo e placa).
* **Validação de Campos:** Uso de expressões regulares (`patterns`) para garantir a inserção correta de placas no formato tradicional e telefones.
* **Cálculo Automatizado:** Soma em tempo real o valor das peças e da mão de obra, exibindo o total formatado em Real (R$).
* **Manipulação de Documentos via JS:**
  * **Exportação:** Opção de salvar o orçamento gerado como um arquivo HTML local utilizando `Blob`.
  * **Impressão:** Função configurada para abrir uma janela otimizada e enviar o resumo diretamente para a impressora do estabelecimento.
  * **Limpeza rápida:** Botão para resetar o formulário e limpar a tela para o próximo atendimento.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web nativas (Vanilla Stack), focando na leveza e portabilidade:

* **HTML5:** Estruturação semântica do formulário e uso de inputs específicos (`date`, `tel`, `email`).
* **CSS3:** Estilização limpa, com design centralizado em formato de card e feedback visual nos botões (`hover`).
* **JavaScript (ES6):** Manipulação do DOM, escutadores de eventos (`addEventListener`), criação dinâmica de elementos e manipulação de arquivos em memória (`URL.createObjectURL`).

---

## 📂 Estrutura do Projeto

```text
├── index.html       # Interface principal e formulário de captação
├── style.css        # Estilização visual e responsividade do sistema
└── script.js        # Lógica de cálculo, validação, impressão e download

```

---

## 💻 Como Utilizar a Aplicação

Por ser uma aplicação baseada em tecnologias front-end nativas, ela não necessita de instalação de servidores ou dependências:

1. Baixe ou clone os arquivos do repositório.
2. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador web (Chrome, Edge, Firefox).
3. Preencha os dados do cliente, veículo e valores.
4. Clique em **Gerar Orçamento** para visualizar o resumo na tela.
5. Utilize as funções adicionais para **Imprimir** ou **Salvar** o documento gerado.

---

💡 *Projeto autoral desenvolvido por Daiane Dev, aplicando tecnologia para otimizar processos e fluxos de trabalho reais.*
