import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageHome from './componentes/pages/home/PageHome';
import ListaPresente from './componentes/pages/Lista Presente/ListaPresente';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<PageHome/>}/>
          <Route path='/listaPresentes' element={<ListaPresente/>}/>
        </Routes>
      </Router>
  );
}

export default App;
