
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemCidades, ListagemPessoas } from "../pages";


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
        icon: 'people',
        label: 'Pessoas',
        path: '/pessoas'
      },

    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/cidades" element={<ListagemCidades />} />
      {/* <Route path="/cidades/detalhes/:id" element={<ListagemCidades />} /> */}
      
      <Route path="/pessoas" element={<ListagemPessoas />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
};
