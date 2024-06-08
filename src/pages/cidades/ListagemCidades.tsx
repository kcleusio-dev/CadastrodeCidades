import { useSearchParams } from "react-router-dom";

import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { useMemo } from "react";

export const ListagemCidades = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams])

    return (
        <LayoutBaseDePagina
            titulo="Listagem de Cidades"
            barraDeFerramentas={
                <FerramentasDaListagem
                    mostrarInputBusca
                    textoBotaoNovo="Nova"
                    textoDeBusca={busca}
                    aoMudarTextoBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
                />
            }
            children={undefined}>

        </LayoutBaseDePagina>

    );
}