import { useSearchParams } from "react-router-dom";

import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { useEffect, useMemo } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebounce } from "../../shared/hooks";

export const ListagemPessoas = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const { debaunce } = useDebounce(300, false);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);

    useEffect(() => {
        debaunce(() => {
            PessoasService.getAll(1, busca).then(
                (result) => {
                    if (result instanceof Error) {
                        alert(result.message)
                    } else {
                        console.log(result)
                    }
                });
        });

    }, [busca]);

    return (
        <LayoutBaseDePagina
            titulo="Listagem de Pessoas"
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