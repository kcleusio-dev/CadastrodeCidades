import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material"

interface IFerramentasDeDetalhesProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
    aoClicarEmVoltar

}) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();
    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Paper}
        >
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmSalvar}
                    startIcon={<Icon>add</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Salvar
                    </Typography>
                </Button>
            )}

            {mostrarBotaoSalvarCarregando && (
                <Skeleton width={110} height={60} />
            )}

            {(mostrarBotaoSalvarEFechar &&
                !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
                    <Button
                        variant="outlined"
                        color="primary"
                        disableElevation
                        onClick={aoClicarEmSalvarEFechar}
                        startIcon={<Icon>save</Icon>}
                    >
                        <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                            Salvar e voltar
                        </Typography>

                    </Button>
                )}

            {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
                <Skeleton width={180} height={60} />
            )}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmApagar}
                    startIcon={<Icon>delete</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Apagar
                    </Typography>
                </Button>
            )}

            {(mostrarBotaoApagarCarregando &&
                <Skeleton width={110} height={60} />
            )}

            {
                (mostrarBotaoNovo &&
                    !mostrarBotaoNovoCarregando && !smDown) && (
                    <Button
                        variant="outlined"
                        color="primary"
                        disableElevation
                        onClick={aoClicarEmNovo}
                        startIcon={<Icon>add</Icon>}
                    >
                        <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                            Novo
                        </Typography>
                        TODO: fazer Group Button
                    </Button>
                )}
            {
                (mostrarBotaoNovoCarregando && !smDown) && (
                    <Skeleton width={180} height={60} />
                )
            }

            {
                (
                    mostrarBotaoVoltar &&
                    (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
                ) && (
                    <Divider variant="middle" orientation="vertical" />

                )   
            }

            {
                (mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
                    <Button
                        variant="outlined"
                        color="primary"
                        disableElevation
                        onClick={aoClicarEmVoltar}
                        startIcon={<Icon>arrow_back</Icon>}
                    >
                        <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                            Voltar
                        </Typography>
                    </Button>
                )
            }

            {
                mostrarBotaoVoltarCarregando && (
                    < Skeleton width={110} height={60} />
                )
            }
        </Box >
    );
};