import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IDetalhePessoa {
    id: number;
    email: string;
    cidadeId: number;
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
        return new Error((error as { message: string }).message || 'Erro ao apresentar os registos.');

    }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {

    try {

        const { data } = await Api.get(`/pessoas/${id}`);

        if (data) {
            return data
        };
        return new Error('Erro ao consultar o registo.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao consultar o registo.');

    }
};

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {

    try {

        const { data } = await Api.post<IDetalhePessoa>('/pessoas', dados);

        if (data) {
            return data.id
        };
        return new Error('Erro ao criar o registo.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao criar o registo.');

    }
};
const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
    try {
        await Api.put(`/pessoas/${id}`, dados);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao actualizar o registo.');

    }
};
const deleteById = async (id: number,): Promise<void | Error> => {
    try {
        await Api.delete(`/pessoas/${id}`);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao apagar o registo.');

    }
};

export const PessoasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}
