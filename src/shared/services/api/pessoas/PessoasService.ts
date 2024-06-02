import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IPessoa {
    idPessoa: number;
    nomeCompleto: string;

}

interface IListagemPessoa {
    id: number;
    nomeCompleto: string;
    cidadeId: number;
}
type TPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => {

    try {
        const urlRelativa = `/pessoas?_page=${page}
        &limit=${Environment.LIMIT_DE_BUSCA}
        &nomeCompleto_like=${filter}`;

        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMIT_DE_BUSCA),
            };
        };
        return new Error('Erro ao apresentar os registos.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string}).message || 'Erro ao apresentar os registos.');

    }
};

const getById = async (): Promise<any> => { };
const create = async (): Promise<any> => { };
const updateById = async (): Promise<any> => { };
const deleteById = async (): Promise<any> => { };

export const PessoasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}
