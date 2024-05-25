import { FerramentasDeDetalhes } from "../../shared/components";
import { FerramentasDaListagem } from "../../shared/components/ferramentas-da-listagem/FerramentasDaListagem";
import { LayoutBaseDePagina } from "../../shared/layouts"

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página Incial"
      barraDeFerramentas={(
        <FerramentasDeDetalhes />
      )}>
        Testandoooo
    </LayoutBaseDePagina >
  );
}