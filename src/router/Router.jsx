import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import TransparenciaFinanciera from "../pages/TransparenciaFinanciera";
import ResolucionPage from "../pages/ResolucionPage"; // Import ResolucionPage
import BusquedaPage from "../pages/BusquedaPage"; // Import BusquedaPage

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} /> {/* Add Home route */}
      <Route path="transparencia-financiera" element={<TransparenciaFinanciera />} />
      <Route path="resolucion/:slug" element={<ResolucionPage />} /> {/* Add ResolucionPage route */}
      <Route path="busqueda" element={<BusquedaPage />} /> {/* Add BusquedaPage route */}
      {/* Add other routes here */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;