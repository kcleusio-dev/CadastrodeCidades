import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";


export const AppRoutes = () => {

  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([{
      icon: 'home',
      label: 'Página Inicial',
      path: '/home'
    },
    {
      icon: 'star',
      label: 'Cidades',
      path: '/pagina-cidades'
    },
    ]);
  }, []);
  return (
    <Routes>
      <Route path="/home" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Mudar Drawer</Button>} />


      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
};
