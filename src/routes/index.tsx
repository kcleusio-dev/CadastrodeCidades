
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemCidades } from "../pages";


export const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Página Inicial',
        path: '/home'
      },
      {
        icon: 'location_city',
        label: 'Cidades',
        path: '/cidades'
      },

    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/cidades" element={<ListagemCidades />} />
      {/* <Route path="/cidades/detalhes/:id" element={<ListagemCidades />} /> */}

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
};
