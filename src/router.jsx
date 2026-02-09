import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Doacao } from "./pages/doacao";
import { EventoEP } from "./pages/eventosEP";
import { Mentoria } from "./pages/mentoria";
import { Usuario } from "./pages/usuario";
import { Voluntariado } from "./pages/voluntariado";
import { Layout } from "./layouts/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/doacao",
        element: <Doacao />,
      },
      {
        path: "/eventosep",
        element: <EventoEP />,
      },
      {
        path: "/mentoria",
        element: <Mentoria />,
      },
      {
        path: "/usuario",
        element: <Usuario />,
      },
      {
        path: "/voluntariado",
        element: <Voluntariado />,
      },
    ],
  },
]);
