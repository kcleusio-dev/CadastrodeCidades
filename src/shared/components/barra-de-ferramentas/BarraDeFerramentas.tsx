import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material"

interface IBarraDeFerramentasProps {
  textoDeBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}
export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textoDeBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo

}) => {
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
      {mostrarInputBusca && (
        <TextField
          size="small"
          value={textoDeBusca}
          placeholder="Pesquisar..."
          onChange={(e) => aoMudarTextoBusca?.(e.target.value)}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >
            {textoBotaoNovo}</Button>
        )}
      </Box>
    </Box>
  )
}