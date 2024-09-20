import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageHome from './componentes/pages/home/PageHome';
import ListaPresente from './componentes/pages/Lista Presente/Lista Presente Page/ListaPresente';

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
