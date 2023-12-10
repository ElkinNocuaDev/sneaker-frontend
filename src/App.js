// Importar Routes en lugar de Switch
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Agregar más rutas según tus necesidades */}
    </Routes>
  );
};

export default App;


