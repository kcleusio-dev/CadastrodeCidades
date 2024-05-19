import { HomeMini } from "@mui/icons-material";
import { useTheme, Drawer, Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon } from "@mui/material";

import { Box } from '@mui/system';


interface IMenuLateralProps {
  children: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

  const theme = useTheme();
  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} height="100% " display="flex" flexDirection="column">
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://github.com/kcleusio-dev.png"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>person</Icon>
                </ListItemIcon>
                <ListItemText primary="Quadros" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>

  );
};