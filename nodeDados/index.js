const pup = require("puppeteer");
const fs = require("fs");
const url =
  "https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Brasil_por_popula%C3%A7%C3%A3o_%282022%29";

async function extrairDadoTabela() {
  const browser = await pup.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector(".wikitable.sortable.jquery-tablesorter tbody tr");

  const dados = await page.evaluate(() => {
    const linhas = document.querySelectorAll(".wikitable.sortable.jquery-tablesorter tr");

    const dadosTabela = [];

    for (let i = 1; i < linhas.length; i++) {
      const linha = linhas[i];
      const cells = linha.querySelectorAll("td");

      // Verifica se a linha contém células antes de acessá-la
      if (cells.length >= 5) {
        const posicao = cells[0].textContent.trim();
        const codigoIBGE = cells[1].textContent.trim();
        const municipio = cells[2].textContent.trim();
        const uf = cells[3].textContent.trim();
        const populacao = cells[4].textContent.trim();

        dadosTabela.push({ posicao, codigoIBGE, municipio, uf, populacao });
      } else {
        console.warn(`A linha ${i} não contém o número esperado de células e será ignorada.`);
      }
    }

    return dadosTabela;
  });

  await browser.close();

  return dados;
}

async function exportarParaJSON(dados, nomeArquivo) {
  try {
    await fs.promises.writeFile(nomeArquivo, JSON.stringify(dados, null, 2));
    console.log(`Dados exportados para ${nomeArquivo} com sucesso!`);
  } catch (error) {
    console.error("Erro ao exportar dados para JSON:", error);
  }
}

extrairDadoTabela()
  .then((dados) => {
    console.log("Extração concluída");
    exportarParaJSON(dados, "dados_municipios_brasil.json");
  })
  .catch((err) => {
    console.error("Erro ao extrair dados da tabela:", err);
  });
