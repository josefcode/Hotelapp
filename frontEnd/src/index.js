import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,Route } from "react-router-dom"
import Main from './components/main/Main';
import { IniciaSessao } from './components/iniciar-sessao/IniciarSessao';
import ErrorPage from './components/ErrorPage';
import { LoginProvider} from '../src/components/hooks/useLogin'
import { ShowProvider} from './components/hooks/useShow'
import { CriarConta } from './components/criar-conta/CriarConta';
import DetaleProduto from './components/detale-produto/DetaleProduto';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <LoginProvider>
      <ShowProvider>
    <Routes>
    <Route path='/' element={<App/>}  >
      <Route index element={<Main />}  />
      <Route path="/criar-conta" element={<CriarConta />} />
      <Route path="/iniciar-sessao" element={<IniciaSessao />}  />
      <Route path="/detaile-produto/:id" element={<DetaleProduto />}  />
      <Route path="*" element={<ErrorPage />} />
    </Route>
</Routes>
</ShowProvider>
</LoginProvider>
</BrowserRouter>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
