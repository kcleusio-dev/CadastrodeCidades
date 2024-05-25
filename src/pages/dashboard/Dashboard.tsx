import { BarraDeFerramentas } from "../../shared/components/barra-de-ferramentas/BarraDeFerramentas";
import { LayoutBaseDePagina } from "../../shared/layouts"

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página Inicial"
      barraDeFerramentas={(
        <BarraDeFerramentas />
      )}>
      Testando
    </LayoutBaseDePagina>
  );
}