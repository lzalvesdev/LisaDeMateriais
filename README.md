# 🚀 Projeto de Extração de Dados de Municípios do Brasil

Este projeto tem como objetivo extrair informações sobre as maiores cidades do Brasil a partir da página da Wikipedia "Lista de municípios do Brasil por população (2022)". As informações a serem coletadas são o nome da cidade, sua respectiva população e a unidade federativa (UF) à qual pertence.

📚 **Acesse o sistema [aqui](https://lzalvesdev.github.io/ListaDeMunicipios/).**

## 🛠️ Ferramentas Utilizadas

- **Puppeteer**: Para automação de navegadores web.
- **Node.js**: Para execução de código no servidor.
- **React**: Para exibição dos dados.

## 💻 Funcionamento do Código

O código está estruturado em duas partes principais:

1. **Script Node.js**:
   - Utiliza o Puppeteer para abrir uma página da Wikipedia e extrair os dados da tabela de municípios.
   - Exporta os dados coletados para um arquivo JSON.

2. **Aplicação React**:
   - Utilizado para criar uma interface de usuário simples que exibe os dados coletados.
   - Permite ao usuário pesquisar por municípios e implementa uma paginação para facilitar a navegação pelos resultados.

## 📂 Estrutura do Projeto

- **react/**: Contém a aplicação React para exibição dos dados.
- **nodeDados/index.js**: Contém o script Node.js para extração de dados.
- **src/data/dados_municipios_brasil.json**: Contém o arquivo dos dados em JSON criado com Puppeteer.

## 📦 Como Executar o Projeto

1. **Script Node.js**:
   - Navegue até a pasta `nodeDados/` e instale as dependências utilizando `npm install`.
   - Execute o script Node.js com `node index.js` para gerar o arquivo JSON com os dados.

2. **Aplicação React**:
   - Na pasta principal `/` instale as dependências com `npm install`.
   - Inicie a aplicação React com `npm start`.

##  Espero que este README seja útil para entender o projeto e sua implementação! Se precisar de mais alguma informação ou esclarecimento, estou à disposição para ajudar. 😊
