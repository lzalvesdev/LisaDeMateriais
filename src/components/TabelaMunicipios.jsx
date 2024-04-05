import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
} from "@mui/material";

function TabelaMunicipios({ dados }) {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [pagina, setPagina] = useState(0);
  const [linhasPorPagina, setLinhasPorPagina] = useState(5);

  const handlePesquisaChange = (event) => {
    setTermoPesquisa(event.target.value);
    setPagina(0);
  };

  const dadosFiltrados = dados.filter((item) =>
    item.municipio.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  const indiceInicio = pagina * linhasPorPagina;
  const indiceFim = indiceInicio + linhasPorPagina;

  const dadosPagina = dadosFiltrados.slice(indiceInicio, indiceFim);

  return (
    <Paper sx={{ maxWidth: 800, margin: "auto", marginBottom: 2 }}>
      <TextField
        id="search"
        label="Pesquisar Município"
        variant="outlined"
        fullWidth
        value={termoPesquisa}
        onChange={handlePesquisaChange}
        sx={{ marginBottom: 2 }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Posição</TableCell>
              <TableCell>Código IBGE</TableCell>
              <TableCell>Município</TableCell>
              <TableCell>UF</TableCell>
              <TableCell>População</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dadosPagina.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.posicao}</TableCell>
                <TableCell>{item.codigoIBGE}</TableCell>
                <TableCell>{item.municipio}</TableCell>
                <TableCell>{item.uf}</TableCell>
                <TableCell>{item.populacao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage="Linhas por página"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dadosFiltrados.length}
        rowsPerPage={linhasPorPagina}
        page={pagina}
        onPageChange={(event, novaPagina) => setPagina(novaPagina)}
        onRowsPerPageChange={(event) => {
          setLinhasPorPagina(parseInt(event.target.value, 10));
          setPagina(0);
        }}
      />
    </Paper>
  );
}

export default TabelaMunicipios;
