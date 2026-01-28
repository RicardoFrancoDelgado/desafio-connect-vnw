import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/home/Home";
import { Doacao } from "./pages/doacao/Doacao";
import { EventoEP } from "./pages/eventosEP/EventosEP";
import { Mentoria } from "./pages/mentoria/Mentoria";
import { Usuario } from "./pages/usuario/Usuario";
import { Voluntariado } from "./pages/voluntariado/Voluntariado";

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
