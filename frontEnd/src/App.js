
import './App.css';
import { Footer } from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import { Outlet } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import  {CriarConta } from './components/cirar-conta/CriarConta'
import { IniciaSessao } from './components/iniciar-sessao/IniciarSessao';
import MenuMobile from './components/menu-mobile/MenuMobile';

 const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Main />} />
      <Route path="/criar-conta" element={<CriarConta />} />
      <Route path="/iniciar-sessao" element={<IniciaSessao />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
