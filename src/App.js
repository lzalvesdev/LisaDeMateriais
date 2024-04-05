import React from "react";
import dadosMunicipios from "./data/dados_municipios_brasil.json"; // Importe o JSON aqui
import TabelaMunicipios from "./components/TabelaMunicipios";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <AppBar position="static" sx={{ marginBottom: "5em" }}>
        <Toolbar>
          <Container maxWidth="md" style={{ margin: "auto" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
              Lista de municípios do Brasil por população (2022)
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <main>
        <TabelaMunicipios dados={dadosMunicipios} />
      </main>
    </div>
  );
}

export default App;
